const express = require('express'); 
//requirements
const bodyparser = require('body-parser')
const path = require('path')
const app=express();
const mongoose=require('mongoose')
const BlogRoutes=require('./routes/Blogroutes')
const AuthRoutes=require('./routes/Authroutes')
//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set('view engine','pug')
app.set('views',path.join(__dirname,"views"));
//load assets
app.use('/css',express.static(path.resolve(__dirname,"public/css")))
//connecting to database
var dburl = "mongodb+srv://user:hamza123@cluster0.apnhb.mongodb.net/Myblog";

mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));
//
app.use('/blogs',BlogRoutes);  
app.use(AuthRoutes);
app.use(function(req,res){
  res.redirect('/blogs')
  res.end();
}) 