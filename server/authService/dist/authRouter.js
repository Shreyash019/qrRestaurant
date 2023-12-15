"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("./authController");
const router = express_1.default.Router();
router.route('/signup').get(authController_1.qrRestro_User_Sign_Up);
router.route('/signin').get(authController_1.qrRestro_User_Sign_In);
router.route('/signout').get(authController_1.qrRestro_User_Sign_Out);
router.route('/profile').get(authController_1.qrRestro_User_Profile_Information);
exports.default = router;
//# sourceMappingURL=authRouter.js.map