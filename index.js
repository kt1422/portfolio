const express = require('express');
const app = express();
const router = require('./routes/router');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));
app.use('/css', express.static(__dirname+'public/css'));
app.use('/js', express.static(__dirname+'public/js'));
app.use('/img', express.static(__dirname+'public/img'));

//routes
app.get('/', (req, res)=>{
    res.redirect('home');
});
app.use('/', router);
// app.use((req, res, next)=>{
//     res.redirect('badpage');
// });

//check port connection
const port = 8080 || 8081;
app.listen(port, ()=>{
    console.log(`server is now running in port:${port}`);
});