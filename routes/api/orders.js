const router = require("express").Router();
const ordersController = require("../../controllers/ordersController");

// Matches with "/api/orders"
router.route("/")
  .get(ordersController.findAll)
  .post(ordersController.create);

// Matches with "/api/orders/:id"
router
  .route("/:id")
  .get(ordersController.findById)
  .put(ordersController.update)
  .delete(ordersController.remove);

// Matches with "/api/orders/total/:userid/"
router.route("/usertotal/:userid").get(ordersController.getOrderTotal);

module.exports = router;