const cnn = require('./utils/mongoConnect');

exports.handler = async (event, context, callback) => {
  const conn = await cnn.connect(context);
  const User = conn.model('User');
  const users = await User.find({});

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(users),
  });
};
