let { MongoClient } = require('mongodb');

let url = `mongodb+srv://root:YPJiBGDYiDlFv0Jp@cluster1.l0gmw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
  if (err) throw err;
  console.log('connect db');

  var db = client.db('store');

  db.collection('users')
    .find()
    .toArray(function (err, result) {
      if (err) throw err;

      console.log(result);
    });
});
