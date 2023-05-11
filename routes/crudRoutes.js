const express = require ('express');
const {
    createProduct,
    readProduct,
    readProductById,
    updateProduct,
    deleteProduct
} = require('../controllers/crud');
const router = express.Router();
router.use(express.json())
//create Product
router.post('/create', createProduct);
//read Product
router.get('/read', readProduct);
//read Product by id
router.get('/read/:id', readProductById);
//update Product
router.put('/update/:id', updateProduct);
//delete Product
router.delete('/delete/:id', deleteProduct);

module.exports = router;