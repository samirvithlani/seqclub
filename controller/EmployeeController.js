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

exports.findAll = (req,res)=>{

    Employee.findAll().then(data=>{
        res.send(data)
    }).catch(err=>{
        res.status(500).send({
            error:"error while fetching data..."
        })
    })
}
exports.findOne = (req,res)=>{

    const id = req.params.id
    Employee.findByPk(id).then(data=>{
        res.send(data)
    }).catch(err=>{
        res.status(500).send({
            error:"error while fetching data..."
        })
    })

}
exports.update =(req,res)=>{

    const id = req.params.id
    console.log(id)
    const employee ={

        name:req.body.name,
        email:req.body.email,
        age:req.body.age

    }
    Employee.update(employee,{where:{id:id}})
    res.send("ok..")
}
exports.delete = (req,res)=>{
    const id = req.params.id
    Employee.destroy({
        where:{id:id}
    }).then(rs =>{
        if(rs==1){
            res.send("deleted")
        }
        else{
            res.send("not deleted..")
        }

    })

}
exports.deleteByName = (req,res)=>{

    const name = req.params.name
    Employee.destroy({where:{name:name}}).then(no=>{
        if(no>0){
            res.send("deleted..")
        }
        else{
            res.send("not deleted..")
        }
    })
}