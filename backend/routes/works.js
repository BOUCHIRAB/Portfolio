const express = require("express")
const router = express.Router()

const auth = require("../middleware/auth")
const multer = require("../middleware/multer-config")
const compressedImage = require("../middleware/sharp-config")

const worksCtrl = require("../controllers/works")

router.get("/", worksCtrl.getAllWorks)
router.post("/", auth, multer, compressedImage, worksCtrl.createWork)
router.get("/:id", worksCtrl.getOneWork)
router.put("/:id", auth, multer, compressedImage, worksCtrl.modifyWork)
router.delete("/:id", auth, worksCtrl.deleteWork)

module.exports = router
