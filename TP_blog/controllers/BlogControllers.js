const Blog=require('../models/blog')
const User=require('../models/user')
const url=require('url')
const authMiddleware=require('../middlewar/authMiddleware');


const blog_all=(req,res)=>{
    Blog.find()
    .then(result=>{
      res.render("index",{posts:result});
    })
    .catch(err =>{
      console.log(err);
    })
  }

const blog_get_create= (req, res) => {
    res.render("addpost")
};

const blog_get_details=(req,res)=>{
    var id = url.parse(req.url).pathname.replace("/details/","")
    Blog.findById(id)
    .then(result => {
      res.render('details',{posts:result})
    })
    .catch(err => {
      console.log(err);
    });
};

const blog_delete=(req,res)=>{
    var id = url.parse(req.url).pathname.replace("/delete/","")
    Blog.findByIdAndDelete(id)
      .then(result => {
        res.redirect('/all-blogs');
      })
      .catch(err => {
        console.log(err);
      });
  
  };

const blog_post_create= (req, res) => {
    const blog = new Blog({
      titre: req.body.titre,
      auteur: req.body.auteur,
      body: req.body.body,
      resume:req.body.resume,
    })
    blog.save()
    .then(result=>{
      res.redirect('/all-blogs')
    })
    .catch((err)=>{
      console.log(err);
    })
  };  


const blog_edit_post_get=(req,res)=>{
  var id = url.parse(req.url).pathname.replace("/editpost/","")
    Blog.findById(id)
    .then(result => {
      res.render('editpost',{posts:result})
    })
    .catch(err => {
      console.log(err);
    });
}


const blog_edit_post= (req, res) => {
  var id = url.parse(req.url).pathname.replace("/editpost/","")
  const data=req.data;
  Blog.findByIdAndUpdate(id,{
    titre: req.body.titre,
    auteur: req.body.auteur,
    body: req.body.body,
    resume:req.body.resume,
  },{new:true})
  .then(result=>{
    res.redirect('/all-blogs')
  })
  .catch((err)=>{
    console.log(err);
  })
};  



module.exports={
    blog_all,
    blog_get_create,
    blog_post_create,
    blog_get_details,
    blog_delete,
    blog_edit_post_get,
    blog_edit_post,
}  
