const express = require("express");
const router = express.Router();

router
  .route("/about")
  .get('about');
module.exports = router;