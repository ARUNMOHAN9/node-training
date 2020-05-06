const productList = [];

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {tab: 'addProduct'});
}

exports.postAddProduct = (req, res, next) => {
    productList.push({title: req.body.title});
    res.redirect('/');
}

exports.displayProducts = (req, res, next) => {
    console.log(productList);
    res.render('shop.pug',  { productList: productList, tab: 'shop' });
}