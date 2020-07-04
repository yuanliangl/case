var mongoose=require("mongoose")

mongoose.connect('mongodb://localhost/qf2001', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

var db = mongoose.connection
db.on('error', function(err) {
  console.log('数据库连接失败')
})
db.once('open', function() {
  console.log('数据库连接成功')
})