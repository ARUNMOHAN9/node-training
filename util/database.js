const db = require('mysql2');

const connectionPool = db.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node_train',
    password: 'admin'
});

module.exports = connectionPool.promise();