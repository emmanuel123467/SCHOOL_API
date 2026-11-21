const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI
mongoose.connect(URI)
.then(() => {
    console.log('connected to databse sucessfully');
})
.catch((error) => {
    console.log('connection to database failed', error.message)
})