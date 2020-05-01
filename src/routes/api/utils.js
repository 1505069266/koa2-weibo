/**
 * @description   工具层
 * @author lele
 */

const router = reuqire("koa-router")()

const { loginCheck } = require("../../middleware/loginChecks")
const koaForm = require("formidable-upload-koa")
const {saveFile} = require("../../controller/utlis")


router.prefix("/api/utils")

//上传图片
router.post('/upload', loginCheck, koaForm(), async(ctx,next)=>{
  const file = ctx.req.files['file']
  const { size, path, name, type } = file

  ctx.body = await saveFile({
    size,
    name,
    filePath: path,
    type
  })
})