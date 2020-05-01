/**
 * @description user view 路由
 * @author lele
 */

const router = require("koa-router")()

/**
 * 获取登录信息
 * @param {Object} ctx ctx
 */
function getLoginInfo(ctx){
  let data = {
    isLogin: false
  }

  const userInfo = ctx.session.userInfo
  if(userInfo){
    data = {
      isLogin: true,
      userName: userInfo.userName
    }
  }

  return data
}
router.get("/login", async(ctx, next)=>{
  await ctx.render('login', getLoginInfo(ctx))
})

router.get("/register", async(ctx, next)=>{
  await ctx.render("register", getLoginInfo(ctx))
})

router.get("/setting", async (ctx, next) => {
  await ctx.render("/setting")
})


module.exports = router