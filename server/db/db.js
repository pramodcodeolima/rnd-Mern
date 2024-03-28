require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;

const url = process.env.DBCONNECTION;
const dbName = process.env.DB;

async function connectToDatabase() {
  try {
    const client = await MongoClient.connect(url);
    console.log("DB connected");
    const db = client.db(dbName);
    return db;
  } 
  catch (err) {
    console.error("Error..", err);
    throw err;
  }
}

module.exports = connectToDatabase;
