const router = require('express').Router();
const {
    createUser,
    login
} = require('../controllers/usersControllers');


router.get('/signin', login);
router.get('/signin', createUser);



module.exports = router; 
