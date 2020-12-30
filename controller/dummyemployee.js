const request = require('request')

const url = "http://dummy.restapiexample.com/api/v1/employees";
const url1 = "https://covid-19-data.p.rapidapi.com/country";
const url2 = "http://dummy.restapiexample.com/api/v1/create";
const url3 = "https://gorest.co.in/public-api/posts";

exports.getEmployee = (req, res) => {


    request.get({ url: url }, function (err, res, body) {


        const data = JSON.parse(body)
        console.log(data.data)
        console.log(data.data[0].employee_name)
        console.log(data.status)
    })

}

exports.getCoronaData = (req, res) => {

    var queryParms = { "name": "India" }
    var authheaders = { "x-rapidapi-key": "2cc1fb7fd1msh4c4e1eb5e0cf8e5p13cfd1jsn422b10471be6", "x-rapidapi-host": "covid-19-data.p.rapidapi.com" }
    request.get({ url: url1, headers: authheaders, qs: queryParms }, function (err, res, body) {

        var data = JSON.parse(body);
        console.log(data[0].country)
        console.log(data.recovered)


    })
}

exports.createEmployee = (req, res) => {

    const data = {
        "name": "raj",
        "salary": "12345",
        "age": "50"
    }
    request.post(
        { url: url2, qs: data }, function (err, succ, body) {

            if (err) {
                console.log(err)
                res.send("error")
            }
            else {

                res.send(body)
            }
        }
    )
}

exports.getUser = (req, res) => {

    request.get({ url: url3 }, function (err, succ, body) {

        const data = JSON.parse(body)
        const users = data.data
        console.log(users)
    })

}
exports.postUser = (req, res) => {

    var user = {
        "name": "samir",
        "gender": "Male",
        "email": "samir1@gmail.com",
        "status": "Active"
    }
    var authheaders = { "Authorization": "Bearer 87a6e693c6ad5316132fb9df78c80553c9fe17fbee4945d3704e2b55fd94c2b5" }
    request.post({ url: "https://gorest.co.in/public-api/users", headers: authheaders, qs: user }, function (err, succ, body) {

        if (!err) {
            res.send(body)
        }
        else {
            res.send(err)
        }


    })
}
exports.delteuser = (req, res) => {

    var authheaders = { "Authorization": "Bearer 87a6e693c6ad5316132fb9df78c80553c9fe17fbee4945d3704e2b55fd94c2b5" }
    request.delete({ url: "https://gorest.co.in/public-api/categories/1", headers: authheaders }, function (err, succ, body) {

        if (!err) {
            res.send(body)
        }
        else {
            res.send({ error: err })
        }
    })
}


