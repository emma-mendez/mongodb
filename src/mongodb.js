// CRUD Creat, Replace, Update,Delete

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:12345';
const databaseName = 'task-manager';



MongoClient.connect(connectionURL, { useNewURLParser: true }, (error, client) => {
    if (erroe) {
        return console.log("error");
    }
    console.log("Happy Days")
} );

const db = client.db = client.db(databaseName);
db