import { Router } from "express" ;
import userController from "./Controller";

const router = Router();

router.get("/getwali", userController.get);
router.post("/postwali", userController.post);

export default router;

