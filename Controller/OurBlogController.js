const mongoose=require('mongoose')
const {data}=require('../Data/OurBlog')
const {OurBlog}=require('../Model/OurBlogModel')

const storeData=async (req,res)=>{
    try {
        const result=await OurBlog.insertMany(data)
        res.send(result)
    } catch (error) {
        console.log(error)
    }
    
}

const findData=async (req,res)=>{
    try {
        const result=await OurBlog.find(data)
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}

const findById=async (req,res)=>{
    try {
        // const id=req.params._id
        // const result=await OurBlog.findById(data)
    } catch (error) {
        
    }
}


module.exports={storeData,findData}
