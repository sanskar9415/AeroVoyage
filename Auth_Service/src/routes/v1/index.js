const express = require('express');
const UserController = require('../../controllers/user-controller');
const { validateUserAuthMiddleware } = require('../../middlewares')

const router = express.Router();

router.post('/signup' , validateUserAuthMiddleware.validateUserAuth, UserController.create);
router.post('/signIn' , validateUserAuthMiddleware.validateUserAuth , UserController.signIn);
router.get('/isAuthenticated', UserController.isAuthenticated);
router.get('/isAdmin' , validateUserAuthMiddleware.validateIsAdminRequest , UserController.isAdmin);

module.exports = router;