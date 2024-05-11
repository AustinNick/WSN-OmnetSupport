import dataController from '../controller/data-controller.js'
import { Router } from "express";

const router = Router()

router.get('/data', dataController.getData)
router.post('/data', dataController.insertData)

export default router