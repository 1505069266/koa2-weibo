const { Blog, User } = require("./model/model")

!(async function(){
  //创建用户
  const zhangsan = await User.create({
    userName: "zhangsan",
    password: "199608025zhu",
    nickName: "张三"
  })

  //
  console.log("张三");
  console.log(zhangsan.dataValues);
  console.log(zhangsan.dataValues.id);

  const lisi = await User.create({
    userName: "lisi",
    password: "15050w",
    nickName: "李四"
  })

  console.log(lisi.dataValues.id);

  //创建博客

  const blog1 = await Blog.create({
    title: "标题1",
    content: '内容1',
    userId: lisi.dataValues.id
  })

  console.log(blog1.dataValues);

  const blog2 = await Blog.create({
    title: "标题2",
    content: '内容2',
    userId: lisi.dataValues.id
  })

  const blog3 = await Blog.create({
    title: "标题3",
    content: '内容3',
    userId: zhangsan.dataValues.id
  })

  const blog4 = await Blog.create({
    title: "标题4",
    content: '内容4',
    userId: lisi.dataValues.id
  })

})()