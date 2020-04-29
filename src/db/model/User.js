/**
 * @description 用户数据模型
 * @author lele
 */

const seq = require("../seq")
const { STRING, DECIMAL } = require("../types")

//users
const User = seq.define('user', {
  userName: {
    type: STRING, //数据类型是 varchar(255)
    allowNull: false,  //不允许是null
    unique: true,  //用户名必须唯一
    comment: "用户名唯一"
  },
  password: {
    type: STRING,
    allowNull: false,
    comment: "密码"
  },
  nickName: {
    type: STRING,
    allowNull: true,
    comment: "昵称"
  },
  gender: {
    type: DECIMAL,
    allowNull: false,
    defalutValue: 3,  //默认值
    comment: "性别 (1 男性, 2女性, 3保密)"
  },
  picture: {
    type: STRING,
    allowNull: true,
    comment: "存的图片地址"
  },
  city: {
    type: STRING,
    comment: "城市"
  }
})

module.exports = User