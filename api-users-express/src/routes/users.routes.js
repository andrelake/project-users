const router = require('express-promise-router')()
const usersController = require('../controllers/users.controller')

//routes
router.get('/users', usersController.findAllUsers)
router.post('/users', usersController.createUser)
router.delete('/users/:id', usersController.deleteUserById)

module.exports = router