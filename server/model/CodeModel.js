
const mongoose = require('mongoose');

//日期格式化插件
const moment = require('moment');

moment.locale('zh-cn');

const codeSchema = mongoose.Schema({
    name:String,
    coded:Number,
    time:{
        type:Date,
        default:Date.now
    }
});

codeSchema.methods.time_age = function(){
    var data = new Date()
    return ( data.getTime() - this.time.getTime() ) /1000
}
const CodeModel = mongoose.model('code',codeSchema);

module.exports = CodeModel