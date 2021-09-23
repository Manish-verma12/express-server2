import {Router} from "express";
import {userRouter} from "./controllers";
import { traineeRouter } from "./controllers"


const router = Router();

router.use("/user",  userRouter);
router.use("/admin", userRouter );
router.use("/trainee", traineeRouter );


export default router;