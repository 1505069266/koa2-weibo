/**
 * @description json schema 验证中间件
 * @author lele
 */


const { ErrorModel } = require("../model/ResModel")
/**
 * 生成 json schema 验证的中间件
 * @param {function} validateFn 验证函数
 */
function genValidator(validateFn) {
  async function validator(ctx, next){
    const data = ctx.request.body
    const err = validateFn(data)
    if(err){
      //验证失败
      ctx.body = new ErrorModel({
        errno: 10005,
        message: "验证失败"
      })
      return 
    }
    await next()
  }
  return validator
}


module.exports = {
  genValidator
}