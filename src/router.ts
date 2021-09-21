import {Router} from "express";
import {userRouter} from "./controllers";


const router = Router();

router.use("/user",  userRouter);
router.use("/admin", userRouter );


export default router;