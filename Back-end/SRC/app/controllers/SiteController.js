const Product = require('../models/ProductModel');
const Cart=require('../models/cartModel');
const {mutipleMongooseToObject}=require('../../ultil/mongoose');
class SiteController {
  //[get]/news
  index(req, res,next) {
   Product.find({})
   .then(products =>
    {
        res.status(200).json({ products: products[0].shoes});
    })
   .catch(error => next(error));
    // res.render('home');
  }

  getProduct(req, res, next) {
    const shoeId = req.params.id;
  
    // Truy vấn sản phẩm có chứa shoe có id là shoeId trong mảng shoes
    Product.find({})
      .then(product => {
       
            // Nếu tìm thấy sản phẩm, trả về thông tin của shoe
        var shoe  = product[0].shoes.find(shoe => shoe.id == shoeId);
        console.log(shoe);
        res.status(200).json({ shoe: shoe });
      })
      .catch(error => next(error));
  }
  createProduct(req,res,next)
  {
    var cart= new Cart(
    {
      id:req.body.id,
      number:req.body.number,
    });
cart.save()
.then(savedSuggestion => {
  res.status(200).json({ id:savedSuggestion.id });
})
.catch(error => {
  console.error('Error saving suggestion:', error);
});
   
  }

  updateProduct(req, res, next) {
    const productId = req.params.id;
    const newNumber = req.body.number;
    Cart.updateOne({ 'id': productId }, { $set: { 'number': newNumber } })
      .then(result => {
        res.status(200).json({ message: 'Product updated successfully' });
      })
      .catch(error => next(error));
  }
  getAllProduct(req, res, next) {
    Cart.find({})
      .then(cartItems => {
        const cartItemIds = cartItems.map(cartItem => cartItem.id);
        Product.find({ 'shoes.id': { $in: cartItemIds } })
        .then(products => {
          try
          {
            const filteredShoes =[];
            var index=0;
            for (var i=0;i<products[0].shoes.length;i++)
            {
           
              if (products[0].shoes[i].id===cartItems[index].id)
              {
                
                filteredShoes.push(products[0].shoes[i]);
                i=-1;
                index++;
              }

              if (index===cartItemIds.length)
              break;
            }
       
            res.status(200).json({ shoeCart: filteredShoes ,cartItems:cartItems});
          }
        catch(err)
        {
          res.status(200).json({ shoeCart:[],cartItems:[] });
        }
        })
        .catch(error => {
          console.error('Error:', error);
        });
      
      })
      .catch(error => next(error));
  } 
  
  deleteProduct(req, res, next) {
    const productId = req.params.id;
    
    Cart.deleteOne({ 'id': productId })
      .then(result => {
        res.status(200).json({ message: 'Product deleted successfully' });
      })
      .catch(error => next(error));
  }
  
}
module.exports = new SiteController();
