const seq = require("./index")
const Sequelize = require("sequelize")

// 创建user 模型

const User = seq.define("user", {
  // id会自动创建并且自增
  userName: {
    type:  Sequelize.STRING,  // 相当于 mysql的 varchar(255)
    allowNull: false,
    comment: "用户名"
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: "密码"
  },
  nickName: {
    type: Sequelize.STRING,
    allowNull: true,
    comment: "昵称"
  }
})

// 创建Blog模型
const Blog = seq.define('blog', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

// 外键关联

Blog.belongsTo(User, {
  //创建外键Blog.userId -> User.id
  foreignKey: 'userId'
})

User.hasMany(Blog, {
  //创建外键 Blog.userId -> User.id
  foreignKey: 'userId'
})

module.exports = {
  User,
  Blog
}