import express  from 'express';
import { loginUser, renewToken, signUpUser, followUser, updateUser, getUserProfile } from '../controllers/user.js';
import { validationJWT } from "../middlewares/index.js";

const router = express.Router()

router.get('/profile/:query', getUserProfile )
router.get('/renew', validationJWT, renewToken)
router.post('/signup', signUpUser )
router.post('/login', loginUser )
router.post('/follow/:id', validationJWT, followUser )
router.post('/update/:id', validationJWT, updateUser )

export default router