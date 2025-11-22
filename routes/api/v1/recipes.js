const router = require('express').Router()
const recipes = require('../../../data/recipes.json')

router.get('/', (request, response) => {
    const allRecipes = recipes.map(({ id, title, image, prepTime, difficulty }) => {
        return { id, title, image, prepTime, difficulty }
    })
    response.send(allRecipes)
})

router.post('/recipe/add', (request, response) => {
    const { id, title, image, ingredients, instructions, prepTime, difficulty } = request.body
    
    recipes.push({ id: recipes.length + 1, title, image, ingredients, instructions, prepTime, difficulty })
    response.send({ id: recipes.length, title, image, ingredients, instructions, prepTime, difficulty })
})

router.get('/recipe/:id', (request, response) => {
    const { id } = request.params

    const found = recipes.find(r => r.id.toString() === id)
    response.send(found)
})

module.exports = router