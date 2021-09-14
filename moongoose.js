const mongoose = require('mongoose');
const mongoDB = `mongodb+srv://root:YPJiBGDYiDlFv0Jp@cluster1.l0gmw.mongodb.net/store?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'name is not null'] },
  age: { type: Number, required: [true, 'age is not null'] },
  status: {
    type: String,
    enum: ['active', 'non active'],
    default: 'non active',
  },
});

const users = mongoose.model('users', userSchema);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
  // get all data
  //   const user = await users.find({});
  //   console.log(user);
  // selecting the 'name' and 'age' fields
  //   user.select('name age status');
  // limit our results to 4 items
  //   user.limit(4);
  // sort by age
  //   user.sort({ age: 1 });
  //   user.exec(function (err, users) {
  //     if (err) return handleError(err);
  //     console.log(users);
  //   });
  //   const newUser = await users.create({
  //     name: 'coba',
  //     age: 25,
  //     status: 'active',
  //   });
  //   console.log(newUser);
  //   const newUser = new users();
  //   newUser.name = 'Byhil';
  //   newUser.age = 25;
  //   newUser.status = 'non active';
  //   const insert = await newUser.save();
  //   console.log(insert);
  // Update data from update One
  //   const updateUser = await users.updateOne({_id: '61408f81951400153b956df9'}, {name: 'tio saputra'})
  //   console.log(updateUser);
  // Update data from update Id
  //   const updateUser = await users.findById('613f315ef79457d0f0411ce7');
  //   updateUser.name = 'HikiJa';
  //   const update = await updateUser.save();
  //   console.log(update);
  // Delete data
  //   const deleteUser = await users.deleteOne({ _id: '61408f81951400153b956df9' });
  //   console.log(deleteUser);

  // Create user use null object {}
  const user = await users.create({
    name: 'HikiLagi',
    age: 36,
  });
  console.log(user);
});
