const express = require('express');
const router=express.Router();
const AuthControllers=require('../controllers/AuthControllers')

router.get('/sign-up',AuthControllers.sign_up_get)
router.post('/sign-up',AuthControllers.sign_up_post)
router.get('/login',AuthControllers.login_get)
router.post('/login',AuthControllers.login_post);

module.exports=router;