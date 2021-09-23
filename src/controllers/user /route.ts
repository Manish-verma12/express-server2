import { Router } from "express" ;
import userController from "./Controller";

const router = Router();

router.get("/get", userController.get);
router.post("/post", userController.post);

export default router;
