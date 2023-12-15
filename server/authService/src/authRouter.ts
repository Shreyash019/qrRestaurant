import express from 'express';
import {
    qrRestro_User_Sign_Up,
    qrRestro_User_Sign_In,
    qrRestro_User_Sign_Out,
    qrRestro_User_Profile_Information
  } from './authController';

const router = express.Router();

router.route('/signup').get(qrRestro_User_Sign_Up);
router.route('/signin').get(qrRestro_User_Sign_In);
router.route('/signout').get(qrRestro_User_Sign_Out);
router.route('/profile').get(qrRestro_User_Profile_Information);

export default router;