import Category from "../models/category"
import Product from "../models/products"


export const listCategory =async (request, response) =>{
    try{
        const category =await Category.find().exec()
        response.json(category)
    }catch(error){
        response.status(400).json({message:"Loi khong the hien thi"})
    }
}
export const listCategoryDetail =async (request, response) =>{

    try{
        const category =await Category.findOne({_id:request.params.id}).exec()
        // const product = await Product.find({category}).exec()
        // const product = await Product.find({category}).populate("category").exec()
        const products = await Product.find({category}).select("-category").exec()

        response.json({ category, products: products })
    }catch(error){
        response.status(400).json({message:"Loi khong the hien thi"})
    }
}
export const createCategory = async(request, response) =>{


    try{
        const category =await Category(request.body).save()
        response.json(category)
    }catch(error){
        response.status(400).json({message:"Khong the them danh muc"})
    }
}
export const deleteCategory =async (request, response) =>{

    try{
        const category =await Category.findOneAndDelete({_id:request.params.id}).exec()
        response.json(category)
    }catch(error){
        response.status(400).json({message:"Khong xoa duoc"})
    }
}
export const updateCategory =async (request, response) =>{
    try{
        const category =await Category.findOneAndUpdate({_id:request.params.id}, request.body).exec()
        response.json(category)
    }catch(error){
        response.status(400).json({message:"Khong cap nhat duoc"})
    }
}