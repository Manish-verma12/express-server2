// Main Router
import { Router } from "express" ;
import trainee from './Controller';
import validationHandler from '../../libs/routes/validationHandler';
import validation from './validation';
import authMiddleware from '../../libs/routes/authMiddleWare';
import { TRAINEES } from '../../libs/constants';

const traineeRouter: Router = Router();

traineeRouter.get('/', authMiddleware(TRAINEES,'read'), validationHandler(validation.get), trainee.get)
traineeRouter.post('/', authMiddleware(TRAINEES,'write'), validationHandler(validation.create), trainee.create)
traineeRouter.put('/', authMiddleware(TRAINEES,'write'), validationHandler(validation.update), trainee.update)
traineeRouter.delete('/', authMiddleware(TRAINEES,'delete'), validationHandler(validation.delete), trainee.delete)
traineeRouter.post('/createToken', trainee.createToken);

export default traineeRouter;

//export default new TraineeController();



