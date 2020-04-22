const { User, Blog } = require("./model/model")

!(async function(){
  //查询一条记录
  // const zhangsan = await User.findOne({
  //   where: {
  //     nickName: "张三"
  //   }
  // })

  // console.log(zhangsan);

  // //查询特定的列
  // const zhangsanName = await User.findOne({
  //   attribute:  ['userName', 'nickName'],
  //   where: {
  //     nickName: "李四"
  //   }
  // })
  
  // console.log(zhangsanName.dataValues);

  //查询所有的数据
  const zhangsanBlogList = await Blog.findAll({
    attribute: ['title','content'],
    where: {
      userId: 2
    },
    order: [
      ['id','desc'],
      ['createdAt', 'desc']
    ]
  })
  // console.log(zhangsanBlogList.map(item=>item.dataValues));

  //分页
  const blogPageList = await Blog.findAll({
    limit: 2,
    offset: 1,
    where: {
      userId: 2
    }
  })
  // console.log(blogPageList.map(item=>item.dataValues));

  //查询总数
  const blogListAndCount = await Blog.findAndCountAll({
    where: {
      userId: 2
    }
  })

  // console.log(blogListAndCount.count);

  //连表查询
   const blogListWithUser = await Blog.findAndCountAll({
     order: [
       ["id","desc"]
     ],
     include: [
       {
         model: User,
         where: {
           userName: "lisi"
         }
       }
     ]
   })

  //  console.log(blogListWithUser.count);
  //  console.log(blogListWithUser.rows.map(item=>{
  //    let blogVal = item.dataValues
  //    blogVal.user = blogVal.user.dataValues
  //    return blogVal
  //  }));

   //连表查询2
  //  const userListWithBlog = await User.findAndCountAll({
  //    attribute: [
  //      'userName',
  //      'nickName'
  //    ],
  //    include: [
  //      {
  //        model: Blog
  //      }
  //    ]
  //  })

  //  console.log(userListWithBlog.count);
  //  console.log(JSON.stringify(userListWithBlog.rows.map(user=>{
  //     let userVal = user.dataValues
  //     console.log(userVal);
  //     userVal.blogs = userVal.blogs.map(blog=>blog.dataValues)
  //     return userVal
  //   })));

  
})()