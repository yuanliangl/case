var express = require('express');
var router = express.Router();


// 引入模块
var usersModel=require('../model/users')
var jwt =require('../utils/jwt')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 注册
router.post('/regist',function(req,res){
  var {username,password,role}=req.body;
  //是否必填
  if(!username) return res.json({
    err:1,
    msg:'缺少必填参数'
  });
  if(!password) return res.json({
    err:1,
    msg:'缺少必填参数'
  })
  // 数据类型格式及正则
  if(!/[a-zA-Z]{3,16}/.test(username)) return res.json({
    err:2,
    msg:'用户名要求是3-16位纯字母组成' 
  });
  if(!/^[a-zA-Z][a-zA-Z0-9\@\_\-]{5,17}$/.test(password)) return res.json({
    err:2,
    msg:'密码不符合要求'
  })
  //业务验证
  usersModel.find({username}).then(arr=>{
    if(arr && arr.length>0){
      res.json({
        err:3,
        msg:'用户名已被注册'
      })
    }else{
      //入库
      var ele={
        username,
        password,
        role: role? role :1,
        create_item:Date.now()
      };
      usersModel.insertMany([ele]).then(()=>{
        res.json({
          err:0,
          msg:'注册成功',
        })
      })
    }
  })
})
//登入
router.post('/login',function(req,res){
  var {username,password}=req.body;
  // 判断是否必传
  if(!username) return res.json({
    err:1,
    msg:'缺少必填参数'
  });
  if(!password) return res.json({
    err:1,
    msg:'缺少必填参数'

  })
  usersModel.find({username,password}).then(arr=>{
    if(arr && arr.length>0){
      res.json({
        err:0,
        msg:'登入成功',
        data:'登入成功',
        token: jwt.createToken({username,password}) //返回一个token
      })
    }else{
      res.json({
        err:1,
        msg:'登入失败'
      })
    }
  })
})
module.exports = router;
