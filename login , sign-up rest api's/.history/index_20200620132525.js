const express=require('express');
const mongooses= require('mongoose');

var app=express();



const PORT=process.env.PORT||3000;
app.length(PORT,()=>{
    console.log(`app is live at ${PORT}`)
})