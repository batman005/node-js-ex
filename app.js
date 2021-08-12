const express= require('express');
const path = require('path');
const app= express();
const port= 80;

app.use('/static',express.static('static'))
app.use(express.urlencoded())

app.set('view engine','pug');
app.set('views' , path.join(__dirname, 'views'));

app.get('/',(req,res) =>{
const dances = {}
res.status(200).render('index.pug',dances);
})


app.listen(port, ()=>{
console.log(`The application is sucessfully started at port ${port}`);
})