const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    title:{type:String,required:true},
    author:{type:String,required:true},
    available:{type:Boolean,default:true},
},{timestamps:true});

module.exports=mongoose.model('Book',schema);