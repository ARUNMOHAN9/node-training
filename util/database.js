const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const uri = "mongodb+srv://AM:admin@cluster0-x1oki.mongodb.net/test?retryWrites=true&w=majority";
let _db;

const mongoConnect = (cb) => {
  MongoClient.connect(uri)
    .then((client) => {
      console.log('connected');
      _db = client.db();
      cb();
    })
    .catch(err => console.log(err))
}

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
