import dataRepository from '../repository/data-repo.js';
import { SuccessWebResponse } from '../helper/response.js';

const insertData = async (req, res) => {
  try {
    const data = await dataRepository.create(req.body);
    const response = SuccessWebResponse(200, "OK", "Success Insert Data", data)
    
    res.status(201).json(response);
  } catch (error) {
    next(error)
  }
}

const getData = async (req, res) => {
  try {
    const data = await dataRepository.findAll();
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