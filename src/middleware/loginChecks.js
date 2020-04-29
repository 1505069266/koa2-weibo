/**
 * @description 登录验证的中间件
 * @author lele
 */

const { ErrorModel } = require("../model/ResModel")
 /**
  * API登录验证
  * @param {Object} ctx 
  * @param {function} next 
  */
async function loginCheck(ctx,next){
  if(ctx.session && ctx.session.userInfo){
    //已登录
    await next()
    return
  }
  //未登录
  ctx.body = new ErrorModel({
    errno: 10005,
    message: "您尚未登陆"
  })
}

/**
 * 页面登录验证
 * @param {object} ctx 
 * @param {function} next 
 */
async function loginRedirect(ctx, next){
  if(ctx.session && ctx.session.userInfo){
    //已登录
    await next()
    return
  }
  //未登录
  const ctxUrl = ctx.url
  ctx.redirect("/login?url="+encodeURIComponent(ctxUrl))
}

module.exports = {
  loginCheck,
  loginRedirect
}