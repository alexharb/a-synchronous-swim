const headers = require('./cors');
const queueMethods = require('./messageQueue.js');

module.exports = (req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, headers);
    console.log('a get request!', queueMethods.messages);
    var sending = queueMethods.messages.slice(0);
    console.log(sending);
    var length = queueMethods.messages.length;
    for (var i = 0; i < length; i++) {
      queueMethods.dequeue();
    }
    res.end(JSON.stringify(sending));
  } else {
    console.log("it's an error!")
  }
};
