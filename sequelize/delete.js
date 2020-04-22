const { User } = require("./model/model")

!(async function(){

  //新建一个用户
  // const zhuxiaole = await User.create({
  //   userName: "朱晓乐",
  //   password: "1993487",
  //   nickName: "乐霸霸"
  // })

  //删除昵称为乐霸霸的用户
  const deleteRes = await User.destroy({
    where: {
      nickName: "乐霸霸"
    }
  })

  console.log(deleteRes);




})()