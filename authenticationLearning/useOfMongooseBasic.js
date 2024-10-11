const express = require("express")
const app = express();
app.use(express.json());

const mongoose = require("mongoose");

// Connect to MongoDB without deprecated options
mongoose.connect("mongodb+srv://GeekyPratham:RG1hdLUwX1dBrTb7@cluster0.wfhhz.mongodb.net/userappnew");
// Define the user schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

// Create a model
const User = mongoose.model('User', userSchema);

// Create a new user
// const user = new User({
//     name: "Pratham",
//     email: "abc@gmai.com",
//     password: "12345"

// });

// Save the user to the database
// user.save();


     //   |
    //   \/

// so we can do this also 
 app.post("/signup", async function(req,res){
    const username = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    
    // checking and validation if user exist already or not

    const existingUser = await User.findOne({email:email});
    if(existingUser){
        res.status(400).send(
            "user is already present"
        )
    }

    // we cand do CRUD-> ie create ,update , delete,read in database


    // create
    const user = new User({
        name : username,
        email:email,
        password:password
    })

    user.save();

    res.json({
        msg:"User created successfully"
    })
})


app.listen(3000)