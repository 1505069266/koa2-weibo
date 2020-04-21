const router = require('koa-router')()

router.get('/', async (ctx, next) => {
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

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get("/profile/:name", async (ctx, next)=>{
  const { name } = ctx.params
  ctx.body = {
    title: 'profile',
    name
  }
})

router.post("/login", async (ctx, next) => {
  const { username, password } = ctx.request.body
  ctx.body = {
    username,
    password
  }
})

module.exports = router
