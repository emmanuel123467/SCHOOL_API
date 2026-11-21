const router = require('express').Router()

const { createCourse, getAllcourses, getOnecourse, updateCourse, deleteCourse } = require('../controller/course')
const { validateCourse } = require('../validations/validation')

router.post('/newcourse', validateCourse, createCourse)
router.get('/getAllcourses', getAllcourses)
router.get('/getOnecourse/:id', getOnecourse)
router.put('/updatecourse/:id', updateCourse)
router.delete('/deletecourse/:id', deleteCourse)

module.exports = router;