const mongoose = require('mongoose');
const Site = require('./site')
const Perf = require('./performance')
const Alarm = require('./alarm')
const Err = require('./error')

mongoose.connect('mongodb://localhost:27017/monitor', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error', () => console.log('Mongo connection error'));
db.once('open', () => console.log('Mongo connection successed'));

var Models = {
  Site,
  Perf,
  Alarm,
  Err
}

module.exports = Models