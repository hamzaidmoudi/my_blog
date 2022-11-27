const express = require('express');
const router=express.Router();
const blogControllers=require('../controllers/BlogControllers')

router.get('/',blogControllers.blog_all);


router.get("/create", blogControllers.blog_get_create) ;
router.post("/create",blogControllers.blog_post_create); 

router.get("/editpost/:id",blogControllers.blog_edit_post_get);
router.post("/editpost/:id",blogControllers.blog_edit_post);


router.get("/details/:id",blogControllers.blog_get_details);

router.get("/delete/:id",blogControllers.blog_delete);
 


  
module.exports=router;  