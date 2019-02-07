const express = require('express');
const router = express.Router();

const coffee_controller = require('../controllers/coffee.controller');

router.get('/searchAll', coffee_controller.getAllVarieties);

router.post('/filtered', coffee_controller.getFilteredVarieties);

module.exports = router;