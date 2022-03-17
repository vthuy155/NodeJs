const products = [
    {id: 1, name: "ProductA"},
    {id: 2, name: "ProductB"},
    {id: 3, name: "ProductC"},

]
export const listProduct = (req, res) => {
    res.json(products);
}
export const productDetail = (req, res) => {
    const product = products.find(item => item.id === +req.params.id)
    res.json(product);
}
export const creatProduct = (req, res) => {
    products.push(req.body)
    res.json(products);
}
export const deleteProduct = (req, res) => {
    const product = products.filter(item => item.id != +req.params.id)
    res.json(product);
}
export const updateProduct  = (req, res) => {
    
    res.json(products.map(item => item.id === +req.params.id ? req.body : item));
}