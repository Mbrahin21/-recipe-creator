// get the recipe generator
const generateRecipe = require('../services/generate_recipe');
const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next){
    res.render('enter_ingredients')
})

// get ingredients and make a recipe
router.post('/generate_recipe', function(req, res, next) {

    const userIngredients = req.body.ingredients;

    generateRecipe(userIngredients)
        .then(recipeJSON => {
            res.render('recipe_result', {
                userIngredients,
                recipeJSON
            });
        })
        .catch(error => next(error));

});

module.exports = router