const request = require('request')

const url = "http://dummy.restapiexample.com/api/v1/employees";
const url1 = "https://covid-19-data.p.rapidapi.com/country";

exports.getEmployee = (req, res) => {


    request.get({ url: url }, function (err, res, body) {


        const data = JSON.parse(body)
        console.log(data.data[0].employee_name)
        console.log(data.status)
    })

}

exports.getCoronaData = (req, res) => {

    var queryParms = { "name": "India" }
    var authheaders = { "x-rapidapi-key": "2cc1fb7fd1msh4c4e1eb5e0cf8e5p13cfd1jsn422b10471be6", "x-rapidapi-host": "covid-19-data.p.rapidapi.com" }
    request.get({ url: url1 , headers: authheaders,qs: queryParms  }, function (err, res, body) {

    var data = JSON.parse(body);
    console.log(data[0].country)
    console.log(data.recovered)


    })

}