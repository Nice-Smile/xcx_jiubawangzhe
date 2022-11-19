!function() {
    getApp();
    var t = wx.createInnerAudioContext();
    Page({
        data: {
            hideMenu: !0,
            back_top: 26,
            back_height: 30,
            spNum: 1,
            spColor: "#fff",
            spInterval: 50,
            colorNum: 6,
            videoNum: 0,
            controlNum: 2
        },
        onLoad: function(t) {
            wx.setScreenBrightness({
                value: 1
            });
        },
        onBackTap: function() {
            t.stop(), wx.reLaunch({
                url: "/pages/other/other"
            });
        },
        onReady: function() {
            this.audioCtx = wx.createAudioContext('music');
            this.audioCtx.play();
        },
        onShow: function() {
            this.stopSP(), wx.setScreenBrightness({
                value: 1
            }), this.startSP();
        },
        onHide: function() {
            wx.setScreenBrightness({
                value: .5
            });
        },
        onUnload: function() {
            this.stopSP(), this.stopSP();
        },
        startSP: function() {
            var t = this, a = [ "#ff0000", "#FF8000", "#00FFFF", "#FFFF00", "#00FF00", "#0000FF", "8000FF" ], e = [ "#000", "#fff" ];
            2 == this.data.colorNum ? t.data.setInter = setInterval(function() {
                var a = t.data.spNum + 1, n = e[t.data.spNum % t.data.colorNum];
                t.setData({
                    spNum: a,
                    spColor: n
                });
            }, t.data.spInterval) : t.data.setInter = setInterval(function() {
                var e = t.data.spNum + 1, n = a[t.data.spNum % t.data.colorNum];
                t.setData({
                    spNum: e,
                    spColor: n
                });
            }, t.data.spInterval);
        },
        stopSP: function() {
            clearInterval(this.data.setInter);
        },
        modelMenu: function() {
            var t = !this.data.hideMenu;
            this.setData({
                hideMenu: t
            }), console.log(t);
        },
        onColor: function() {
            var t = this.data.colorNum - 2, a = this;
            a.stopSP(), t <= 0 ? a.setData({
                colorNum: 6
            }) : a.setData({
                colorNum: t
            }), a.startSP();
        },
        onReset: function() {
            this.stopSP(), this.setData({
                spInterval: 50
            }), this.startSP();
        },
        onKuai: function() {
            var t = this.data.spInterval + 50;
            this.stopSP(), t <= 300 ? this.setData({
                spInterval: t
            }) : this.setData({
                spInterval: 50
            }), this.startSP();
        },
        onBack: function() {
            wx.navigateBack({
                changed: !0
            });
        },
        onYinyue: function() {
            var a = this.data.videoNum + 1;
            this.setData({
                videoNum: a,
            }), 7 == a && (t.stop(), this.setData({
                videoNum: 0
            })), t.autoplay = !0, t.src = "http://gongju.115xy.com/" + a + ".mp3", t.play(),this.audioCtx.pause();;
        },
        onShareAppMessage: function() {
            return {
                title: "更多好玩喝酒小工具，酒吧灯光",
                path: "/pages/dage/dage",
                imageUrl: "/pages/img/fximages.jpg"
            };
        },
        onShareTimeline: function(t) {
            return {
                title: "更多好玩喝酒小工具，酒吧灯光",
                query: "/pages/dage/dage"
            };
        }
    });
}();