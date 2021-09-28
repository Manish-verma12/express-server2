import {config} from 'dotenv';
import { IConfig }  from './IConfig';
config();
const version = require('../../package.json').version;
export const SWAGGER_URL = '/api-docs';

export const ABOUT ={
   description: 'Manish with Swagger',
   in: 'Header',
   name: 'Authorization',
   title: ' Manish project',
};

  const configuration: IConfig = Object.freeze({
    mongo_url: process.env.MONGO_URL,
   env: process.env.NODE_ENV,
   port : parseInt(process.env.PORT),
   swaggerDefination: {
     basePath:'/api',
     info: {
       ...ABOUT,
       version,
     },
   },
   SwaggerUrl:SWAGGER_URL,
  });
  export default configuration;
  






  // const configuration: IConfig = Object.freeze({
  //   env: process.env.NODE_ENV,
  //   port : parseInt(process.env.PORT),
  //   password: process.env.PASSWORD,
  //   secret: process.env.TOKEN_SECRET,
  //   mongoURI: process.env.MONGO_URL,
  //  }) as IConfig;
  //  export default configuration;
   