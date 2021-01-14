// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let title = event.title
  let description = event.description

  DB.collection('books')
  .add({
    date:[
      {
        _id:'apple-1',
        name:'apple',
        category:'fruit',
        price:10,
      }
    ]
  })
  return {
    event,
    result,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}