import {config} from 'dotenv';
    config();
    
  const configuration: IConfig = Object.freeze({
   env: process.env.NODE_ENV,
   port : parseInt(process.env.PORT),
  });
  export default configuration;
  