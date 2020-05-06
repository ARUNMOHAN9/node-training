const fs = require('fs');
const path = require('path');

const dirName = require('../utils/path');

class Product {
    static products = [];

    constructor(title) {
        this.title = title;
    }

    save() {
        let products = [];
        const p = path.join(dirName, 'data', 'products.json');
        fs.readFile(p, (err, fileContent) => {
            if (!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFileSync(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll() {
        let products = [];
        const p = path.join(dirName, 'data', 'products.json');
        return new Promise((resolve, reject) => {
            fs.readFile(p, (err, fileContent) => {
                if (!err) {
                    products = JSON.parse(fileContent);
                    console.log(products);
                    resolve(products);
                } else {
                    reject(err);
                }
            });
        });
    }
}

module.exports = Product;