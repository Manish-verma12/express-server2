import * as bodyParser from "body-parser";
import  notFoundRoute  from './libs/routes/notFoundRoute';
import * as express from 'express';
import errorHandler from "./libs/routes/errorHandler";
import routes from "./router";


 export default class Server{

 private app: express.Express;

 constructor(private config){
     this.app = express();
 }

 private initBodyParser(){
  this.app.use(bodyParser.urlencoded({ extended: false }))
  this.app.use(bodyParser.json())
}

setupRoutes(){
    const {app} = this;
    
    app.use('/health-check',(req, res) => {
      res.send('I am ok');
    });
    app.use("/api", routes);
    app.use(notFoundRoute);
    app.use(errorHandler);
}


  public bootstrap(){
    this.initBodyParser;
    this.setupRoutes();
    return this.app;
}
 
 public run(){
  const {port, env } = this.config;
  this.app.listen(port, () =>  {
  //  const message ='||  app is running at port' '${port}'  in '${env}'  mode ||;
    console.log(message);
  });
    return this;
 }

}