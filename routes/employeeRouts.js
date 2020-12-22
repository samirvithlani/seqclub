module.exports =app=>{

    const employee = require('../controller/EmployeeController')
    var router = require('express').Router();

    router.post('/',employee.create)
    app.use('/employee',router)
}