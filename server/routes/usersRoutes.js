const router = require('express').Router();
const {

} = require('../controllers/usersControllers');


router.post('/registration');
router.post('/login');
router.get('/users');



module.exports = router; 
