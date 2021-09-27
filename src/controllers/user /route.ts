import { Router } from "express" ;
import user from "./Controller";

const userRouter: Router = Router();

//const router = Router();

userRouter.get("/get", user.get)
userRouter.post("/get", user.create)
userRouter.put("/get", user.update);
userRouter.delete("/:id", user.delete);





// router.post("/post", userController.create);
// router.put("/post", userController.update);
// router.delete("/post", userController.delete);


export default userRouter;
//export default router;
