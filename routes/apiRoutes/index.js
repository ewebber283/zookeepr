const router= require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');
const zookeeperRoutes = require('../apiRoutes/zookeeperRoutes');

//add middleware so app knows about routes
router.use(animalRoutes);
router.use(zookeeperRoutes);
module.exports = router;