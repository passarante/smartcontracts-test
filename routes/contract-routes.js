const { Router } = require("express");
const { getData } = require("../controllers/contractController");

const router = Router();
router.get("/", getData);

module.exports = router;
