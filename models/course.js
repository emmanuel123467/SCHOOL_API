const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    courseCode:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    creditUnits:{
        type:Number,
        required:true
    },
    departmentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'departments',
        required:true
    }
})

const courseModel = mongoose.model('courses', courseSchema)

module.exports = courseModel