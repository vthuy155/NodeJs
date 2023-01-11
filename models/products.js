import mongoose, {ObjectId} from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    originalPrice:{
        type: Number,
        required: true
    },
    saleOffPrice:{
        type: Number
    },
    image:{
        type: String
    },
    feature:{
        type: String
    },
    shortDesc:{
        type: String
    },
    description:{
        type: String
    },
    // category:{
    //     type: ObjectId,
    //     ref: 'Category'
    // },
    status: {
        type: Number,
        default: 0
    }
}, {timestamps: true})
export default mongoose.model("Product", productSchema)