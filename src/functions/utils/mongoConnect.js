const mongoose = require('mongoose');

const uri = 'mongodb+srv://erickSuh:UZmala12@venturuschallenge.s52wh.mongodb.net/challenge?retryWrites=true&w=majority';

let conn = null;
let isConnected = false;

exports.connect = async (context) => {
  // eslint-disable-next-line no-param-reassign
  context.callbackWaitsForEmptyEventLoop = false;

  require('module-alias/register');

  if (!isConnected) {
    conn = await mongoose.createConnection(uri, {
      bufferCommands: false,
      bufferMaxEntries: 0,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      socketTimeoutMS: 30000,
      connectTimeoutMS: 4000,
      poolSize: 10,
    });
    isConnected = true;

    require('../models/User');
  }

  return conn;
};

exports.disconnect = async () => {
  mongoose.disconnect();
};

// Be carefull with it
exports.clearDatabase = async () => {
  if (process.env.NODE_ENV === 'test') {
    conn = await this.connect({});
    // DON'T PARAMETRIZE THIS URI
    conn.dropDatabase();
  }
};
