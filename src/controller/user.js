/**
 * @description  user controller 
 * @author lele
 */

const { getUserInfo,createUser } = require("../services/user")
const { SuccessModel, ErrorModel } = require("../model/ResModel")
const { MD5 } = require("../utils/cryp")

/**
 * 用户名是否存在
 * @param {string} userName 
 */
async function isExist(userName){
  const userInfo = await getUserInfo(userName)
  if(userInfo){
    //用户名已存在
    return new SuccessModel(userInfo)
  }else{
    //用户名不存在
    return new ErrorModel({
      errno: 10003,
      message: "用户名未存在"
    })
  }
}

/**
 * 注册
 * @param {String} userName  用户名
 * @param {String} password 密码
 * @param {Number} gender 性别
 */
async function register({userName, password, gender }){
  const userInfo = await getUserInfo(userName)
  console.log(userInfo)
  if(userInfo){
    return new ErrorModel({
      errno: 10001,
      message: "用户名已存在"
    })
  }

  try{  
    await createUser({
      userName,
      password:MD5(password),
      gender
    })
    return new SuccessModel()
  }catch(err){
    console.log(err.message, err.stack)
    return new ErrorModel({
      errno: 10002,
      message: "创建用户失败"
    })
  }
}

/**
 * 
 * @param {Object} ctx koa ctx
 * @param {string} userName 用户名
 * @param {string} password 密码
 */
async function login(ctx, userName, password){
  //登陆成功 ctx.session.userInfo = xxx
  password = MD5(password)
  const userInfo = await getUserInfo(userName, password)
  if(!userInfo){
    return new ErrorModel({
      errno: 10006,
      message: "账号或密码错误"
    })
  }

  //登陆成功
  // if(ctx.session.userInfo == null){
    ctx.session.userInfo = userInfo
  // }
  return new SuccessModel()
}

module.exports = {
  isExist,
  register,
  login
}