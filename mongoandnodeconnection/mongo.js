const express = require('express');
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(url);

// Database Name
const dbName = 'mydata';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');

    //create database
    const db = client.db(dbName);
    console.log('Database created');

    //create collection
    const collection = db.collection('staff');
    console.log('Collection created');

    // await collection.insertOne({
    //     name: "ATHARV",
    //     Dept: "IT"
    // });
    // console.log("Inserted document =");



    var ind = await collection.createIndex({
        name: 1
    });

    var out = await collection.find({}).toArray();
    console.log("Output =", out);

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());