const express = require('express')
const app = express()
const db = require('./model')
app.use(express.json())

//dont forget
db.sequelize.sync();
app.get('/', (req, res) => {

    res.send("hello")
})
require('./routes/employeeRouts')(app)
require('./routes/dummyroutes')(app)
app.listen(3000, () => {

    console.log("server started...")
})