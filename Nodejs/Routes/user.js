const express=require('express')
const userController=require('../Controller/User')

const router=express.Router()

router.put("/",userController.updateUsers)

module.exports=router;