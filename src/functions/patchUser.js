const connect = require('./utils/mongoClient');

exports.handler = async (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: '',
  };

  try {
    const db = await connect();
    const user = db.collection('user');
    const docs = await user.insertOne({}).toArray();
    response.body = JSON.stringify(docs);
  } catch (e) {
    response.statusCode = 500;
    response.body = e.message;
  }
  callback(null, response);
};
