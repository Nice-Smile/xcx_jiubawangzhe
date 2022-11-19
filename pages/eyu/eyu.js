var e, t;
// 在页面中定义插屏广告
let interstitialAd = null
e = null, t = wx.createInnerAudioContext(), Page({
    data: {
        help: !1,
        hejiu: !1,
        xuan: "block",
        motto: "Hello World",
        yachi: [ "", "/pages/img/eyu/y1.png", "/pages/img/eyu/y2.png", "/pages/img/eyu/y3.png", "/pages/img/eyu/y4.png", "/pages/img/eyu/y5.png", "/pages/img/eyu/y6.png", "/pages/img/eyu/y7.png", "/pages/img/eyu/y8.png" ],
        yaoyiyao: {}
    },
    onLoad: function(t) {
        // 在页面onLoad回调事件中创建插屏广告实例
if (wx.createInterstitialAd) {
    interstitialAd = wx.createInterstitialAd({
     // adUnitId: 'yanjiahao'
    })
    interstitialAd.onLoad(() => {})
    interstitialAd.onError((err) => {})
    interstitialAd.onClose(() => {})
  }
        wx.createInterstitialAd && ((e = wx.createInterstitialAd({})).onLoad(function() {}), 
        e.onError(function(e) {}), e.onClose(function() {}));
    },
    bindbackmusic: function() {
        (t = wx.createInnerAudioContext()).autoplay = !0, t.loop = !1, t.src = "/pages/video/yachi.mp3", 
        t.onPlay(function() {
            console.log("开始播放");
        }), t.onError(function(e) {
            console.log(e.errMsg), console.log(e.errCode);
        });
    },
    yachi: function() {},
    back_click: function() {
        wx.redirectTo({
            url: "/pages/other/other"
        });
    },
    help_click: function(e) {
        this.setData({
            help: !0
        });
    },
    gb_click: function(e) {
        this.setData({
            help: !1
        });
    },
    getrand: function(e, t) {
        return parseInt(Math.random() / .125) + 1;
    },
    onReady: function() {},
    onShow: function() {
        this.setData({
            lucky_int: this.getrand(1, 8)
        }), e && e.show().catch(function(e) {
            console.error(e);
        });
    },
    bofangdonghua: function() {
        var e = wx.createAnimation({
            duration: 70
        });
        e.rotate(0 + Math.random()).step().rotate(-2).step().rotate(2).step().rotate(-2).step().rotate(2).step().rotate(-2).step().rotate(2).step().rotate(-2).step().rotate(2).step().rotate(0).step(), 
        this.setData({
            yaoyiyao: e.export(),
            x: 100,
            y: 400
        });
    },
    start: function() {
        var e = wx.createAnimation({
            duration: 50,
            delay: 0
        });
        e.translate(2, -2).step().translate(-2, 2).step().translate(2, -2).step().translate(-2, 2).step().translate(0).step(), 
        this.setData({
            ani: e.export()
        });
    },
    xuan: function(e) {
        // 在适合的场景显示插屏广告
if (interstitialAd) {
    interstitialAd.show().catch((err) => {
      console.error(err)
    })
  }
        this.start(), this.bindbackmusic();
        var n = "yachi[" + e.currentTarget.dataset.cid + "]";
        this.setData(function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }({}, n, "/pages/img/wu.png")), e.currentTarget.dataset.cid == this.data.lucky_int && (t.src = "/pages/video/yao.mp3", 
        this.setData({
            hejiu: !0
        })), console.log(n);
    },
    chonglai: function() {
        this.setData({
            hejiu: !1,
            yachi: [ "", "/pages/img/eyu/y1.png", "/pages/img/eyu/y2.png", "/pages/img/eyu/y3.png", "/pages/img/eyu/y4.png", "/pages/img/eyu/y5.png", "/pages/img/eyu/y6.png", "/pages/img/eyu/y7.png", "/pages/img/eyu/y8.png" ],
            lucky_int: this.getrand(1, 8)
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: "更多好玩喝酒小工具，咬手鳄鱼",
            path: "/pages/eyu/eyu",
            imageUrl: "/pages/img/fximages.jpg"
        };
    },
    onShareTimeline: function(e) {
        return {
            title: "更多好玩喝酒小工具，咬手鳄鱼",
            query: "/pages/eyu/eyu"
        };
    }
});