const express = require('express');
const router = express.Router();
const axios = require('axios');
module.exports = router;


router.get('/', async (req, res, next) => {
    try {
      const peoplePromise = await axios.get(`https://swapi.co/api/people/`);
      return res.json(peoplePromise.data);
    } catch (err) {
      console.log(err);
    }
});
