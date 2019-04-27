const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/calendar');
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('Connected!')
})

let dateSchema = mongoose.Schema ({
  date: String
})

let Date = mongoose.model('Date', dateSchema);

module.exports.db = db
module.exports.Date = Date