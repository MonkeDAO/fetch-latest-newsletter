const express = require("express");
const router = express.Router();
const fetchLatestNewsletter = require("../fetcher");
/**
 * GET latest newsletter.
 *
 * @return newsletter description | empty object.
 */
router.get("/", async (req, res) => {
    try {
     const latestNewsletter = await fetchLatestNewsletter()
      res.json(latestNewsletter);
    } catch (error) {
      console.error(error);
      return res.status(500).send("Server error");
    }
  });
  
  module.exports = router;