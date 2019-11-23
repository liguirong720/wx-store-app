// pages/info/info.js
Page({
    data: {
        infos: []
    },

    onLoad (options) {
        this.getInfos();
        this.scrolltoBottom();
    },

    onReady () {
        wx.setNavigationBarTitle({
            title: '最新消息'
        });
    },

    getInfos () {
        let infos = [];
        for (let i = 0; i < 10; i++) {
            infos.push({
                title: '免费送票！超有内涵的门票。',
                date: i + ' September',
                image: 'https://unsplash.it/400/300',
                summary: '最糟糕的，也许就是最幸运的。'
            });
        }
        this.setData({ infos });
    },

    scrolltoBottom () {
        wx.createSelectorQuery().select('#infos_wrap').boundingClientRect((res) => {
            wx.pageScrollTo({
                scrollTop: res.bottom,
                duration: 300
            });
        }).exec();
    }
})