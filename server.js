// console.log("Server file is running");

// // function callback(){
// //   console.log('Function is completed successfully');
// // }

// const add = function(a,b,prince){
//   var res = a+b;
//   console.log('result : ' + res);
//   prince();
// }

// add(232,3434,()=>{
//   console.log('Function is completed successfully');
// });

// var os = require('os');
// var fs = require('fs');

// var user = os.userInfo();
// console.log(user);

// fs.appendFile('greeting.txt', 'Hi ' + user.username + '!', ()=>{
//   console.log('File is created.');
// });

//---------------------------------------------------------------------------

// console.log("Server.js is running..");

// const notes = require('./notes.js');

// var age = notes.age;

// var addNum = notes.addNum(age+12, 342);  
// console.log(addNum);
// console.log(age);

const express = require('express');
const app = express();
const db = require('./db');
const Person = require('./models/Person');
const MenuItem = require('./models/MenuItem');

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


app.listen(3000, ()=>{
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