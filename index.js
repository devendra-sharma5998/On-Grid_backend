const express=require('express')
const ConnectDB=require('./Database/Db')
const bodyParser=require('body-parser')
const app=express()
const router=require('./Routes/Router')
const blogrouter=require('./Routes/BlogRoute')
const cors=require('cors')

app.use(bodyParser.json())
app.use(express.json())

app.use(cors({origin :"*"}))
app.use(router)
app.use(blogrouter)

app.get("/",(req,res)=>{
    res.send('Hello World')
})
app.listen(8001,()=>{
    console.log("Its working")
    ConnectDB()
})