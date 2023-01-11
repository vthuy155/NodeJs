import User from '../models/user';
import jwt from 'jsonwebtoken'
export const register = async (req, res) => {
    const { email ,phone, password} = req.body;
    try {
        const existUser = await User.findOne({email}).exec();
        if(existUser){
            res.status(400).json({
                message: "Tài khoản đã tồn tại"
            })
        }
        const user = await new User({email, phone, password}).save();
        res.json({
            user: {
                _id: user._id,
                email: user.email,
                phone: user.phone
            }
        });
    } catch (error) {
        res.status(400).json({
            message: "Đăng ký thất bại"
        })
    }
}
export const login = async (req,res)=>{
    const {email,password} = req.body
    const user = await User.findOne({email}).exec()
    if(!user){
        return res.status(400).json({
            message:"User khong ton tai"
        })
    }
    if(!user.authenticate(password)){
        return res.status(400).json({
            message:"Mat khau khong dung"
        })
    }
    const token = jwt.sign({_id:user._id}, "123456", {expiresIn:3600});
    res.json({
        token,
        user:{
            _id:user._id,
            email:user.email,
            phone:user.phone,
            role: user.role
        }
    })
}