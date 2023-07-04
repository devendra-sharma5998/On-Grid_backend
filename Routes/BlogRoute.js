const Blogrouter=require('express').Router()
const BlogData=require('../Controller/OurBlogController')

Blogrouter.get('/ourblog',BlogData.storeData)
// Blogrouter.get('/find')



module.exports=Blogrouter