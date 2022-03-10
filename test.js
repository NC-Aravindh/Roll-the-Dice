const express=require('express');

const app=express();

app.use(express.static('public'));



app.get("/",(req,res)=>res.sendFile(__dirname+"/public/test.html"));

app.listen(3000,()=> console.log("Server started at port 3000"));
