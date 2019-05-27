const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
  menu:Array

});

const MenuModel = mongoose.model('menu',menuSchema);

module.exports = MenuModel