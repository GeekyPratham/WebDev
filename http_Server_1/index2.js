
const express = require('express')

const app = express()
// app is an object of express upon which we are using get,post etc function
const port = process.env.PORT || 3000

app.get('/', function(req, res){
  res.send('<b>Hello Pratham Raj</b>')
})

app.listen(port,()=>{
    console.log(`Example app linstening on port : ${port}`)
})