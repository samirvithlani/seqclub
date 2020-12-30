module.exports =app=>{

    const employee = require('../controller/dummyemployee')
    var router = require('express').Router();

    
    router.get('/',employee.getEmployee)
    router.get('/corona',employee.getCoronaData)
    router.get('/create',employee.createEmployee)
    router.get('/getuser',employee.getUser)
    router.get('/postuser',employee.postUser)
    router.get('/deleteuser',employee.delteuser)
    
    
    
    
    app.use('/dummy',router)
}