const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;



const mongoConnect = (cb) => {
  MongoClient.connect(uri)
    .then((client) => {
      console.log('connected');
      cb(client);
    })
    .catch(err => console.log(err))
}

module.exports = mongoConnect;
