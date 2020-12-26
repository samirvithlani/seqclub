module.exports =app=>{

    const employee = require('../controller/dummyemployee')
    var router = require('express').Router();

    
    router.get('/',employee.getEmployee)
    router.get('/corona',employee.getCoronaData)
    
    
    
    
    app.use('/dummy',router)
}