/**
 * @description user API 路由
 * @author lele
 */

const router = require("koa-router")()
const { isExist,register,login } = require("../../controller/user")
const { userValidate } = require("../../validator/user")
const { genValidator } = require("../../middleware/validator")


router.prefix('/api/user')

//注册路由
router.post("/register",genValidator(userValidate), async(ctx)=>{
  const { userName, password,gender } = ctx.request.body
  //controller
  ctx.body = await register({
    userName,
    password,
    gender
  })
})


//判断用户名是否存在
router.post("/isExist", async(ctx)=>{
  const { userName } = ctx.request.body
  console.log(ctx.request.body)
  console.log(userName)
  //controller
  ctx.body = await isExist(userName)
})

//用户登陆逻辑
router.post("/login", async(ctx,next)=>{
  const { userName, password } = ctx.request.body
  console.log(ctx.session)
  //controller
  ctx.body = await login(ctx, userName, password)

})


module.exports = router