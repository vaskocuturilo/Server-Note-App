import Router from 'express'
import PostController from "./PostController.js";

const router = new Router()

router.post("/create", PostController.create)
router.get("/fetch", PostController.getAll)
router.post("/update", PostController.update)
router.post("/remove", PostController.remove)

export default router;
