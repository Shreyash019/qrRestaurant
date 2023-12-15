import { user_Account_Validation } from './utils/validations';
import ServiceConsumer from './models/serviceConsumer';

export const qrRestro_User_Sign_Up = async (req, res) =>{
    
    // 01) Fetching request body data
    const {username, email, countryCode, contactNumber, password} = req.body;

    // 02) If not data sending error message
    if(!username || !email || !countryCode || !contactNumber || password){
        return res.status(400).json({
            success: false,
            message: 'Please provide add details!'
        })
    }

    // 03) If all data, then checking if user exist
    const isUserNameExist  = user_Account_Validation.Username_Existance_Check(req.body.username.toLowerCase());
    if(isUserNameExist) {
        return res.status(400).json({
            success: false,
            message: 'User already exist with provided username!'
        })
    }

    const isEmailExist  = user_Account_Validation.Email_Existance_Check(req.body.email);
    if(isEmailExist) {
        return res.status(400).json({
            success: false,
            message: 'User already exist with provided email address!'
        })
    }

    const isContactNumberExist  = user_Account_Validation.Contact_Number_Existance_Check(req.body.countryCode, req.body.contactNumber);
    if(isContactNumberExist) {
        return res.status(400).json({
            success: false,
            message: 'User already exist with provided contact number!'
        })
    }

    // 04) If all good, then creating user account
    const user = await ServiceConsumer.create({
        username: req.body.username.toLowerCase(),
        email: req.body.email,
        countryCode: req.body.countryCode,
        contactNumber: req.body.contactNumber
    }).catch((err)=>{
        return res.status(400).json({
            success: false,
            message: 'Something went wrong!'
        })
    })


    // 05) Sending response after account creation
    res.status(200).json({
        success: true,
        messgae: `User account created successfully!`
    })
}

export const qrRestro_User_Sign_In = (req, res) =>{
    res.status(200).send('Sign In');
}

export const qrRestro_User_Sign_Out = (req, res) =>{
    res.status(200).send('Sign Out');
}

export const qrRestro_User_Profile_Information = (req, res) =>{
    res.status(200).send('Profile');
}