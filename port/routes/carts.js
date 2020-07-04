var express = require('express')
var router = express.Router();

// 引入模块
var cartsModel = require('../model/carts');
const goodsModel = require('../model/goods');

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// 加入购物车
// 根据id传入商品信息
router.post('/addCarts', function (req, res) {
  var { num, good_id } = req.body
  if (!good_id) return res.json({
    err: 1,
    msg: '缺少必填参数'
  })
  let ele = {
    num: num ? num : 1,
    good_id,
    create_time: Date.now(),
    status: 1
  }
  cartsModel.insertMany([ele]).then((arr) => {
    res.json({
      time:arr,
      err: 0,
      msg: 'success',
      data: '添加成功'
    })
  })
})
// 获取购物车列表
router.get('/CartsList', function (req, res) {
  cartsModel.find({ status: 1 }).sort({ create_time:-1}).then(arr => {
    if (arr.length == 0) return res.json({
      err: 0,
      msg: 'success',
      data: ''
    });
    let list = [];//定义一个空数组
    arr.map((ele, idx) => {
      goodsModel.find({ _id: ele.good_id }).then(arr1 => {
        list.push({
          _id: ele._id,
          good_id: ele.good_id,
          create_time: ele.create_time,
          num: ele.num,
          status: ele.status,
          good: arr1[0]
        })
        if (list.length == arr.length) {
          res.json({err:0,msg:'success',data:list})
        }
      })
    })
  })
})
//更改购物车商品数量
router.post('/updateCartsNum',function(req,res){
  let {id,num}=req.body;
  let =req.body
  console.log(id)
  if(!id)return res.json({
    err:1,
    msg:'缺少必填参数'
  })
  if(!num) return res.json({
    err:1,
    msg:'缺少必填参数'
  })
  cartsModel.updateOne({_id:id},{$set:{num:num}}).then(arr=>{
    res.json({
      err:0,
      msg:"success",
      data:arr
    })
  })
})
//删除购物车商品
router.get('/DeleteCartsGoods',function(req,res){
  let {id}= req.query;
  console.log(id)
  console.log(id)
  if(!id) return res.json({
    err:1,
    msg:'缺少必填参数'
    
  })
  cartsModel.updateOne({_id:id},{$set:{status:0}}).then((arr)=>{
    res.json({
      err:0,
      msg:'success',
      data:'删除成功'
    })
  })
})
module.exports = router;