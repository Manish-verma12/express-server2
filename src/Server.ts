import * as express from 'express';

export default class Server{

app: express.Express;

 constructor(private config){
     this.app = express();
 }

setupRoutes(){
    this.app.get('/health-check', function (req, res) {
        console.log('./health-check api called')
        res.send('I am OK')
})
}

public bootstrap(){
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