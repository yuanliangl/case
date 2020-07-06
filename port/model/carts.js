var mongoose=require('mongoose')

var cartsModel=mongoose.model('cates',mongoose.Schema({
  user_id:Object,   //用户id
  good_id:Object,  //商品id
  create_time: String,  // 购买时间
  num: Number,        // 下单数量
  status: Number //判断是否删除
}))

module.exports= cartsModel