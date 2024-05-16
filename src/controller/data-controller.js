import dataRepository from '../repository/data-repo.js';
import { SuccessWebResponse, ErrorWebResponse } from '../helper/response.js';
import { validationResult } from 'express-validator';

const insertData = async (req, res, next) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const error = ErrorWebResponse(400, "Bad Request", errors.array())
      return res.status(400).json(error)
    }
    
    const data = await dataRepository.create(req.body);
    const response = SuccessWebResponse(200, "OK", "Success Insert Data", data)
    
    res.status(201).json(response);
  } catch (error) {
    next(error)
  }
}

const getData = async (req, res, next) => {
  try {
    const data = await dataRepository.findAll(req.params.collection);
    const response = SuccessWebResponse(200, "OK", "Success Get All Data", data)

    res.status(200).json(response);
  } catch (error) {
    next(error)
  }
}

export default {
  insertData,
  getData,
}