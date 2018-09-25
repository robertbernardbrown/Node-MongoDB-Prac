const router = require("express").Router();
const {getUser, updateUser, addUser, deleteUser} = require("../../controllers/controller");

router.route("/user")
    .get(getUser)
    .put(updateUser)
    .post(addUser)
    .delete(deleteUser);

module.exports = router;