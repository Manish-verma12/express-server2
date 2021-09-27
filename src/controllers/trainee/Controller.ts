import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import config from "../../config/configuration";

 class TraineeController {
    get(req: Request, res: Response) {
        console.log('Inside get request for trainee');

        const data = [
            {
                name: 'trainee1',
            }, {
                name: 'trainee2',
            }
        ]

        res.status(200).send({ message: 'successfully fetched trainees', data: data, status: 'success' });
    }

    create(req: Request, res: Response, next: NextFunction) {
        console.log('Inside post request for trainee', req.body);

        const { name, id } = req.body;
         
        if(!name){
            res.status(422).send({ message: 'Trainee created successfully', data: { name, id }, status: 'success' });

        }     
        res.status(200).send({ message: 'Trainee created successfully', data: { name, id }, status: 'success' });

    }

    update(req: Request, res: Response, next: NextFunction) {

        console.log('Inside post request for trainee', req.body);

        const { id } = req.body;

        res.status(200).send({ message: 'Trainee updated successfully', data: { name, id }, status: 'success' });

    }


    delete(req: Request, res: Response, next: NextFunction) {

        console.log('Inside post request for trainee', req.body);

        const { id } = req.body;

        res.status(200).send({ message: 'Trainee Deleted successfully', data: { name, id }, status: 'success' });
}

    createToken(req: Request, res: Response, next: NextFunction){
       console.log("hyy");
       const token = jwt.sign(req.body, config.secret,{expiresIn: "12hr"});
       console.log(token);
        res.status(200).send({ message: 'Token successfully created', data: {token}, status: 'success' });

    }

 }
export default new TraineeController();


