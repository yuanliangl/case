var express = require('express')
var router = express.Router();

// 引入模块
var catesModel = require('../model/cate');

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/getAllCates',function(req,res){
  let {rank,cate,cate_zh}=req.query
  console.log(cate)
  catesModel.insertMany([{rank,cate,cate_zh}]).then(arr=>{
    res.json({err: 0, msg:'添加成功',data:arr})
  })
})

module.exports = router;