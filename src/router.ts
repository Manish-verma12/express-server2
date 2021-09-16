import {Router} from "express";
import {userRouter} from "./controller";


const router = Router();

router.use("/user",  userRouter);


export default router;