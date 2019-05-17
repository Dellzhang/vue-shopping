const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mt',{ useNewUrlParser:true });

const db = mongoose.connection;
db.once('open',()=> console.log('连接成功') );
db.on('error',() => console.log('连接失败'));

module.exports = db;