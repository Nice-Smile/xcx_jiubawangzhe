// 在页面中定义插屏广告
let interstitialAd = null
!function() {
    getApp();
    var t = null, a = wx.createInnerAudioContext();
    Page({
        data: {
            wxchar: !1,
            tianjia: !0,
            moli: 0,
            ymoli: 0,
            molick: 0,
            riqi: null,
            guan: !0,
            x: 100,
            y: 400,
            yaoyiyao: {},
            touzigeshu: 5,
            dicePoints: [ 1, 1, 1, 1, 1, 1 ],
            diceTypes: [ 1, 1, 1, 1, 1, 1 ],
            diceSrcs: [ "", "", "", "", "", "" ],
            diceStyles: [ "", "", "", "", "", "" ],
            rule: 0,
            suourl: "/pages/img/suo.png",
            issuo: 1,
            gaizi: "pages/img/gaizhi1.png",
            gaidi: "http://touzi.115xy.com/shaizi/toudi1.png",
            shaizi: [ "", "", "", "", "", "" ],
            shaiziweizhi: [ "", "", "", "", "", "" ],
            showMore: !1,
            swiperCurrent: 0,
            indicatorDots: !1,
            autoplay: !0,
            interval: 1e4,
            duration: 800,
            circular: !1
        },
        suo: function() {
            this.data.issuo ? this.suogai() : this.kaigai();
        },
        lingqu: function() {
            wx.setStorageSync("shu", Math.ceil(6 * Math.random())), this.setData({
                molick: 1
            });
        },
        wxcharguan: function() {
            this.setData({
                wxchar: !1
            });
        },
        wxchar: function() {
            this.setData({
                wxchar: !0
            });
        },
        gbtj: function() {
            this.setData({
                tianjia: !1
            }), wx.setStorageSync("tianjia", "false");
        },
        buling: function() {
            this.setData({
                molick: 0
            });
        },
        gameplay: function() {
            wx.navigateTo({
                url: "/pages/gameplay/gameplay"
            });
        },
        kaigai: function() {
            this.setData({
                suourl: "/pages/img/suo.png",
                issuo: !0
            });
        },
        suogai: function() {
            this.setData({
                suourl: "/pages/img/suozong.png",
                issuo: !1
            });
        },
        shezhi: function() {
            wx.reLaunch({
                url: "/pages/shezhi/shezhi"
            });
        },
        other: function() {
            wx.navigateTo({
                url: "/pages/other/other"
            });
        },
        bindbackmusic: function() {
            (a = wx.createInnerAudioContext()).autoplay = !0, a.loop = !1, a.src = "/pages/video/touzhi.mp3", 
            a.onPlay(function() {
                console.log("开始");
            }), a.onError(function(t) {
                console.log(t.errMsg), console.log(t.errCode);
            });
        },
        bofangdonghua: function() {
            var t = wx.createAnimation({
                duration: 70
            });
            t.translate(15, -15).step().translate(-15, 15).step().translate(15, -15).step().translate(-15, 15).step().translate(15, -15).step().translate(-15, 15).step().translate(15, -15).step().translate(-15, 15).step().translate(0).step(), 
            this.setData({
                yaoyiyao: t.export(),
                x: 100,
                y: 400
            });
        },
        yao: function() {

// 在适合的场景显示插屏广告
if (interstitialAd) {
    interstitialAd.show().catch((err) => {
      console.error(err)
    })
  }

            this.bindbackmusic(), this.bofangdonghua(), this.suogai(), this.shengchan();
            var t = this;
            setTimeout(function() {
                t.kaigai();
            }, 800);
        },
        symoli: function() {
            for (var t = [], a = [], e = [], i = [], o = 0; o < this.data.touzigeshu; o++) {
                if (o <= 2) t[o] = wx.getStorageSync("shu"); else if (3 == o) {
                    for (n = 0; n < 2; n++) t[o] = wx.getStorageSync("shu");
                    t[o] = 1;
                } else if (4 == o) {
                    for (n = 0; n < 2; n++) t[o] = wx.getStorageSync("shu");
                    t[o] = Math.ceil(6 * Math.random());
                } else if (5 == o) {
                    for (var n = 0; n < 3; n++) t[o] = wx.getStorageSync("shu");
                    t[o] = Math.ceil(6 * Math.random());
                }
                a[o] = Math.ceil(8 * Math.random()), i[o] = "/pages/img/touzi/touzi" + t[o] + "-" + a[o] + ".png", 
                a[o], e[o] = "display:inline;";
            }
            for (o = 0; o < 6 - this.data.touzigeshu; o++) {
                var s = Math.floor(Math.random() * (i.length + 1));
                i.splice(s, 0, ""), e.splice(s, 0, "display:none;");
            }
            this.setData({
                shaiziweizhi: e,
                shaizi: i
            });
        },
        shengchan: function() {
            for (var t = [], a = [], e = [], i = [], o = 0; o < this.data.touzigeshu; o++) t[o] = Math.ceil(6 * Math.random()), 
            a[o] = Math.ceil(8 * Math.random()), i[o] = "/pages/img/touzi/touzi" + t[o] + "-" + a[o] + ".png", 
            a[o], e[o] = "display:inline;";
            for (o = 0; o < 6 - this.data.touzigeshu; o++) {
                var n = Math.floor(Math.random() * (i.length + 1));
                i.splice(n, 0, ""), e.splice(n, 0, "display:none;");
            }
            this.setData({
                shaiziweizhi: e,
                shaizi: i
            });
        },
        openVideoAd: function() {
            console.log("打开激励视频"), wx.getStorageSync("ismldate") > 2 ? wx.showToast({
                title: "今日已达到上限",
                icon: "none",
                duration: 3e3
            }) : (t && t.show().catch(function() {
                t.load().then(function() {
                    return t.show();
                }).catch(function(t) {
                    console.log("激励视频 广告显示失败");
                });
            }), wx.setStorageSync("ismldate", wx.getStorageSync("ismldate") + 1));
        },
        shiyong: function() {
            if (0 == wx.getStorageSync("moli")) wx.showToast({
                title: "您还未获得魔力噢！",
                icon: "none",
                duration: 3e3
            }); else {
                this.bindbackmusic(), this.bofangdonghua(), this.suogai(), this.symoli(), this.buling();
                var t = this;
                setTimeout(function() {
                    t.kaigai();
                }, 800), wx.showToast({
                    title: "使用魔力成功！打开查看！",
                    icon: "none",
                    duration: 2500
                }), wx.setStorageSync("moli", wx.getStorageSync("moli") - 1);
                var a = wx.getStorageSync("moli");
                console.log(a), this.setData({
                    moli: a
                });
            }
        },
        onLoad: function() {

// 在页面onLoad回调事件中创建插屏广告实例
if (wx.createInterstitialAd) {
    interstitialAd = wx.createInterstitialAd({
      //adUnitId: 'yanjiahao'
    })
    interstitialAd.onLoad(() => {})
    interstitialAd.onError((err) => {})
    interstitialAd.onClose(() => {})
  }
  

            var a = this, e = Date.parse(new Date()), i = 43200 + (e /= 1e3), o = wx.getStorageSync("mldate");
            if (o ? o < e && (wx.setStorageSync("mldate", i), wx.setStorageSync("ismldate", 0)) : (wx.setStorageSync("mldate", i), 
            wx.setStorageSync("ismldate", 0)), wx.getStorageSync("moli")) {
                var n = wx.getStorageSync("moli");
                console.log(n), this.setData({
                    moli: n
                });
            } else wx.setStorageSync("moli", 0);
            if (wx.getStorageSync("tianjia")) {
                var s = wx.getStorageSync("tianjia");
                console.log(s), this.setData({
                    tianjia: s
                });
            } else wx.setStorageSync("tianjia", "true");
            wx.createRewardedVideoAd && ((t = wx.createRewardedVideoAd({})).onError(function(t) {}), 
            t.onClose(function(t) {
                if (t && t.isEnded || void 0 === t) {
                    wx.showToast({
                        title: "成功获得魔力，马上去使用吧！",
                        icon: "none",
                        duration: 3e3
                    }), wx.setStorageSync("moli", wx.getStorageSync("moli") + 1);
                    var e = wx.getStorageSync("moli");
                    console.log(e), a.setData({
                        moli: e
                    });
                } else wx.showToast({
                    title: "视频中断，获取魔力失败！",
                    icon: "none",
                    duration: 3e3
                });
            }));
            var r = wx.getStorageSync("touzigeshu");
            r && this.setData({
                touzigeshu: r
            });
        },
        onShareAppMessage: function() {
            return {
                title: "KTV，酒吧，聚会喝酒神器摇骰子",
                path: "/pages/index/index",
                imageUrl: "/pages/img/fximages.jpg"
            };
        },
        onShareTimeline: function(t) {
            return {
                title: "喝酒神器摇骰子",
                query: "/page/index/index"
            };
        }
    });
}();