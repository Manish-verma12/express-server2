import { Router } from "express" ;
import authMiddleWare from "src/libs/routes/authMiddleWare";
import validationHandler from "src/libs/routes/validationHandler";
import validation from "../trainee/validation";
import user from "./Controller";

const userRouter: Router = Router();

//const router = Router();

userRouter.get("/get",authMiddleWare('trainee', 'read'), validationHandler(validation.get) user.get)
userRouter.post("/login",validationHandler(validation), user.createToken)
userRouter.put("/",authMiddleWare('trainee', 'write'), validationHandler(validation.delete) user.update);
userRouter.delete("/:id", authMiddleWare('trainee', 'delete'), validationHandler(validation.delete), user.delete);




// userRouter.get("/get", user.get)
// userRouter.post("/get", user.create)
// userRouter.put("/get", user.update);
// userRouter.delete("/:id", user.delete);





// router.post("/post", userController.create);
// router.put("/post", userController.update);
// router.delete("/post", userController.delete);


export default userRouter;
//export default router;
