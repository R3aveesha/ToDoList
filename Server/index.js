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
app.post('/add',(req,res)=>{

    const task=req.body.task;
    todoModel.create({
        task:task
    }).then(result=>res.json(result))
    .catch(err=>res.json(err))

})
mongoose.connect('mongodb://127.0.0:27017/test01')
.then(()=>{
    console.log('app connect to the database')
})
.catch((err)=>{
    console.log(err)
})

