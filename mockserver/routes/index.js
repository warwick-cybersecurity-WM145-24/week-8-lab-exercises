const express = require('express');
const router = express.Router();
const { faker } = require('@faker-js/faker');

/* GET home page. */
router.get('/', (request, response) => {
  response.json({ title: "our cool content api", status: "all ok" });
});

/**
 * Get an article based on a random ID
 */
router.get('/article/:id', (request, response) => {
  const articleId = parseInt(request.params?.id);
  let output = {
    articleId,
    title: faker.animal.cat(),
    subHeading: faker.animal.cat(),
    content: faker.lorem.paragraph(150),
    headerImage: faker.image.cats(),
    datePublished: faker.date.recent()
  };

  response.json(output);
});

/**
 * Create a new article
 */
router.post('/article', (request, response) => {
  var a = request.body;
  var article = new Article(a.articleId, a.title, a.subHeading, a.content, a.headerImage, a.datePublished);

  if (!article.valid){
    var b = "";
    if (article.articleId == null) b += "id, "
    if (article.title == null) b += "title, "
    if (article.subHeading == null) b += "sub, "
    if (article.content == null) b += "cont, "
    if (article.headerImage == null) b += "img, "
    if (article.datePublished == null) b += "date"

    response.json({status: "Invalid request body: " + b});
    return;
  }

  var sqlite3 = require('sqlite3').verbose();
  let db = new sqlite3.Database('./sample.db');
  // db.all('CREATE TABLE IF NOT EXISTS article (articleID INTEGER PRIMARY KEY, title TEXT, subHeading TEXT, content TEXT, headerImage TEXT, datePublished TEXT)')
  db.run('INSERT INTO article (title, subHeading, content, headerImage, datePublished) VALUES (' + article.export_SQL + ')');
  // db.run('INSERT INTO article (title) VALUES (' + article.title + ')');
  db.close();

  response.statusCode = 201;
  response.json({ status: "Thanks for the new article" });
});

module.exports = router;


class Article {
  constructor(id, title, subHeading, content, headerImage, datePublished) {
      this.id = id;
      this.title = title;
      this.subHeading = subHeading;
      this.content = content;
      this.headerImage = headerImage;
      this.datePublished = datePublished;
  }

  get valid(){
    return this.id != "" && this.title != "" && this.subHeading != "" && this.content != "" && this.headerImage != "" && this.datePublished != "" &&
      this.id != null && this.title != null && this.subHeading != null && this.content != null && this.headerImage != null && this.datePublished != null;
  }

  get export_SQL(){
      return '"', this.title + '", "' + this.subHeading + '", "' + this.content + '", "' + this.headerImage + '", "' + this.datePublished + '"';
  }
} 