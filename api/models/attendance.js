const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    employeeId: {
        type:'integer',
        required: true
    },
    employeeName:{
        type:String,
        required: true,
    },
    date:{
        type: String,
        required: true

    },
    status: {
        type: String,
        required: true
    }
});
const Attendance = mongoose.model('Attendance',attendanceSchema);
module.exports = Attendance;