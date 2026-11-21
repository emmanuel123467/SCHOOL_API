const courseModel = require('../models/course');
const departmentModel = require('../models/department');


exports.createCourse = async (req, res) => {
    try {
        const { error } = courseValidation.validate(req.body)
        if (error) {
            return res.status(400).json({ message: error.details[0].message })
        }

        const { courseCode, title, creditUnits, department } = req.body;

        const departmentExists = await departmentModel.findById(department)
        if (!departmentExists) {
            return res.status(404).json({ message: 'Department not found' })
        }

        const data = {
            courseCode,
            title,
            creditUnits,
            department
        }

        const course = await courseModel.create(data)

        
        departmentExists.courses.push(course._id)
        await departmentExists.save()

        res.status(201).json({
            message: 'Course created successfully',
            data: course
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


exports.getAllcourses = async (req, res) => {
    try {
        const courses = await courseModel.find()

        res.status(200).json({
            message: 'All courses',
            data: courses
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


exports.getOnecourse = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await courseModel.findById(id).populate('departmentId')
        if (!course) {
            return res.status(404).json({ message: 'Course not found' })
        }
        res.status(200).json({
            message: 'Course found',
            data: course
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


exports.updateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const { courseCode, title, creditUnits } = req.body;

        const data = {
            courseCode,
            title,
            creditUnits
        }

        const course = await courseModel.findByIdAndUpdate(id, data, { new: true })
        if (!course) {
            return res.status(404).json({ message: 'Course not found' })
        }
        res.status(200).json({
            message: 'Course updated successfully',
            data: course
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


exports.deleteCourse = async (req, res) => {
    try {
        const { id } = req.params
        const course = await courseModel.findByIdAndDelete(id)

        if (!course) {
            return res.status(404).json({
                message: 'Course not found'
            })
        }

        res.status(200).json({
            message: 'Course deleted successfully'
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}