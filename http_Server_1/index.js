
const express = require('express')

const bodyParser = require("body-parser")

const app = express()
// app is an object of express upon which we are using get,post etc function
const port = 9000

// app.get('/', function(req, res){
//   res.send('<b>Hello Pratham Raj</b>')
// })





app.post('/conversations', function(req, res){
  console.log(req.headers.authorization)
  console.log(req.headers.password)
  console.log("query: ")
  console.log(req.query);
  
  // console.log(req.body) // we cant see the body here for seeing this we have to import body
  res.send({
    msg:"completed"
  }) 
})

// app.use(bodyParser.json());

// app.post('/',function(req,res){
//   console.log(req.body)
//   res.send({
//     name: "Pratham Raj",
//     age: 21
//   })
// })


// app.post('/',function(req,res){
//    const temp = req.body;
//    console.log(temp)
//    app.get('/',(req,res)=>{
//      res.send(temp)
//    })
 
// })

// let temp = null;
// let availableUntil = null;

// app.post('/', function (req, res) {
//   temp = req.body;
//   console.log(temp);

//   // Set a timestamp for when the data should no longer be available (5 seconds from now)
//   availableUntil = Date.now() + 5000;

//   // Optional response to acknowledge the POST request
//   res.send('Data received and will be available for 5 seconds.');
// });

// app.get('/', (req, res) => {
//   // Check if the current time is still within the 5-second window
//   if (Date.now() < availableUntil) {
//     res.send(temp); // Send the temp data if within the 5-second window
//   } else {
//     res.send('Data is no longer available.'); // Send message if the time has expired
//   }
// });

/** 
app.get("/route-handler", function(req, res){ 
  // req = request, res = response
  // header ,body,query parameter
  // do machine learning model or do mathematical operation
  
  // res.send('Hello World!')
  res.send({
    name: "Pratham Raj",
    age: 21
  })
})
*/
app.listen(port,()=>{
  console.log(`Example app linstening on port : ${port}`)
})