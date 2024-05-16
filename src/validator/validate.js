import { body } from 'express-validator'

const validatorData = [
    body('akselerometer', 'Invalid no data').not().isEmpty(),
    body('kelembapan', 'Invalid no data').not().isEmpty(),
    body('tegangan', 'Invalid no data').not().isEmpty(),
    body('korosi', 'Invalid no data').not().isEmpty(),
    body('collection', 'Invalid no data').not().isEmpty(),
    
    body('akselerometer', 'Invalid must be alphanumeric').isAlphanumeric(),
    body('kelembapan', 'Invalid must be alphanumeric').isAlphanumeric(),
    body('tegangan', 'Invalid must be alphanumeric').isAlphanumeric(),
    body('korosi', 'Invalid must be alphanumeric').isAlphanumeric(),
]

export {
    validatorData
}