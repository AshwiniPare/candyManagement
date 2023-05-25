const path = require('path');

const express = require('express');

const candyController = require('../controllers/candy');

const router = express.Router();

router.get('/get-candies', candyController.getCandies);

router.post('/add-candy', candyController.postCandy);

router.put('/update-candy/:id', candyController.updateCandy);

module.exports = router;