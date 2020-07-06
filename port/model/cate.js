var mongoose=require('mongoose')

var catesModel=mongoose.model('cate',mongoose.Schema({
  rank: Number, // 排序
  cate: String, // 英文字段
  cate_zh: String  // 中文字符
}))

module.exports= catesModel