const express = require("express");
const zod = require("zod");

const app = express()


app.use(express.json());

let noOfRequest = 0;

function calcuateRequestCount(req,res,next){
    noOfRequest++;
    console.log(noOfRequest);
    next();
}

// app.get("/check1",calcuateRequestCount,function(req,res){
//     res.json({
//         msg:"ever thing ok"
//     })
// })

// app.get("/check2",calcuateRequestCount,function(req,res){
//     res.json({
//         msg:"ever thing ok"
//     })
// })



app.use(calcuateRequestCount)


// app.get("/check1",function(req,res){

//     res.json({
//         msg:"ever thing ok"
//     })
// })

// app.get("/check2",function(req,res){
//     res.json({
//         msg:"ever thing ok"
//     })
// })


// app.post("/check1",function(req,res){
//     // [1,2] doing lots of stuff for input validation as it is correct or not it can minimize by using zod

//     const kidney = req.body.kidney;
//     const len = kidney.length;

//     console.log(kidney);
//     console.log(len)
//     res.json({
//         msg:"ever thing ok"
//     })
// })

// app.post("/check2",function(req,res){
//     const kidney = req.body.kidney;
//     const len = kidney.length;

//     console.log(kidney);
//     console.log(len)
//     res.json({
//         msg:"ever thing ok"
//     })
// })



// zod is using for input validation

const schema = zod.array(zod.number());

app.post("/check1",function(req,res){
   
    const kidney = req.body.kidney;
    const response = schema.safeParse(kidney)// check for validation using zod

    res.json({
        response
    })
})

app.post("/check2",function(req,res){
    const kidney = req.body.kidney;
    const response = schema.safeParse(kidney)
    if(!response.success){
        res.status(411).json({
            msg:"wrong input"
        })
    }
    else{
        res.json({
            response 
        })
    }
    
})

//global catches
app.use(function(err,req,res,next){
    res.json({
        msg:"sorry something is wrong in out side"
    })
})
app.listen(4000)