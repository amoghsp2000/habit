const mongoose = require('mongoose')

const connectDb = () => {
  mongoose
    .connect('mongodb://localhost:27017/habits', {})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err))
}

module.exports = connectDb
