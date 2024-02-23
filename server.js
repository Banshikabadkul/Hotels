
const express = require('express');
const app = express();
const db = require('./db');
require("dotenv").config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/',function(req,res){
  res.send("Hello World!! Welcome to oberoi hotel!!")
})

//import routes for person
const personRoutes = require('./routes/personRoutes');
//import routes from menuItem
const menuItemRoutes = require('./routes/menuItemRoutes');


app.use('/person',personRoutes);
app.use("/menu", menuItemRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
  console.log('Listening on port 3000');
})

// ##Create a new repository on the command line

// git init
// git add README.md
// git commit -m "first commit"


// git remote remove origin
// remote -v   
// git branch -M main  
// git remote add origin https://github.com/Banshikabadkul/Hotels.git
// git push -u origin main