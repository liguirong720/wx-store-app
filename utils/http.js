module.exports = {
    http: function (params = {}) {
        if (!params.url) {
            wx.showToast({
                title: '无法获取请求地址',
                icon: 'none',
                duration: 1500,
                mask: false
            });
            return;
        }
        wx.showLoading({
            title: '加载中。。。',
            mask: true
        });
        return new Promise((resolve, reject) => {
            wx.request({
                url: `https://locally.uieee.com${params.url}`,
                data: params.data || '',
                header: {
                    'content-type': 'application/json'
                },
                method: 'GET',
                success: (res)=>{
                    if (res.statusCode === 200) {
                        resolve(res);
                    } else {
                        reject(res);
                    }
                    wx.hideLoading();
                },
                fail: (err) => {
                    reject(err);
                    wx.hideLoading();
                }
            });
        })
    }
}