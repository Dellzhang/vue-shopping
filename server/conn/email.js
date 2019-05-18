
//邮件发送功能
const setting = require('../setting')
const nodemailer = require('nodemailer');
const CodeModel = require('../model/CodeModel')
const mail = {
    sendMails (data,cb) {
        let transporter = nodemailer.createTransport({
            service: '163',
            auth: {
                user: 'zhangmengen101@163.com',
                pass: 'zmn971001'   //163邮箱的授权码
            }
        });

        var coded = setting.code;
        var mailOptions = {
            from: 'zhangmengen101@163.com',
            to: data.email, //接收者邮箱
            subject: '模仿美团网注册',
            html: '你的验证码为:'+ coded
        };
        transporter.sendMail(mailOptions,(err,info)=>{
            if(err){
                cb(err)
            }else{
                var code = new CodeModel({
                    'name': data.name,
                    'email':data.email,
                    'coded': coded
                })
                CodeModel.findOne( { "$or": [{'name':data.name},{'email': data.email}] }).exec(function(err,use){
                    if(use){
                        CodeModel.updateOne({"$or":[{'name':data.name},{'email':data.email}]},{'coded':coded,'time': new Date()}).exec(function(err,a){
                            if(err){
                               console.log(err)
                            }
                        })
                    }else{
                        code.save()
                    }
                })
                
            }
        })
    }
}

module.exports = mail;