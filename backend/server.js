const express=require('express');
const mongoose=require('mongoose');
const bordyparser=require('body-parser');
const cors=require('cors');
const path=require('path');
const configure=require('./config');
const routes=require('./routers');
const App=express();

App.use(cors());
App.use(bordyparser.json());
App.use(express.static(path.join(__dirname,"front")));

//connect db
mongoose.connect(configure.DB_URI,{useUnifiedTopology:true})
.then(()=>{console.log("DB connected!")})
.catch(err=>{console.log(err)});

//routes
App.use('/api/books',routes);

App.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'front','index.html'));
})
App.listen(3301)