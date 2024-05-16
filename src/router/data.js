import dataController from '../controller/data-controller.js'
import { Router } from "express";
import { validatorData } from '../validator/validate.js';

const router = Router()

router.get('/data/:collection', dataController.getData)
router.post('/data', validatorData, dataController.insertData)

export default router