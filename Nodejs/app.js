const express=require('express')
const server = express();
const cors= require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const mongodb= require('mongodb');
const userRoute=require('./Routes/userRoutes')
const newUserRoute=require('./Routes/user')
const invoiceRoute=require('./Routes/invoie')


mongoose.connect('mongodb://127.0.0.1:27017/demo')
.then(() => console.log('Connected mongod'));

server.use(cors());
server.use(bodyParser.json());
server.use('/demo',userRoute)
server.use('/demo/update',newUserRoute)
server.use('/invoice',invoiceRoute)


server.listen(9090, ()=>{
    console.log('Server Start 9090')
})