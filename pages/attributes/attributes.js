(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/attributes/attributes" ], {
    "11e7": function(t, n, e) {
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("3b4f"), n(e("66fd")), t(n(e("e04c")).default);
        }).call(this, e("543d").createPage);
    },
    "32c8": function(t, n, e) {
        var i = e("af26");
        e.n(i).a;
    },
    "5b41": function(t, n, e) {
        e.d(n, "b", function() {
            return i;
        }), e.d(n, "c", function() {
            return a;
        }), e.d(n, "a", function() {});
        var i = function() {
            this.$createElement, this._self._c;
        }, a = [];
    },
    "951e": function(t, n, e) {
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var i = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(e("69ae")), a = e("1276"), u = {
                data: function() {
                    return {
                        attNum: 20,
                        CHR: 0,
                        INT: 0,
                        STR: 0,
                        MNY: 0,
                        items: [ {
                            name: "颜值",
                            num: 0
                        }, {
                            name: "智力",
                            num: 0
                        }, {
                            name: "体质",
                            num: 0
                        }, {
                            name: "家境",
                            num: 0
                        } ],
                        data: [],
                        TLT: [],
                        shareAd: [ "观看视频", "分享好友" ],
                        shareNum: 1,
                        isShow: !1,
                        isAdd: !1,
                        shareTips: [ "分享失败，请您换个群重试", "注意！分享到不同的群", "分享失败，请分享到群里", "该群已分享过" ]
                    };
                },
                onShow: function() {
                    this.isShow && (this.isShow = !1, (0, a.fullClose)(0, 10) < 5 ? t.showToast({
                        icon: "none",
                        title: this.shareTips[(0, a.fullClose)(0, 3)]
                    }) : (t.showToast({
                        icon: "none",
                        title: "分享成功！"
                    }), this.isAdd ? t.showToast({
                        icon: "none",
                        title: "已获得，下次再来吧"
                    }) : (this.attNum += 10, this.isAdd = !0)));
                },
                onLoad: function(t) {
                    this.init(t.select), this.TLT = t.select;
                },
                onShareAppMessage: function() {
                    return this.isShow = !0, {
                        title: "这垃圾人生一秒也不想呆了！",
                        path: "/pages/index/index"
                    };
                },
                onShareTimeline: function() {
                    return {
                        title: "这垃圾人生一秒也不想呆了！",
                        path: "/pages/index/index"
                    };
                },
                methods: {
                    init: function(t) {
                        var n = this, e = [];
                        t.split(",").map(function(t) {
                            var a = i.default[t];
                            a.status && (n.attNum += a.status), e.push(a);
                        }), this.data = e;
                    },
                    start: function() {
                        t.navigateTo({
                            url: "../game/game?CHR=".concat(this.items[0].num, "&INT=").concat(this.items[1].num, "&STR=").concat(this.items[2].num, "&MNY=").concat(this.items[3].num, "&TLT=").concat(this.TLT, "&SPR=5")
                        });
                    },
                    reduce: function(t) {
                        this.items[t].num > 0 && (this.items[t].num -= 1, this.attNum += 1);
                    },
                    add: function(t) {
                        this.attNum > 0 && (this.items[t].num += 1, this.attNum -= 1);
                    }
                }
            };
            n.default = u;
        }).call(this, e("543d").default);
    },
    af26: function(t, n, e) {},
    bc6b: function(t, n, e) {
        e.r(n);
        var i = e("951e"), a = e.n(i);
        for (var u in i) "default" !== u && function(t) {
            e.d(n, t, function() {
                return i[t];
            });
        }(u);
        n.default = a.a;
    },
    e04c: function(t, n, e) {
        e.r(n);
        var i = e("5b41"), a = e("bc6b");
        for (var u in a) "default" !== u && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(u);
        e("32c8");
        var s = e("f0c5"), o = Object(s.a)(a.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        n.default = o.exports;
    }
}, [ [ "11e7", "common/runtime", "common/vendor" ] ] ]);