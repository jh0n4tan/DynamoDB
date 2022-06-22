const { Router } = require('express');
const { getUsers,addorUpdateUser,getUserByID,deletetUser } = require('../controllers/users');

const router = Router();

router.get('/getusers',getUsers );
router.get('/getusersbyid/:id',getUserByID );
router.post('/adduser',addorUpdateUser );
router.delete('/deleteuser',deletetUser );

module.exports = router;