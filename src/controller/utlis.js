/**
 * @description  util  controller
 * @author lele
 */


const { SuccessModel, ErrorModel } = require("../model/ResModel")
 //文件最大体积是10M
const max_size = 1024*1024*1024*10

async function saveFile({name, type, path, filePath}){
  if(size > max_size){
    return new ErrorModel({
      errno: 10010,
      message: "文件体积过大"
    })
  }
} 

module.exports = {
  saveFile
}