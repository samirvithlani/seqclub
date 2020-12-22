const db = require('../model')
const Employee = db.employee;

exports.create=(req,res)=>{

    const employee ={

        name:req.body.name,
        email:req.body.email,
        age:req.body.age

    }

    //save this to database..

    Employee.create(employee).then(data=>res.send(data)).catch(err=>{
        res.status(500);
    })

}