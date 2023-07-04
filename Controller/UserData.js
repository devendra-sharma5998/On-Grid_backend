const express=require('express')
const DataModel=require('../Model/UserDataModel')
const array=[]

const bookData=async(req,res)=>{

try {
    const data=req.body.state
    console.log(req.body)
    const name=data.name
    const email=data.email
    const age=data.age
    const organisationName=data.organisationName
    const phoneNo=data.phoneNo
    const onGrid=data.onGrid
    
    const obj={
        name:name,
        email:email,
        age:age,
        organisationName:organisationName,
        phoneNo:phoneNo,
        onGrid:onGrid
    }
        const result=await DataModel.insertMany(obj)
        // console.log(result)
    array.push(obj)
    res.send(result)
} catch (error) {
    console.log(error)
}


}


module.exports={bookData}