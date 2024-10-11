const express = require("express")
const app = express()

// dump way of doing input validation and authentication
/*
    there is one person only John first get called check if the user is valid then it undergoes health-checkup and give the details

    then after put called for replace the defactive kidneys in the kidney0-replace path 
*/


// assume my website has only one user

/**
 reason:-> because we are doing each time validation inside the request which makes the code long so go for better approach till now no middleware is used;
 */

 
const user = [{
    name:"John",
    kidneys: [{
        healthy:false
    }]
}]

        // method -> 1

/**

app.get("/health-checkup",(req,res)=>{
    const userName = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;
    // console.log(userName)
    // console.log(password)
    // console.log(kidneyId)
    if(userName != "s" || password != "pass"){
        res.status(400).json({
            msg:"invalid user or password"
        })
        return;
    }

    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({
            msg:"wrong kidney details"
        })
        return;
    }
    let unHealthyKidneyCount = 0;
    const kidneys = user[0].kidneys;
    console.log(kidneys);
    const len = kidneys.length;
    for(let i=0 ;i<len;i++){
        if(!kidneys[i].healthy)unHealthyKidneyCount+=1;
    }
    console.log(unHealthyKidneyCount)

    res.json({
        msg:"your kidney is fine"
    })
})

app.put("/replace-kidney",(req,res)=>{
    const userName = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if(userName != "s" || password != "pass"){
        res.status(400).json({
            msg:"invalid user or password"
        })
        return;
    }

    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({
            msg:"wrong kidney details"
        })
        return;
    }

    const kidneys = user[0].kidneys;
    console.log(kidneys);
    const len = kidneys.length;
    for(let i=0 ;i<len;i++){
        if(!kidneys[i].healthy) kidneys[i].healthy = true;
    }

    res.json({
        msg:"your kidney get replaced"
    })
})

 */

            // method -> 2

/**
 reason:-> because we are doing each time validation outside the request still its leanthy as you the validUser and validKidneyDetails function return only true or false based on the input but the request do every thing

 in the both the method ther is checking for both validUser as well as validKidneyDetails if one is wrong it goes for next also for check
 int this.

 */

/*
function validUser(userName,password){
    if(userName != "s" || password != "pass") return false;
    return true;
}

function validKidneyDetails(kidneyId){
    if(kidneyId != 1 && kidneyId != 2) return false;
    return true;
}

app.get("/health-checkup",(req,res)=>{
    const userName = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;
    // console.log(userName)
    // console.log(password)
    // console.log(kidneyId)
    if(!validUser(userName,password)){
        res.status(400).json({
            msg:"invalid user or password"
        })
        return;
    }

    if(!validKidneyDetails(kidneyId)){
        res.status(400).json({
            msg:"wrong kidney details"
        })
        return;
    }
    let unHealthyKidneyCount = 0;
    const kidneys = user[0].kidneys;
    console.log(kidneys);
    const len = kidneys.length;
    for(let i=0 ;i<len;i++){
        if(!kidneys[i].healthy)unHealthyKidneyCount+=1;
    }
    console.log(unHealthyKidneyCount)

    res.json({
        msg:"your kidney is fine"
    })
})


app.put("/replace-kidney",(req,res)=>{
    const userName = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if(!validUser(userName,password)){
        res.status(400).json({
            msg:"invalid user or password"
        })
        return;
    }

    if(!validKidneyDetails(kidneyId)){
        res.status(400).json({
            msg:"wrong kidney details"
        })
        return;
    }

    const kidneys = user[0].kidneys;
    console.log(kidneys);
    const len = kidneys.length;
    for(let i=0 ;i<len;i++){
        if(!kidneys[i].healthy) kidneys[i].healthy = true;
    }

    res.json({
        msg:"your kidney get replaced"
    })
})
*/


        // method -> 3 (using middlewares)

function userMiddleware(req,res,next){
    const userName = req.headers.username;
    const password = req.headers.password;
    if(userName != "s" || password != "pass"){
        res.status(400).json({
            msg:"invalid user or password"
        })
        return;
    }
    else{
        next();
    }

}

function kidneyMiddleware(req,res,next){
    const kidneyId = req.query.kidneyId;

    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({
            msg:"wrong kidney details"
        })
        return;
    }
    else{
        next();
    }
}


app.get("/health-checkup",userMiddleware,kidneyMiddleware,(req,res)=>{
    // do some computation
    let unHealthyKidneyCount = 0;
    const kidneys = user[0].kidneys;
    console.log(kidneys);
    const len = kidneys.length;
    for(let i=0 ;i<len;i++){
        if(!kidneys[i].healthy)unHealthyKidneyCount+=1;
    }
    console.log(unHealthyKidneyCount)

    res.json({
        msg:"your kidney is fine"
    })
})


app.put("/replace-kidney",userMiddleware,kidneyMiddleware,(req,res)=>{
    // do some computation
    const kidneys = user[0].kidneys;
    console.log(kidneys);
    const len = kidneys.length;
    for(let i=0 ;i<len;i++){
        if(!kidneys[i].healthy) kidneys[i].healthy = true;
    }

    res.json({
        msg:"your kidney get replaced"
    })
})

// the method 3 code is very less no of line as compare to above so middleware is necessary


app.listen(5005);