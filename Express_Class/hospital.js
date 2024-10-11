const express = require("express");
const app = express();

// const bodyParser = require("body-parser");
// app.use(bodyParser.json());

app.use(express.json());

// crate array of object
const user = [{
    name:"John",
    kidneys: [{
        healthy:false
    }]
}]

app.get("/",function(req,res){
    const JohnKidney = user[0].kidneys;
    const noOfKidneys = JohnKidney.length;

    let noOfHealthyKidneys = 0;
    for(let i=0;i<noOfKidneys;i++){
        if(JohnKidney[i].healthy){
            noOfHealthyKidneys += 1;
        }
    }
    
    const noOfUnhealthyKidney = noOfKidneys - noOfHealthyKidneys;

    res.json({
        noOfKidneys,
        noOfHealthyKidneys,
        noOfUnhealthyKidney
    })
})

app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        healthy : isHealthy
    })

    res.json({
        message :"Done!"
    })
})

// make unhealthy kidney to healthy
app.put("/",function(req,res){
    for(let i=0;i<user[0].kidneys.length;i++){
        if(!user[0].kidneys[i].healthy) user[0].kidneys[i].healthy=true;
    }
    res.json({
        message:"successfully put the kidneys"
    })
})

// remove the unhealthy kidney
app.delete("/",(req,res)=>{
    let del = user[0].kidneys;
    const len = del.length;

    if(isthereUnHealthyKidney(del)){
        let newKidney = [];
        for(let i=0;i<len;i++){
            if(del[i].healthy){
                newKidney.push({
                    healthy:true
                })
            }
        }
        user[0].kidneys = newKidney;
    }
    else{
        res.status(411).json({
            message:"no unhealthy kidney present"
        })
    }

// method 1;
    // let newKidney = [];
    // for(let i=0;i<len;i++){
    //     if(del[i].healthy){
    //         newKidney.push({
    //             healthy:true
    //         })
    //     }
    // }
    // user[0].kidneys = newKidney;

    // method 2

    // for(let i=0;i<len;i++){
    //     if(!del[i].healthy)del.splice(i,1);
    // }


    res.json({
        message:"all unhealthy kidney deleted"
    })
})

function isthereUnHealthyKidney(del){
    let unhealthyKidneyPresent = false;
    for(let i=0;i<del.length;i++){
        if(!del[i].healthy){
            unhealthyKidneyPresent = true;
            break;
        }
    }
    return unhealthyKidneyPresent;
}
app.listen(5000);