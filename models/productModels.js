const mongoose = require("mongoose");

const productModel =  mongoose.Schema(
  {
    productName: {
      type: String,
      
    },
    productPrice: {
      type: Number,
    
    },
    productQuantity: {
      type: Number,
    
    },
    productDescription: {
      type: String,
     
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const product = mongoose.model("product", productModel);
module.exports = product;