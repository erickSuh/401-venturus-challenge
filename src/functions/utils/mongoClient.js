const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://erickSuh:UZmala12@venturuschallenge.s52wh.mongodb.net/venturusChallenge?retryWrites=true&w=majority';
const dbName = 'venturusChallenge';

module.exports = async () => {
  try {
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    const db = client.db(dbName);
    return db;
  } catch (e) {
    console.log(e.message);
    return null;
  }
};
