const { STRING, INTEGER } = require("sequelize")

module.exports =(sequelize,Sequelize)=>{

    const Employee = sequelize.define("employee_tcs",{

        name:{
            type:STRING
        },
        email:{
            type:STRING
        },
        age:{
            type:INTEGER
        }

    });
    return Employee;

}