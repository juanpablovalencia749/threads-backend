import express  from 'express';
import { loginUser, logoutUser, signUpUser, followUser, updateUser, getUserProfile } from '../controllers/user.js';
import { protectRoute } from '../middlewares/protectRoute.js';

const router = express.Router()

router.get('/profile/:query', getUserProfile )
router.post('/signup', signUpUser )
router.post('/login', loginUser )
router.post('/logout', logoutUser )
router.post('/follow/:id', protectRoute, followUser )
router.post('/update/:id', protectRoute, updateUser )

export default router