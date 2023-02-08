const Invoice=require('../Model/invoice')
exports.addInvoice=async(req,res)=>{
    let invoice=new Invoice();
    invoice.invoice=req.body.invoice;
    invoice.CheckOutDate=req.body.CheckOutDate;
    invoice.invoiceimg=req.body.invoiceimg;
    const docs = await invoice.save()
    res.json(docs);
}