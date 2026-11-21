const express = require('express');
require('dotenv').config()
require('./database/database')
const PORT = process.env.PORT || 2200;
const departmentRouter = require('./Router/department')
const courseRouter = require('./Router/course')

const app = express();
app.use(express.json());
app.use(departmentRouter)
app.use(courseRouter)

app.listen(PORT, ()=> {
    console.log(`Server is running on PORT: ${PORT}`)
})