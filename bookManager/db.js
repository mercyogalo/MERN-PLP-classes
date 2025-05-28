const { MongoClient } = require('mongodb');

const uri='mongodb://localhost:27017';
const client= new MongoClient(uri);


async function connectDb(){
    await client.connect();
    return client.db('bookstore').collection('books');
}


module.exports= connectDb