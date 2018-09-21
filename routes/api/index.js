const router = require("express").Router();
const controller = require("../../controllers/controller");

router.route("/user")
    .get(controller.getUser)
    .put(controller.updateUser)
    .post(controller.addUser)
    .delete(controller.deleteUser);

module.exports = router;