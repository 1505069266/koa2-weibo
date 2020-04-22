const { User } = require("./model/model")

!(async function(){

  //修改
  const updateRes = await User.update({
    nickName: "张三"
  }, {
    where: {
      userName: "zhangsan"
    }
  })

  console.log(updateRes);
  console.log("更新是否成功: ", updateRes[0] > 0 ? "是": "否");

})()