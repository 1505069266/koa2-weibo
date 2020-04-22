const seq = require("./model/index")

require("./model/model")

seq.authenticate().then(res=>{
  console.log("ok");
}).catch(e=>{
  console.log(e);
})


// 执行同步

seq.sync({force: true}).then(()=>{
  console.log("同步成功!");
  process.exit()
})