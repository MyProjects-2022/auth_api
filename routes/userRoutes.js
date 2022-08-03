import express from 'express';
const router =express.Router();
import  UserController from '../controllers/userController.js';
import checkUserAuth from '../midddlewares/auth-middlewayer.js';

//Route Level Middleware - To Protect Route

router.use('/changepassword',checkUserAuth)
router.use('/loggeduser',checkUserAuth)

// //Public Routes

router.post('/register',UserController.userRegistration);
router.post('/login',UserController.userLogin)

// router.post('/sendmail',UserController.userSendMail)

router.post('/send-reset-password-email',UserController.sendUserPasswordResetEmail)
router.post('/reset-password',UserController.userPasswordReset)

// //Protected Routes

router.post('/changepassword',UserController.changeUserPassword)

router.get('/loggeduser',UserController.loggedUser)


export default router