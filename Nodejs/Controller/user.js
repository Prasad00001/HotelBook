const User=require('../Model/user')


exports.getAllUser=async(req,res)=>{
User.find()
   
.then(
    result=>{
        res.status(200).json({
            message:"User fetched successfully ",
            data:result
        })
    }
)
.catch(error=>{
    res.status(500).json({
        message:"error in database",error:error
    })
})
}
exports.getUserByName=async(req, res)=>{
   console.log(req.params._id)
   const docs= await User.find({_id:req.params._id});
   console.log(docs)
  
   
   res.status(200).json({

       message:"User Data Found",
       data: docs
   })
}
exports.adduser=async(req,res)=>{
   let user=new User();
   user.userName=req.body.userName;
   user.address=req.body.address;
   user.mobileNumber=req.body.mobileNumber;
   user.email=req.body.email;
   user.StartingDate=req.body.StartingDate;
   user.endDate=req.body.endDate;
   let date1= new Date(req.body.StartingDate);
   let date2= new Date(req.body.endDate);
   var Difference_In_Time = date2.getTime() - date1.getTime();
   var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
   user.days=Difference_In_Days;
   user.rate=req.body.rate;
   user.pax=req.body.pax;
   user.Amount=req.body.rate*Difference_In_Days*req.body.pax;
   user.remainingAmount=user.Amount-req.body.rate1;
   user.rate1=req.body.rate1;
   user.check="CheckIn";
   user.image.frontImage=req.body.frontImage;
   user.image.backImage=req.body.backImage;
   const doc = await user.save()
   res.json(doc);
   console.log(req.body)

}
exports.updateUser=async(req,res)=>{
   console.log(req.body._id)
   const docs= await User.find({});
   

       User.findOneAndUpdate({_id:req.body._id}, {$set:{check:"CheckOut"}},(err,doc)=>{
        if(err) throw(err);
        else res.json(doc);
       })

   
  
  
}

exports.updateUsers=async(req,res)=>{
   console.log(req.body._id)
   
    const docs= User.findOneAndUpdate({_id:req.body._id}, {$set:{userName:req.body.userName,address:req.body.address,mobileNumber:req.body.mobileNumber,email:req.body.email}},(err,doc)=>{
        if(err) throw(err);
        else res.json(doc);})
     
     


  
}