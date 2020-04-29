/**
 * @description  初始化数据库
 * @author  lele
 */

const seq = require("./seq")

require("./model/User")


seq.authenticate().then(() => {
  console.log("数据库连接成功!")
}).catch(e=>{
  console.log(e)
})

seq.sync({force: true}).then(() => {
  console.log("数据库初始化成功!")
  process.exit()
})