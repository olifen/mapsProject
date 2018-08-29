const router = require('express').Router();
const locationsController = require('../controllers/locationsController');

router.get('/locations', locationsController.index);

router.route('/locations')
  .get(locationsController.index)
  .post(locationsController.create);

router.route('/locations/:id')
  .get(locationsController.show)
  .put(locationsController.update)
  .delete(locationsController.delete);

module.exports = router;
