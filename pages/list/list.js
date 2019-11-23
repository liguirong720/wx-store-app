// pages/list/list.js
// url: https://locally.uieee.com/categories/1/shops
let request = require('../../utils/http');

Page({

    data: {
        from: '',
        id: '',
        pageIndex: 0,
        pageSize: 20,
        totalNum: 0,
        hasMore: true,
        shops: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            from: options.from,
            id: options.cat
        });
        this.queryShopsList();
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        const TYPE = {
            'ms': '美食',
            'xyzl': '洗浴足疗',
            'jhl': '结婚啦',
            'klok': '卡拉OK',
            'zgz': '找工作',
            'fdb': '辅导班',
            'qcby': '汽车保养',
            'zf': '租房',
            'zx': '装修'
        };
        let pageTitle = TYPE[this.data.from];
        wx.setNavigationBarTitle({
            title: pageTitle
        });
    },

    // 下拉刷新，清除所有数据
    onPullDownRefresh() {
        this.setData({
            pageIndex: 0,
            totalNum: 0,
            hasMore: true
        });
        this.queryShopsList();
    },

    // 上拉加载
    onReachBottom() {
        this.queryShopsList();
    },

    // 获取数据
    queryShopsList(params = {}) {
        let self = this;
        request.http({
            url: `categories/${self.data.id}/shops`,
            data: {
                _page: params.pageSize ? params.pageSize : self.data.pageSize,
                _limit: params.pageIndex ? params.pageIndex: self.data.pageIndex,
            }
        }).then((res) => {
            const totalNum = parseInt(res.header['X-Total-Count'])
            const shops = self.data.shops.concat(res.data);
            const hasMore = tmpShops.length < total;
            const pageIndex = self.data.pageIndex + 1;
            self.setData({
                shops,
                totalNum,
                hasMore,
                pageIndex
            });
        })
    }
})
