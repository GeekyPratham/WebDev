const express = require("express");
const app = express()
const cors = require("cors"); // Import the cors package
app.use(cors()); // Enable CORS for all routes

app.get("/sum",(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const finalSum = a+b;
    res.status(200).send(finalSum.toString());
})

// app.get("/interest",(req,res)=>{
//     const p = parseInt(req.query.p);
//     const r = parseInt(req.query.r);
//     const t = parseInt(req.query.t);
//     const totalAmount = (p*r*t)/100;
//     res.status(200).send(totalAmount.toString());
// })
app.listen(3000)