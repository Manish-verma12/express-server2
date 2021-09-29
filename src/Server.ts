import * as bodyParser from "body-parser";
import notFoundRoute from './libs/routes/notFoundRoute';
import * as express from 'express';
import Database from "./libs/Database";
import * as morgan from 'morgan';
import errorHandler from "./libs/routes/errorHandler";
import Swagger from './libs/Swagger';
import routes from "./router";

export default class Server {

  private app: express.Express;

  constructor(private config: IConfig) {
    this.app = express();
  }

  private initBodyParser() {

    console.log("in init body parser");
    this.app.use(bodyParser.urlencoded({ extended: false }))
    this.app.use(bodyParser.json())
  }

  setupRoutes() {
    console.log('setUpRoutes INIT');
    const { app } = this;
    app.use(morgan('combined'))

    app.get('/', function (req, res) {
      res.send('hello, world!')
    });
    app.use('/health-check', (req, res) => {
      console.log("in health api");
      res.send('I am ok');
    });

    app.use("/api", (req, res, next) => {
      console.log('..../api...route');
      return next();
    },
      routes);

    app.use(notFoundRoute);
    app.use(errorHandler);
  }

  public bootstrap() {
    this.initBodyParser();

    this.setupRoutes();
    return this.app;
  }

  public async run() {
    const { port, env, mongoURI } = this.config;
    try {
      await Database.open(mongoURI)
      
        this.app.listen(port, () => {
          const message = `||  app is running at port' '${port}'  in '${env}'  mode ||`;
          console.log(message);
        });
      } catch (error) {
        console.log("inside catch", error);
      }

      return this;
    }

  private initSwagger(){
    const { SwaggerDefinition, SwaggerUrl} = this.config;

    const swaggerSetup = new Swagger();

    this.app.use(`${swaggerUrl}.json`, swaggerSetup.getRouter){
      swaggerDefination,
    }));

    const{ serve, setup} = swaggerSetup.getUI(swaggerUrl);
    
    this.app.use(swaggerUrl, serve, setup);
  }
    
}