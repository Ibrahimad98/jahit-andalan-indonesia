const Controller = require("../controllers/controller");
const router = require("express").Router();
const authenticate = require("../middleware/authentication");
const errors = require("../middleware/error");

router.post("/register", Controller.register);

router.post("/login", Controller.login);

router.use(authenticate);

router.get("/users", Controller.viewUser);

router.get("/orders", Controller.findAllOrder);

router.post("/orders", Controller.createOrder);

router.use(errors);

module.exports = router;
