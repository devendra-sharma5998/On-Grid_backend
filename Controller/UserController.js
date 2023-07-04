// const User=require('../Model/UserModel')
const express=require('express')
const User=require('../Model/UserModel')

const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

let arr=[]
// let secretkey='sharma'

const register=async(req,res)=>{
   try {
       const detail=req.body.state
    //    console.log(detail)
    
       const name=detail.Name;
       const email=detail.EMail
       const companyName=detail.CompanyName
       const phoneNo=detail.PhoneNo
       const password=detail.Password
    //    const age=detail.Age;
       
       console.log(email)
       const Exist=await User.findOne({email:email })
       console.log(Exist,"exist")
       if(Exist){
        console.log("first")
         res.send('user already exist')
       }else{
               console.log("else")
          const hashpassword=await bcrypt.hash(password,10)
      
          const obj={
              name:name,
               email:email,
               companyName:companyName,
               phoneNo:phoneNo,
            //    age:age,
               password:hashpassword
      
          }
          const result=await User.insertMany(obj)
          console.log("result")
          arr.push(obj)
          res.send(result)
          res.send("Registration succesfull")
       }
   
   } catch (error) {
        console.log(error.message)
   }
}


const Login = async (req,res)=> {
   try {
    //    console.log(req.body)
       const detail=req.body.detail
    
       const userExist=await User.findOne({email:detail.Email})
       if(userExist){
       console.log("heloo")
       bcrypt.compare(detail.Password,userExist.password,(err,data)=>{
        if(data){
            jwt.sign({userExist},"secretkey",(err,token)=>{
                if(token){
                    console.log("login success")
                    res.json({token,userExist})
                }else{
                    res.send(err)
                }
            })}else{console.log(err)}
       })
    }
       else{
        res.send('dont exist')
       }
     
   } catch (error) {
       console.log(error)
   }
}


module.exports={register,Login}