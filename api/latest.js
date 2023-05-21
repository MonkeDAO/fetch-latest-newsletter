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

// const app = require('express')();
// const fetchLatestNewsletter = require("../fetcher");

// app.get('/api', (req, res) => {
//   try {
//       return fetchLatestNewsletter().then(res => {
//           return res.status(200).json(res);
//       })
//     } catch (error) {
//       console.error(error);
//       return res.status(500).send("Server error");
//     }
// });

// app.get('/api/item/:slug', (req, res) => {
//   const { slug } = req.params;
//   res.end(`Item: ${slug}`);
// });

// module.exports = app;