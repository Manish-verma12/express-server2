import * as bodyParser from "body-parser";
import  notFoundRoute  from './libs/routes/notFoundRoute';
import * as express from 'express';
import errorHandler from "./libs/routes/errorHandler";


export default class Server{

app: express.Express;

 constructor(private config){
     this.app = express();
 }

middleware1(req, res ,next){
   console.log('middleware1');
   next();
}
middleware2(req, res ,next){
  console.log('middleware2');
  next();
}

setupRoutes(){
  this.app.get('/health-check', this.middleware1 ,this.middleware2, function (req, res ,next) {
      console.log('./health-check api called');
    //  res.status(200).send('I am OK')
    res.status(200).json({status:200,message: "i am ok running health api", error: "not found",  timestamp: new Date()});
    
  })

  this.app.post('/data', function (req, res ,next) {
    console.log('post request', req.body);
    res.status(200).send('I am OK')
    res.error()
  })

this.app.use(notFoundRoute);
this.app.use(errorHandler);

}
initBodyParser(){
  this.app.use(bodyParser.urlencoded({ extended: false }))
  this.app.use(bodyParser.json())
}

    bootstrap(){
    this.initBodyParser;
    this.setupRoutes();
    return this.app;
}
 
 run(){
  this.app.listen(9000, ()=>{
    console.log('app started successfully'); 
  })
    return this;
 }

}