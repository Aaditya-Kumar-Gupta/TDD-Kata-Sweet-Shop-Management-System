const router = require("express").Router();
const controller = require("../controllers/sweetController");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

router.get("/", controller.getSweets);
router.get("/search", controller.search);

router.post("/", auth, role("admin"), controller.createSweet);
router.put("/:id", auth, role("admin"), controller.updateSweet);
router.delete("/:id", auth, role("admin"), controller.deleteSweet);

router.post("/:id/purchase", auth, controller.purchase);
router.post("/:id/restock", auth, role("admin"), controller.restock);

module.exports = router;
