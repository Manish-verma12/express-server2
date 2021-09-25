import {config} from 'dotenv';
    config();
    
  import { IConfig }  from './IConfig';


  const configuration: IConfig = Object.freeze({
   env: process.env.NODE_ENV,
   port : parseInt(process.env.PORT),
   secret: process.env.TOKEN_SECRET,
   mongoURI: process.env.MONGO_URL,
  }) as IConfig;
  export default configuration;
  