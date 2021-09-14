const MongoClient = require('mongodb').MongoClient;
const url = `mongodb+srv://root:YPJiBGDYiDlFv0Jp@cluster1.l0gmw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const db = new MongoClient(url, { useUnifiedTopology: true });

(async () => {
  try {
    await db.connect();
  } catch (err) {
    console.log(err);
  }
})();

module.exports = db;
