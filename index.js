const express=require('express')
const PORT=process.env ||8001
const ConnectDB=require('./Database/Db')
const bodyParser=require('body-parser')
const app=express()
const router=require('./Routes/Router')
const blogrouter=require('./Routes/BlogRoute')
const cors=require('cors')
const path=require('path')


app.use(bodyParser.json())
app.use(express.json())
app.use(express.static(path.join(__dirname,'./Frontend/on-grid/build')))
app.use(cors({origin :"*"}))
app.use(router)
app.use(blogrouter)

//static files
// app.use(express.static(path.join(__dirname, '........../F')))


app.get("/",(req,res)=>{
    res.send('Hello World')
})
app.listen(PORT,()=>{
    console.log("Its working")
    ConnectDB()
})