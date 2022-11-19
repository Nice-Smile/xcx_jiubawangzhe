var e, n;
// 在页面中定义插屏广告
let interstitialAd = null
e = null, n = wx.createInnerAudioContext(), Page({
    data: {
        help: !1,
        hejiu: !1,
        datou: [ "", "/pages/img/uncle_head.png", "/pages/img/uncle_head.png", "/pages/img/uncle_head.png", "/pages/img/uncle_head.png", "/pages/img/uncle_head.png", "/pages/img/uncle_head.png", "/pages/img/uncle_head.png", "/pages/img/uncle_head.png", "/pages/img/uncle_head.png", "/pages/img/uncle_head.png", "/pages/img/uncle_head.png", "/pages/img/uncle_head.png", "/pages/img/uncle_head.png", "/pages/img/uncle_head.png", "/pages/img/uncle_head.png", "/pages/img/uncle_head.png" ]
    },
    onLoad: function(n) {
        wx.createInterstitialAd && ((e = wx.createInterstitialAd({
           // adUnitId: "yanjiahao"
        })).onLoad(function() {}), e.onError(function(e) {}), e.onClose(function() {}));
    },
    bindbackmusic: function() {
        (n = wx.createInnerAudioContext()).autoplay = !0, n.loop = !1, n.src = "/pages/video/xiaoshi.mp3", 
        n.onPlay(function() {}), n.onError(function(e) {
            console.log(e.errMsg), console.log(e.errCode);
        });
    },
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
    getrand: function(e, n) {
        return parseInt(Math.floor(16 * Math.random() + 1));
    },
    chonglai: function() {
        this.setData({
            hejiu: !1,
            hejiuto: !1,
            datou: [ "", "/pages/img/uncle_head.png", "/pages/img/uncle_head.png", "/pages/img/uncle_head.png", "/pages/img/uncle_head.png", "/pages/img/uncle_head.png", "/pages/img/uncle_head.png", "/pages/img/uncle_head.png", "/pages/img/uncle_head.png", "/pages/img/uncle_head.png", "/pages/img/uncle_head.png", "/pages/img/uncle_head.png", "/pages/img/uncle_head.png", "/pages/img/uncle_head.png", "/pages/img/uncle_head.png", "/pages/img/uncle_head.png", "/pages/img/uncle_head.png" ],
            lucky_int: this.getrand(1, 16)
        });
    },
    onReady: function() {},
    onShow: function() {
        this.setData({
            lucky_int: this.getrand(1, 16)
        }), e && e.show().catch(function(e) {
            console.error(e);
        });
    },
    chicktou: function(e) {

        // 在适合的场景显示插屏广告
if (interstitialAd) {
    interstitialAd.show().catch((err) => {
      console.error(err)
    })
  }

        this.bindbackmusic();
        var a = "datou[" + e.currentTarget.dataset.cid + "]";
        this.setData(function(e, n, a) {
            return n in e ? Object.defineProperty(e, n, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = a, e;
        }({}, a, "/pages/img/wu.png")), e.currentTarget.dataset.cid == this.data.lucky_int && (n.src = "http://touzi.115xy.com/he.mp3", 
        n.loop = !1, this.setData({
            hejiu: !0
        }));
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: "更多好玩喝酒小工具，喝酒大哥",
            path: "/pages/dage/dage",
            imageUrl: "/pages/img/fximages.jpg"
        };
    },
    onShareTimeline: function(e) {
        return {
            title: "更多好玩喝酒小工具，喝酒大哥",
            query: "/pages/dage/dage"
        };
    }
});