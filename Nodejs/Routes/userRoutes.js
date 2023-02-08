const express=require('express')
const userController=require('../Controller/User')

const router=express.Router()

router.get("/",userController.getAllUser)
router.get('/:_id',userController.getUserByName)
router.post("/",userController.adduser)
router.put("/",userController.updateUser)


module.exports=router;

