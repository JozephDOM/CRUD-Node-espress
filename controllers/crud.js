const productModel = require("../models/productModels");
//Create - Read - Update - Delete

//Create
exports.createProduct = async (req, res) => {
  const body = req.body;
    const response = await productModel.create(body);
    res.send(response);
}

//Read
exports.readProduct = async (req, res) => {
    const response = await productModel.find({});
    res.send(response);
}

//Read by id
exports.readProductById = async (req, res) => {
    const id = req.params.id;
    const response = await productModel.findById({_id: id});
    res.send(response);
}

//Update
exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const response = await productModel.findByIdAndUpdate({_id: id}, body);
    res.send("Product updated");
}

//Delete
exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  const response = await productModel.findByIdAndDelete({_id: id});
    res.send("Product deleted");
}