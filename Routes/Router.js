const Router=require('express')
const router=Router()
const UserController=require('../Controller/UserController')
const Data=require('../Controller/UserData')

router.post('/register',UserController.register)
router.post('/login',UserController.Login)


router.post('/registerdData',Data.bookData)




module.exports=router