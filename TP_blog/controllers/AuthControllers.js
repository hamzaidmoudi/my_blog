const User=require('../models/user')

const sign_up_get=(req,res)=>{
    res.render('sign_up')
}

const sign_up_post=(req,res)=>{
    const user=new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
    user.save()
    .then(result=>{
        res.redirect('/')
    })
    .catch(err=>{
        console.log(err);
    })
}

const login_get=(req,res)=>{
    res.render('login')
}
const  login_post=(req,res)=>{
    res.send('logged')
}

module.exports={
    sign_up_get,
    sign_up_post,
    login_get,
    login_post
}




