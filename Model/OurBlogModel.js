const mongoose=require('mongoose')


const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        // required:true,
    },
    description:{
        type:String,
        // required:true,
    },
    image:{
        // required:true,
        
    }
})

const OurBlog=mongoose.model('OurBlog',blogSchema)

module.exports={OurBlog}

