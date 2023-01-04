const express = require('express');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const userRoutes =require('./routes/user.routes');
const postRoutes =require('./routes/post.routes');
require('dotenv').config({path:'./config/.env'});
require('./config/db');
const {chekUser,requireAuth} =require('./middleware/auth.middleware');
const { get } = require('mongoose');
const cors=require('cors')

const app = express();
const corsOption={
    origin:process.env.CLIEN_URL,
    credentials:true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}
app.use(cors(corsOption))



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

//jwt
app.get('*',chekUser);
app.get('/jwtid',requireAuth,(req,res)=>{
   res.status(200).send(res.locals.user._id) 
});
//routes

app.use('/api/user',userRoutes);
app.use('/api/post',postRoutes)

//server
app.listen(process.env.PORT,()=> {
    console.log(`Listening on port ${process.env.PORT}`);
})