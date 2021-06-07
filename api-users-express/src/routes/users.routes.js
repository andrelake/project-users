const router = require('express-promise-router')()
const usersController = require('../controllers/users.controller')

//routes
router.get('/users', usersController.findAllUsers)
router.get('/users/:id', usersController.findUserById)
router.post('/users', usersController.createUser)
router.delete('/users/:id', usersController.deleteUserById)
router.patch('/users/:id', usersController.updateUserById)

module.exports = router