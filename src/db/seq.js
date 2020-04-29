const Sequelize = require("sequelize")


const conf = {
    host: 'localhost',
    dialect: 'mysql'
}

//连接池链接方法
conf.pool = {
  max: 5, //连接池中最大的链接数量
  min: 0, //最小连接数量
  idle: 10000 //如果一个连接池  10s 之内没有被使用    则释放
}

const seq = new Sequelize('myblog', 'root','199608025zhu', conf)




module.exports = seq