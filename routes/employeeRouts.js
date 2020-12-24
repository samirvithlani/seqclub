module.exports =app=>{

    const employee = require('../controller/EmployeeController')
    var router = require('express').Router();

    router.post('/',employee.create)
    router.get('/',employee.findAll)
    router.get('/:id',employee.findOne)
    router.put('/:id',employee.update)
    router.delete('/:id',employee.delete)
    router.delete('/byname/:name',employee.deleteByName)
    app.use('/employee',router)
}