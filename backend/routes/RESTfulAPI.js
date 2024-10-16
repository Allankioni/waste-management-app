const express = require("express");
const router = express.Router();
const getAllWaste = require("../controllers/crud funcs/getAllWaste");
const getWaste = require("../controllers/crud funcs/getWaste");
const createWaste = require("../controllers/crud funcs/createWaste");
const upload = require("../controllers/upload");

router.get("/all", getAllWaste);
router.get("/", getWaste);
router.post("/", upload.single("image"), createWaste);

module.exports = router;
