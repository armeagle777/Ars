const router = require('express').Router()
const restaurantsController =  require('../constrollers/restaurantsController')

router.get('/',restaurantsController.getAllRestaurants)
router.get('/:id', restaurantsController.getRestaurantById)
router.post('/',restaurantsController.createRestaurant)





module.exports = router