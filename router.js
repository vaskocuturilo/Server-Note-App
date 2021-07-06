const Router = require('express')
const PostController = require('./PostController.js')

const router = new Router()

router.post("/create", PostController.create)
router.get("/fetch", PostController.getAll)
router.post("/update", PostController.update)
router.post("/remove", PostController.remove)

module.exports = router;
