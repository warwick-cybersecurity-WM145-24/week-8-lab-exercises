const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (request, response) => {
  response.json({ title: "our cool content api", status: "all ok" });
});

/**
 * Get an article based on a random ID
 */
router.get('/article/:id', (request, response) => {
  const articleId = parseInt(request.params?.id);
  response.json({ status: "your article", articleId });
});

/**
 * Create a new article
 */
router.post('/article', (request, response) => {
  response.statusCode = 201;
  response.json({ status: "Thanks for the new article" });
});

module.exports = router;
