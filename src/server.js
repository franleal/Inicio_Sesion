const express = require("express");
const exphbs = require('express-handlebars');
const passport = require("passport");
const path = require('path')
const session = require("express-session") ;

//inicializacion------------------
const app = express()
require('./config/passport')



//config-----------------
app.set("views", path.join(__dirname , 'views'));
app.engine('.hbs',exphbs.engine({
    defaultLayout:'main',
    layoutsDir:path.join(__dirname , 'views'),
    extname:'.hbs'
}))

app.set("view engine", ".hbs");

//Midlewares---------------------------------------
app.use(express.urlencoded({extended:false}))

app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:true
}))

app.use(passport.initialize())
app.use(passport.session());

//Routes------------------

app.use(require('./routes/index'))
app.use(require('./routes/productos'))
app.use(require('./routes/users'))
app.use(require('./routes/info'))
app.use(require('./routes/randoms'))


//Static Fliles------------------------------------------------
app.use(express.static(path.join(__dirname , 'public')))

module.exports = app