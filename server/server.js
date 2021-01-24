import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import animeRouter from './routes/anime.js';
import jwtMiddleWare from './middlewares/auth.js';
const __dirname = new URL(import.meta.url).pathname;
const app = express();
dotenv.config();

const port = process.env.SERVER_PORT || 5000;
const dataBaseURI = process.env.DB_URI 
mongoose.connect(dataBaseURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
  console.log('database has been connected');
  app.listen(port,()=>{
    console.log('server started at '+port);
  });
}).catch(err=> {
  console.log(err);
});
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const exceptPaths = (pathArr, middleware) => {
  return (req, res, next) => {
    if (pathArr.includes(req.path)) {
      return next();
    }
    return middleware(req, res, next);
  }
}
const excludedArr =['/api/user/token','/api/user/create', '/api/anime/myAnimelist'];
app.use(exceptPaths(excludedArr,jwtMiddleWare));
app.use('/', indexRouter);
app.use('/api/user', usersRouter);
app.use('/api/anime', animeRouter);

if (process.env.NODE_ENV === 'production'){
  app.use(express.static(path.resolve(__dirname, '../../', 'build')));
  app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../../', 'build', 'index.html'));
  });
}

export default app;
