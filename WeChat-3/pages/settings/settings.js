// pages/settings/settings.js
Page({
  data: {
    userInfo: {},
    // userid: null,
    // userclass: null,
    // username: null
  },
  /**
   * 生命周期函数--监听页面加载
   */
  apply:function(){
     wx.navigateTo({
       url: '../applicant/applicant',
     })
  },
  
  onLoad: function (options) {
    this.setData({
      userInfo: wx.getStorageSync('user') || {},
      // userid: wx.getStorageSync('userid'),
      // userclass: wx.getStorageSync('userclass'),
      // username: wx.getStorageSync('username')
    });
  },

  unlogin: function() {
    wx.showModal({
      title: '退出登录',
      content: '确定退出嘛',
      success(res) {
        if (res.confirm) {
          wx.clearStorage();
          wx.redirectTo({
            url: '../index/index',
          });
        }
      }
    })

  }
})