const router = require('koa-router')()
const { loginRedirect,loginCheck } = require("../middleware/loginChecks")

router.get('/',loginRedirect, async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    msg: '尼玛',
    isMe: true,
    list: [
      {
        name: '朱晓乐',
        age: '18'
      },
      {
        name: '郑璇',
        age: 16
      },
      {
        name: '张晓媛',
        age: 24
      }
    ]
  })
})

router.get('/json',loginCheck, async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
