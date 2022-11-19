// 在页面中定义插屏广告
let interstitialAd = null

!function() {
    function n(n, a, t) {
        return a in n ? Object.defineProperty(n, a, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : n[a] = t, n;
    }
    var a, t = null, e = getApp();
    Page((n(a = {
        data: {
            nvabarData: {
                showCapsule: 1,
                title: "大转盘"
            },
            isEnd: !1,
            bian: !0,
            animation: "",
            awardsList: {},
            animationData: {},
            btnDisabled: !1,
            interval: 0,
            userInfo: null,
            showConten: "幸运轮盘",
            isShowContent: !1
        },
        onLoad: function() {
           // 在页面onLoad回调事件中创建插屏广告实例
if (wx.createInterstitialAd) {
    interstitialAd = wx.createInterstitialAd({
     // adUnitId: 'yanjiahao'
    })
    interstitialAd.onLoad(() => {})
    interstitialAd.onError((err) => {})
    interstitialAd.onClose(() => {})
  }
  
        },
        onShow: function() {
            t && t.show().catch(function(n) {
                console.error(n);
            });
        },
        rotateAni: function(n) {
            console.log("rotate==" + n), this.animation.rotate(120 * n).step(), this.setData({
                animation: this.animation.export()
            });
        }
    }, "onLoad", function() {}), n(a, "audioPlay", function() {
        var n = this;
        e.AppMusic.play(), e.AppMusic.onPlay(function() {
            n.setData({
                bian: !0
            });
        });
    }), n(a, "audioPause", function() {
        var n = this;
        e.AppMusic.pause(), e.AppMusic.onPause(function() {
            n.setData({
                bian: !1
            });
        });
    }), n(a, "onShareAppMessage", function(n) {
        return {
            title: "幸运大转盘，不一样的喝酒方式！，",
            path: "pages/lunpan/lunpan",
            success: function(n) {},
            fail: function(n) {}
        };
    }), n(a, "onShareTimeline", function(n) {
        return {
            title: "更多好玩喝酒小工具，幸运轮盘",
            query: "/pages/lunpan/lunpan"
        };
    }), n(a, "getLottery", function() {

// 在适合的场景显示插屏广告
if (interstitialAd) {
    interstitialAd.show().catch((err) => {
      console.error(err)
    })
  }

        var n = this;
        if (!this.data.btnDisabled) {
            this.start_music(), this.setData({
                btnDisabled: !0,
                isEnd: !1
            });
            var a = this, t = 9 * Math.random() >>> 0, i = e.awardsConfig;
            t < 2 && (i.chance = !1), console.log(t), e.runDegs = e.runDegs || 0, console.log("deg", e.runDegs), 
            e.runDegs = e.runDegs + (360 - e.runDegs % 360) + (2880 - 40 * t), console.log("deg", e.runDegs);
            var o = wx.createAnimation({
                duration: 8e3,
                timingFunction: "ease"
            });
            a.animationRun = o, o.rotate(e.runDegs).step(), a.setData({
                animationData: o.export()
            });
            var s = wx.getStorageSync("winAwards") || {
                data: []
            };
            s.data.push(i.awards[t].name), wx.setStorageSync("winAwards", s), setTimeout(function() {
                a.setData({
                    showConten: i.awards[t].name
                }), a.setData({
                    btnDisabled: !1,
                    isEnd: !0
                }), n.end_music();
            }, 8e3);
        }
    }), n(a, "end_music", function() {
        var n = wx.createInnerAudioContext();
        n.src = "/pages/video/stop.mp3", n.autoplay = !0, n.play();
    }), n(a, "start_music", function() {
        var n = wx.createInnerAudioContext();
        n.src = "/pages/video/zhuan.mp3", n.autoplay = !0, n.play();
    }), n(a, "onReady", function(n) {
        e.awardsConfig = {
            chance: !0,
            awards: [ {
                index: 0,
                name: "自己喝"
            }, {
                index: 1,
                name: "不喝"
            }, {
                index: 2,
                name: "喝半杯"
            }, {
                index: 3,
                name: "左边喝"
            }, {
                index: 4,
                name: "右边喝"
            }, {
                index: 5,
                name: "喝两杯"
            }, {
                index: 6,
                name: "听指挥"
            }, {
                index: 7,
                name: "不喝"
            }, {
                index: 8,
                name: "随便喝"
            } ]
        };
        for (var a = e.awardsConfig.awards, t = a.length, i = 360 / t / 2 + 90, o = [], s = 1 / t, r = wx.createContext(), u = 0; u < t; u++) r.save(), 
        r.beginPath(), r.translate(150, 150), r.moveTo(0, 0), r.rotate((360 / t * u - i) * Math.PI / 180), 
        r.arc(0, 0, 150, 0, 2 * Math.PI / t, !1), u % 2 == 0 ? r.setFillStyle("rgba(255,184,32,.1)") : r.setFillStyle("rgba(255,203,63,.1)"), 
        r.fill(), r.setLineWidth(.5), r.setStrokeStyle("rgba(228,55,14,.1)"), r.stroke(), 
        r.restore(), o.push({
            turn: u * s + "turn",
            lineTurn: u * s + s / 2 + "turn",
            award: a[u].name
        });
        this.setData({
            awardsList: o
        });
    }), a));
}();