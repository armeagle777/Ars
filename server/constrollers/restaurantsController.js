const Restaurant = require("../models/Restaurant");


const getAllRestaurants= async (req,res)=>{    
    const allRestaurants = await Restaurant.find()
    res.send({data:allRestaurants})

}

const getRestaurantById= async (req,res)=>{
    try {
        const restaurantId = req.params.id
        const restaurant = await Restaurant.findById(restaurantId)
        res.send(restaurant)
    } catch (err) {
        return res.json({message: 'Restaurant not found'})
    }
}

const createRestaurant = async (req,res)=>{
    try {
        const {name, description,} = req.body
        const restaurant = await new Restaurant({
            name,
            description
        })
        const addedRestaurant = await restaurant.save()
        res.send(addedRestaurant)
    } catch (err) {
        return res.json({message: 'Check sent data and try again'})
    }
}


module.exports ={
    getAllRestaurants,
    getRestaurantById,
    createRestaurant
}