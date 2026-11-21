const router = require('express').Router()

const { createDepartment, getAlldepartments, getOnedepartment, updateDepartment, deleteDepartment } = require('../controller/department')
const {validateDepartment} = require('../validations/validation')


router.post('/newdepartment', validateDepartment, createDepartment)
router.get('/getAlldepartments', getAlldepartments)
router.get('/getOnedepartment/:id', getOnedepartment)
router.put('/updatedepartment/:id', updateDepartment)
router.delete('/deletedepartment/:id', deleteDepartment)

module.exports = router;