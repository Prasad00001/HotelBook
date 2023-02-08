const express=require('express')
const invoiceController=require('../Controller/invoice')

const router=express.Router()
router.get('',(req, res)=>{
    res.json("Invoice Create")
})
router.post('',invoiceController.addInvoice)
module.exports=router;