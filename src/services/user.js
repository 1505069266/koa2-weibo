/**
 * @description  user service
 * @author lele
 */

const { User } = require("../db/model")
const { formatUser } = require("./_format")

/**
 * 获取用户信息
 * @param {string} userName 用户名
 * @param {string} password 密码
 */
async function getUserInfo(userName, password) {
  //查询条件
  const whereOpt = {
    userName
  }
  if(password){
    Object.assign(whereOpt, {password})
  }

  //查询
  const result = await User.findOne({
    attribute: ['id','userName', 'nickName','picture', 'city'],
    where: whereOpt
  })

  if(result == null){
    //没有用户信息
    return result
  }

  //格式化
  const formatResult = formatUser(result.dataValues)

  return formatResult
}

/**
 * 创建用户
 * @param {String} userName 用户名
 * @param {String} password 密码
 * @param {Number} gender 性别 默认3 保密
 * @param {String} nickName 昵称
 */
async function createUser({userName,password, gender=3,nickName}){
  const result = await User.create({
    userName,
    password,
    gender,
    nickName: nickName?nickName:userName
  })
  return result.dataValues
}

module.exports = {
  getUserInfo,
  createUser
}