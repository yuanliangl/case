var mongoose= require ("mongoose")

var goodsSchema= mongoose.Schema({
  img:String,
  name:String,
  desc: String,
  price:Number,
  cate: String,
  hot: Boolean
})

// 创建model,是一个api的集合
var goodsModel=mongoose.model('goods',goodsSchema)

// 抛出模块
module.exports=goodsModel