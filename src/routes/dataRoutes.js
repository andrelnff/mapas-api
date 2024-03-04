const express = require('express');
const dataController = require('../controllers/dataController');

const router = express.Router();

router.get('/data/:dataset', dataController.getData);
router.post('/data/:dataset', dataController.setData);
router.get('/data', dataController.getAllData);

module.exports = router;