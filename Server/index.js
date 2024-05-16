const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const todoModel =require('./Models/todo')

const app=express()
app.use(cors())
app.use(express.json())


app.listen(3001,()=>{
    console.log('server is running')
})
app.post('/add',(req,res)=>{ //add tasks

    const task=req.body.task;
    todoModel.create({
        task:task
    }).then(result=>res.json(result))
    .catch(err=>res.json(err))

})
app.get('/get',(req,res)=>{ //get tasks
    todoModel.find()
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})
mongoose.connect('mongodb://localhost:27017')//connect to the database
.then(()=>{
    console.log('app connect to the database')
})
.catch((err)=>{
    console.log(err)
})

