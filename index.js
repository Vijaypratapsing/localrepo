const express=require("express");
const app=express();
const fs = require('fs');

const users =require('./users.json');
app.use(express.json())

app.get('/user',(req,res)=>{
    res.send(users);
})

app.get('/user/:id',(req,res)=>{
    let id =req.params.id;
    let user1=users.find((user1)=>user1.id===parseInt(id));
    res.send(user1);
})

app.post('/add/user/',(req,res)=>{
    console.log(req.body)
    req.body.id=31;
    users.push(req.body);
    fs.writeFile('users.json',JSON.stringify(users),(err)=>{
        if(err){
            console.log("error");
            
        }else{
            console.log("hii")
            res.end("add")
        }
    })
    
})

app.put('/edit/user/:id',(req,res)=>{
    let id = req.params.id;
    console.log(id);
    res.end("edit conf");
    let index=users.findIndex((users)=>users.id===parseInt(id))
    users[index].first_name="vijay";
    fs.writeFile('users.json',JSON.stringify(users),(err)=>{
        if(err){
            console.log("error");
            
        }else{
            console.log("hii")
            res.end("add")
        }
    })
})

app.listen(3000,(err)=>{


if(err){
    console.log(err);   
}else{
console.log("server runing on 3000");

}})