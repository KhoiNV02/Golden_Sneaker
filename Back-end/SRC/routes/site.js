var express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');
router.delete('/api/v1/products/:id',siteController.deleteProduct);
router.get('/api/v1/products', siteController.getAllProduct);
router.put('/api/v1/products/:id',siteController.updateProduct);
router.post('/api/v1/products',siteController.createProduct);
router.get('/api/v1/products/:id',siteController.getProduct);
router.get('/', siteController.index);

module.exports = router;
