var express = require('express');
var router = express.Router();
// 引入模块
var goodsModel= require('../model/goods')

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 获取商品
router.get('/acquires',function(req,res){
  console.log(req.url)
  let hot=req.query
  // 查询
  goodsModel.find(hot).then(arr=>{
    console.log(arr)
    res.json({
      err:0,
      msg:"success",
      data:arr
    })
  })
})
// 添加商品
router.post('/addGood',function(req,res){
  var {img,name,desc,price,cate,hot}=req.body;
  console.log(req.url)
  // 是否必填
  if(!img) return res.json({
    err:1,
    msg:'缺少图片参数'
  });
  if (!name) return res.json({
    err:1,
    msg:'缺少商品名称未填'
  });
  if(!desc) return res.json({
    err:1,
    msg:'商品描述'
  })
  // 入库
  var ele={
    img,
    name,
    desc,
    price,
    cate,
    hot:hot?hot:false
  };
  goodsModel.insertMany([ele]).then(arr=>{
    console.log('数据',arr)
    res.json({ err:0,msg:'添加成功'})
  })

})
// 获取商品详情
router.get('/goodDetail',function(req,res){
  var{good_id}=req.query
  // 判断是否必传
  if(!good_id)return res.json({
    err:1,
    msg:'id不能为空'
  })
  // 精准查询
  goodsModel.find({_id:good_id}).then(arr=>{
    console.log(arr)
    res.json({
      err:0,
      msg:'succuss',
      data:arr[0]
    })
  })
})
module.exports = router;