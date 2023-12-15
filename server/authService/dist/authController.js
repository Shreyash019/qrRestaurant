"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qrRestro_User_Profile_Information = exports.qrRestro_User_Sign_Out = exports.qrRestro_User_Sign_In = exports.qrRestro_User_Sign_Up = void 0;
const qrRestro_User_Sign_Up = (req, res) => {
    res.status(200).send('Sign Up');
};
exports.qrRestro_User_Sign_Up = qrRestro_User_Sign_Up;
const qrRestro_User_Sign_In = (req, res) => {
    res.status(200).send('Sign In');
};
exports.qrRestro_User_Sign_In = qrRestro_User_Sign_In;
const qrRestro_User_Sign_Out = (req, res) => {
    res.status(200).send('Sign Out');
};
exports.qrRestro_User_Sign_Out = qrRestro_User_Sign_Out;
const qrRestro_User_Profile_Information = (req, res) => {
    res.status(200).send('Profile');
};
exports.qrRestro_User_Profile_Information = qrRestro_User_Profile_Information;
//# sourceMappingURL=authController.js.map