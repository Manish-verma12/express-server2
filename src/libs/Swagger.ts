import { Router } from 'express';
import { getuid } from 'process';
import swaggerJSDoc = require('swagger-jsdoc');
import * as swagger from 'swagger-ui-express';

export interface ISwaggerDefination {
    swaggerDefination: {
        basePath: string;
        info: {
            description: string;
            title: string;
        },
    };
}


export default class Swagger {

    public getRouter({ swaggerDefination }: ISwaggerDefination) {
        const router = Router();

        router.route('/')
            .get((req, res) => {

                //options for the swagger docs
                const options = {
                    // path to the API docs    
                    apis: ['dist/**/*.js'],
                    // import swaggerDefinations
                    swaggerDefination,
                };
                // initialize swagger-jsdocs
                const swaggerSpec = swaggerJSDoc(options);
                console.log('swaggerSpec', swaggerSpec);
                res.send(swaggerSpec);
            });
    });
    return router;
}

public getUI(swaggerUrl: string){
    const options = {
        swaggerUrl: `${swaggerUrl}.json`,
    };

    return {
        serve: swaggerUi.serve,
        setup: swaggerUi.setup(undefined, options),
    };
}



