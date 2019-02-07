const express = require('express');
const path = require('path');

const app = express();

app.set('views','views');
app.set('view engine','ejs');

app.get('/',(req,res,next)=>{
    res.render('index',{});
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(4444);
console.log("Listening");