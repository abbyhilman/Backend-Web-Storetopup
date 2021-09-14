const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router();
const connection = require('./connection');
const isConnected = { connected: false };

router.get('/', (req, res) => {
  res.status(200).send('Hello Word');
});

router.get('/users', async (req, res) => {
  try {
    if ((isConnected.connected = true)) {
      const db = connection.db('store');
      const users = await db.collection('users').find().toArray();
      res.send({ data: users });
    } else {
      res.send({ message: 'koneksi database gagal' });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

router.post('/users', async (req, res) => {
  try {
    if ((isConnected.connected = true)) {
      const { name, age, status } = req.body;
      const db = connection.db('store');
      await db.collection('users').insertMany(
        [
          {
            name,
            age,
            status,
          },
        ],
        (err, result) => {
          if (err) {
            console.error(err);
            res.status(500).send(err);
          }
          if (result.insertedCount === 1) {
            res.status(200).send({ messages: 'Berhasil di tambahkan' });
          } else {
            res.send({ message: 'Gagal menambahkan data' });
          }
        }
      );
    } else {
      res.send({ message: 'koneksi database gagal' });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

router.put('/users/:id', async (req, res) => {
  try {
    if ((isConnected.connected = true)) {
      const { id } = req.params;
      const { name, age, status } = req.body;
      const db = connection.db('store');
      await db.collection('users').updateOne(
        { _id: ObjectId(id) },
        {
          $set: {
            name,
            age,
            status,
          },
        },
        (err, result) => {
          if (err) {
            console.error(err);
            res.status(500).send(err);
          }
          console.log(result);
          if (result.modifiedCount === 1) {
            res.status(200).send({ messages: 'Berhasil di ubah' });
          } else {
            res.send({ message: 'Gagal mengubah data' });
          }
        }
      );
    } else {
      res.send({ message: 'koneksi database gagal' });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

router.delete('/users/:id', async (req, res) => {
  try {
    if ((isConnected.connected = true)) {
      const { id } = req.params;
      const db = connection.db('store');
      await db
        .collection('users')
        .deleteOne({ _id: ObjectId(id) }, (err, result) => {
          if (err) {
            console.error(err);
            res.status(500).send(err);
          }
          console.log(result);
          if (result.deletedCount === 1) {
            res.status(200).send({ message: 'Success Delete', result });
          } else {
            res.send({ message: 'Gagal delete user' });
          }
        });
    } else {
      res.send({ message: 'koneksi database gagal' });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = router;
