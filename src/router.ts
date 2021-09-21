import {Router} from "express";
import {userRouter} from "./controllers";


const router = Router();

router.use("/user",  userRouter);
router.use("/admin",  );


export default router;