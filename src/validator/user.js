/**
 * @description user 数据格式校验
 * @author lele
 */


const { validate } = require("./validator")

const schema1 = {
  type: "object",
  properties: {
    userName: {
      type: 'string',
      pattern: '^[a-zA-Z][a-zA-Z0-9_]+$',
      maxLength: 255,
      minLength: 2
    },
    password: {
      type: 'string',
      maxLength: 255,
      minLength: 3
    },
    newPassword: {
      type: 'string',
      maxLength: 255,
      minLength: 3
    },
    nickName: {
      type: 'string',
      maxLength: 255,
      minLength: 3
    },
    gender: {
      type: 'number',
      maximum: 3,
      minimum: 1 
    }
  }
}

// 执行校验
/**
 * 校验用户数据格式
 * @param {Object} data 用户数据
 */
function userValidate(data={}){
  return validate(schema1, data)
}

module.exports = {
  userValidate
}