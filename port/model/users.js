// 引入
var mongoose=require("mongoose")

var usersModel=mongoose.model('users',mongoose.Schema({
  username:String,
  password:String,
  role:Number,
  phone:String,
  email:String,
  create_item:Number
}))

// 抛出模板
module.exports=usersModel