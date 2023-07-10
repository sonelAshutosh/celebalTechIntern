const mongoose = require('mongoose')
const User = require('./15_JS_MongoSchema')

mongoose.connect('mongodb://localhost/celebalTest', {
  useNewUrlParser: true,
})

const user = new User({ name: 'John', age: 12 })

async function saveToDatabase() {
  await user.save()
  console.log('Data Saved Sucessfully')
}

// saveToDatabase()

async function retrieveFromDatabase() {
  const user = await User.findOne({ name: 'John' })
  console.log(user)
}

retrieveFromDatabase()
