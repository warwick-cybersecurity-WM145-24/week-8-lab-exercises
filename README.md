# Week 8 and 9 lab exercises

Creating a Backend API in order for it to be pwned

As part of week 8 and 9.  You will be creating your own backend API to serve content to a semi-finished front-end.

There is a mock API that returns mock responses that you can look to for inspiration.

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

# to start the server on port 3000
(cd mockeserver && npm start)

# to run the HURL tests
cd tests
cat createNewArticle.hurl | hurl
cat getAnArticle.hurl | hurl
```

---

## Example API docs

# GET Collection

Gets all the live albums in the system

`GET album/`

## Parameters

none

## Examples

```bash
curl https://apis.sikhnet.com/v4/gmc/album/
```

**returns**

```json
[
  {
    "id": 64940,
    "name": "2015-16",
    "artistIds": [
      64788,
      51293
    ],
    "trackIds": [
      95034,
      10350,
      357,
      78289,
      65117,
      45950
    ],
    "description": "Ad odio voluptate dolores dolorum reprehenderit. Laudantium distinctio ut. Sint corrupti debitis voluptates sit. Sunt dolores vero molestias occaecati repudiandae aut.",
    "images": [
      "https://www.sikhnet.com/files/audio/image/main/40149_441798284225_49643819225_5542794_4596096_n.jpg",
      "http://placeimg.com/640/480"
    ],
    "year": 2020,
    "tags": [
      "atque",
      "vel",
      "ratione"
    ],
  },
  {
    "id": 94286,
    "name": "2018 Los Angeles Samagam",
    "artistIds": [
      93377,
      12251
    ],
    "trackIds": [
      27411,
      4337,
      128,
      37052,
      30813,
      23,
      82836
    ],
    "description": "Consequuntur dolores consequatur eligendi voluptas sit. Autem autem blanditiis et sint tenetur. Rerum omnis dolores nihil dolorum dolor tempore autem harum. Occaecati vel non qui ab aliquid. Unde aliquam eaque ad nisi a corrupti sed provident.",
    "images": [
      "https://www.sikhnet.com/files/default_images/album.jpg",
      "http://placeimg.com/640/480"
    ],
    "year": 2018,
    "tags": [
      "magnam",
      "repellat",
      "quae"
    ],
  }
  ...
]
```
