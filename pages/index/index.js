
/**
 * index.js
*/
Page({

    /**
     * 页面的初始数据
     */
    data: {
        categories: [],
        slides: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setCategories();
        this.setSlides();
    },

    setCategories: function() {
        const categories = [
            {
                "id": 1,
                "title": 'ms',
                "name": "美食",
                "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i2onyj302u02umwz.jpg"
            },
            {
                "id": 2,
                "title": 'xyzl',
                "name": "洗浴足疗",
                "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i2j4dj302u02umwy.jpg"
            },
            {
                "id": 3,
                "title": 'jhl',
                "name": "结婚啦",
                "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i56i0j302u02u744.jpg"
            },
            {
                "id": 4,
                "title": 'klok',
                "name": "卡拉OK",
                "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i2uzvj302u02udfo.jpg"
            },
            {
                "id": 5,
                "title": 'zgz',
                "name": "找工作",
                "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i2rnlj302u02umwz.jpg"
            },
            {
                "id": 6,
                "title": 'fdb',
                "name": "辅导班",
                "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i2zloj302u02udfn.jpg"
            },
            {
                "id": 7,
                "title": 'qcby',
                "name": "汽车保养",
                "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i69eij302u02ua9w.jpg"
            },
            {
                "id": 8,
                "title": 'zf',
                "name": "租房",
                "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i6j2lj302u02u0sj.jpg"
            },
            {
                "id": 9,
                "title": 'zx',
                "name": "装修",
                "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i6z1pj302u02ua9u.jpg"
            }
        ];
        this.setData({ categories })
    },

    setSlides: function() {
        const slides = [
            { image: 'http://ww1.sinaimg.cn/mw690/006ThXL5ly1fj7zx3w751j30u00dmgy3.jpg', link: '' },
            { image: 'http://ww1.sinaimg.cn/mw690/006ThXL5ly1fj6ckx9tlwj30u00fqk8n.jpg', link: '' }
        ];
        this.setData({ slides })
    }
})