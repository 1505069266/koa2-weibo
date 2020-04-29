/**
 * @description 加密方法
 * @author lele
 */

const md5 = require("md5")
const { SALT } = require("../conf/index")

/**
 * md5 加密
 */

function MD5(value){
  value = value + SALT
  return md5(value)
}

module.exports = {
  MD5
}