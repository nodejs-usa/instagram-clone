const { Router } = require("express")

const router = Router();

const UserController = require("./controllers/UserController");

router.post("/users", UserController.store);

module.exports = router;