# Week 8 and 9 lab exercises

Creating a Backend API 
## User stories

Written from the perspective of a front end web and app developer:

> As an API consumer
  assuming I can access the CMS API docs
  I want to be able to read the API docs and understand how to access the API

> As an API consumer
  assuming I can access the CMS API
  I want to be able to make a GET request with an articleID and get back all the article info

> As an API consumer
  assuming I can access the CMS API
  I want to be able to create an Article using a POST request
  If I don't supply all the information I should get an error
  If I supply all the right info and the article is correct I should get a success message and status

> As an API developer
  assuming my API is working to full spec
  I want the content data to persist between sessions

## Our blog webpage

Webpage sits in the `/webpage` directory.

to run locally:
```bash
(cd webpage && python -m http.server)
```

## Mock api content server

Mock API sits in the `/mockserver` directory:

to run
```bash

# install dependencies
(cd mockeserver && npm install )

# to run
(cd mockeserver && npm start)
```