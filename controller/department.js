const departmentModel = require('../models/department');


exports.createDepartment = async (req, res) => {
    try {
        const { error } = departmentValidation.validate(req.body)
        if (error) {
            return res.status(400).json({ message: error.details[0].message })
        }

        const { name, faculty } = req.body;

        const data = {
            name,
            faculty
        }

        const department = await departmentModel.create(data)
        res.status(201).json({
            message: 'Department created successfully',
            data: department
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


exports.getAlldepartments = async (req, res) => {
    try {
        const departments = await departmentModel.find()

        res.status(200).json({
            message: `All departments found and the total is: ${departments.length}`,
            data: departments
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


exports.getOnedepartment = async (req, res) => {
    try {
        const { id } = req.params;
        const department = await departmentModel.findById(id).populate('courses')
        if (!department) {
            return res.status(404).json({ message: 'Department not found' })
        }
        res.status(200).json({
            message: 'Department found',
            data: department
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


exports.updateDepartment = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, faculty } = req.body;
        const department = await departmentModel.findById(id)

        if (!department) {
            return res.status(404).json({
             message: 'Department not found' 
            })
        }

        const data = {
            name,
            faculty
        }

        const updatedepartment = await departmentModel.findByIdAndUpdate(id, data, { new: true })
        
        res.status(200).json({
            message: 'Department updated successfully',
            data: updatedepartment
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


exports.deleteDepartment = async (req, res) => {
    try {
        const { id } = req.params;
        const department = await departmentModel.findByIdAndDelete(id)
        if (!department) {
            return res.status(404).json({ message: 'Department not found' })
        }
        res.status(200).json({ message: 'Department deleted successfully' })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}