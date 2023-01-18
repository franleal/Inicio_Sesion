const usersController = {}
const User = require( "../models/User");
const passport = require("passport");

usersController.renderUserRegister = (req,res)=>{
    res.render('register')
}

usersController.addUser = async(req,res)=>{
    const {email, password} = req.body
    const emailUser = await User.findOne({email:email})
    if(emailUser){
        console.log('Este email ya esta registrado')
        res.redirect("/api/register")
    }else{
        const newUser = new User ({email, password})
        newUser.password = await newUser.encryptPassword(password);
        res.redirect("/api/login")
        await newUser.save()
       
    }
}


usersController.renderloginUser = (req,res)=>{
    res.render('login')
}

usersController.loginUser = passport.authenticate('local',{
    failureRedirect:'/api/login',
    successRedirect:'/api/productos',

})

usersController.logOut = (req,res)=>{
    
}



module.exports = usersController