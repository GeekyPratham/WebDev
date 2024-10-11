// const express = require("express");
// const app = express();

// function sum(n){
//     let ans = 0;
//     for(let i=0;i<=n;i++){
//         ans+=i;
//     }
//     return ans;
// }
// app.get("/",function(req,res){
//     const n = req.query.n;// getting n from the url
//     const ans = sum(n)
//     res.send("Hi Pratham Raj! " + ans);
// })
// app.listen(5000);


const express = require("express");
const app = express();
const fs = require("fs")

const path = require("path")

// fs.readFile("a.txt","utf-8",(err,data)=>{
//     console.log(data);
// })

app.get("../file",(req,res)=>{
    const directoryPath = path.join(__dirname, 'file');

    // Use fs to read all files in the 'file' folder
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).json({ msg: "Unable to scan directory" });
        }

        // Log the file names to the console
        console.log(files);

        // Send the file names in the response
        res.json({
            msg: "Task completed",
            files: files
        });
    });
})

// app.get("/files/:fileName",(req,res)=>{
//      const name = req.params.fileName;
//      console.log(name);
//     //  console.log("start reading file")
//      fs.readFile(name,"utf-8",(err,data)=>{
//         //  console.log("task initated")
//          console.log(data);
         
//      })
//      res.json({
//         msg:"task completed"
//     })
// })
app.listen(5000)