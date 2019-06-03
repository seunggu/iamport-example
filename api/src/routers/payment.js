const router = require('express').Router();

const { payments } = require('../controllers');

router.post('/validation', payments.validation);
router.post('/cancel', payments.cancel);

module.exports = router;
