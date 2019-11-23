
/**
 * video.js
*/
Page({

    /**
     * 页面的初始数据
     */
    data: {
        videoSrc: '',
        danmuValue: '',
        dammuList: [
            {
                text: '第 1s 出现的弹幕',
                color: '#ff0000',
                time: 1
            }
        ],
        videoList: [
            {
                id: "1",
                title: 'this is the first video',
                url: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.videoCtx = wx.createVideoContext('myVideo');
        this.setCategories();
    },

    playVideo: function (e) {
        this.videoCtx.stop();
        this.setData({
            videoSrc: e.currentTarget.dataset.url
        })
        this.videoCtx.play();
    },

    addDanmu: function (e) {
        this.setData({
            danmuValue: e.detail.value
        });
    },

    sendDanmu: function () {
        let self = this;
        this.videoCtx.sendDanmu({
            text: self.data.danmuValue,
            color: self.genRandomColor()
        })
    },

    genRandomColor: function () {
        let rgb = []
        for (let i = 0; i < 3; ++i) {
            let color = Math.floor(Math.random() * 256).toString(16)
            color = color.length == 1 ? '0' + color : color
            rgb.push(color)
        }
        return '#' + rgb.join('')
    }
})