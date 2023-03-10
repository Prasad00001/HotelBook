const mongoose = require('mongoose');

const userSchema=mongoose.Schema({
    userName:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    mobileNumber:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    days:{
        type:Number,
        require:true
    },
    pax:{
        type:Number,
        require:true
    },
    rate1:{
        type:Number,
        require:true
    },
    Amount:{
        type:Number,
        require:true
    },
    rate:{
        type:Number,
        require:true
    },
    endDate:{
        type:Date,
        require:true
    },
    StartingDate:{
        type:Date,
        require:true
    },
    check:{
        type:String,
        require:true
    },
    image:{
        frontImage:{
            type:String,
            require:true
        },
        backImage:{
            type:String,
            require:true
        }
    }
    
})

module.exports=mongoose.model("Users",userSchema,"users")