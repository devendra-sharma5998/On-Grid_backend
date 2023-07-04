const mongoose=require('mongoose')

const UserDataSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    organisationName:{
        type:String,
        required:true
    },
    PhoneNo:{
        type:Number,
    },
    ongrid:{
        type:String
    }

})

const DataModel=mongoose.model('Data',UserDataSchema)
module.exports=DataModel