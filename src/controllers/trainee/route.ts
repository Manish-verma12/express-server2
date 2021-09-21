// Main Router
import { Router } from "express" ;
import trainee from './Controller';
import validationHandler from '../../libs/routes/validationHandler';
import validation from './validation';

const traineeRouter: Router = Router();

traineeRouter.get('/', validationHandler(validation.get), trainee.get)
traineeRouter.post('/', validationHandler(validation.create), trainee.create)
traineeRouter.put('/', validationHandler(validation.update), trainee.update)
traineeRouter.delete('/', validationHandler(validation.delete), trainee.delete)

export default traineeRouter;

