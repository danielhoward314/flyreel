const express = require('express');
const router = express.Router();
const axios = require('axios');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const todosPromise = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
    return res.json(todosPromise.data);
  } catch (err) {
    console.log(err);
  }
});
