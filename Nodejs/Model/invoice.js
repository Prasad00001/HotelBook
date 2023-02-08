const mongoose = require('mongoose');
const invoiceSchema=mongoose.Schema({
    invoice:{
        type:Number,
        require:true
    },
    CheckOutDate:{
        type:Date,
        require:true
    },
    invoiceimg:{
        type:String,
        require:true
    }
})
module.exports=mongoose.model("Invoice",invoiceSchema,"invoice")