const mongoose=require('mongoose')
const Schema =mongoose.Schema;

const blogSchema=new Schema({
    titre:{
        type:String,
        required:true,
    },
    resume:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    auteur:{
        type:String,
        required:true,
    }
},{timestamps:true});
const Blog=mongoose.model('Blog',blogSchema);
module.exports=Blog;
