const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const bcrypt=require('bcrypt')

const user=new Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

user.pre('save', async function(next){
    const salt=await bcrypt.genSalt();
    this.password= await bcrypt.hash(this.password,salt);
    next();
})

const User=mongoose.model('User',user);
module.exports=User;