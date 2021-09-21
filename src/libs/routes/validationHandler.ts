//import { checkSchema , validationResult } from 'express-validator/check';

const { checkSchema , validationResult } = require('express-validator/check');

const validationHandler = (validator) => {
    return[
        checkSchema(validator),
        (req, res, next) => {
            // console.log('console from validationHandler', req.body);

            const errors = validationResult(req);

            // console.log('errors', errors);
             console.log('errors.isEmpty', errors.isEmpty());
             console.log('errors.array',   errors.array());

            if (!errors.isEmpty()) {
                next();
            } else{
                next({message: 'Bad Request', status: 422, error: errors.array() });
            }
           
        }
    ]
}

export default validationHandler;
