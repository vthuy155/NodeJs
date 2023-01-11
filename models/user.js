import mongoose, { Schema} from "mongoose";
import { createHmac} from 'crypto';
import { v4 as uuidv4 } from 'uuid';
const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 0
    }
}, { timestamps: true});
userSchema.methods = {
    authenticate(password){
        try {
            return this.password == this.encrytPassword(password)
        } catch (error) {
            console.log(error);
        }
    },
    encrytPassword(password){
        if(!password) return
        try {
            return createHmac('sha256','123456').update(password).digest('hex')
        } catch (error) {
            console.log(error);
        }
    }
}
userSchema.pre("save",function(next){
    try {
        this.password = this.encrytPassword(this.password)
        next()
    } catch (error) {
        console.log(error);
    }
})

// userSchema.pre("save", function(next){
//     this.salt = uuidv4()
//     this.password = this.encryptPassword(this.password)
//     next();
// });
// userSchema.methods = {
//     authenticate(password){
//         return this.password === this.encryptPassword(password)
//     },
//     encryptPassword(password){
//         if(!password) return
//         try {
//             return createHmac("sha256", this.salt).update(password).digest("hex");
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }
export default mongoose.model('User', userSchema);