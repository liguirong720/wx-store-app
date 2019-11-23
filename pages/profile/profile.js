// pages/profile/profile.js
Page({
    data: {
        userInfo: {},
        hasLogin: false
    },

    onReady() {
        wx.setNavigationBarTitle({
            title: '我的'
        });
    },

    getUserInfo(e) {
        let userInfo = e.detail.userInfo;
        this.setData({
            userInfo,
            hasLogin: true
        });
    }
})