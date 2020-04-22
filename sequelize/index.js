const seq = require("./model/index")

seq.authenticate().then(res=>{
  console.log(res);
}).catch(e=>{
  console.log(e);
})