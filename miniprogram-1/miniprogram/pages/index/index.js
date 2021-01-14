//index.js
const app = getApp()

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    books:[{
      title:'书1',
      discription:'书1的介绍'
    },
    {
      title:'书2',
      discription:'书2的介绍'
    }
  ]
  },

  onLoad: function() {
    wx.cloud.callFunction({
      name: 'add',
      data: {
        a: 12,
        b: 19
      }
    }).then(data=>{
      console.log(data)
    })

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },
handleAdd() {
  console.log('add')
}


})
