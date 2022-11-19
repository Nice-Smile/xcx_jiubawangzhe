(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/select/select" ], {
    3851: function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("3b4f"), t(n("66fd")), e(t(n("d89f")).default);
        }).call(this, n("543d").createPage);
    },
    "8d5d": function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("69ae")), o = n("1276"), a = {
                data: function() {
                    return {
                        select: [],
                        isSelect: !1,
                        handSelect: [],
                        gradeColor: [ "zero", "one", "two", "three" ],
                        shareAd: [ "观看视频", "分享好友" ],
                        shareNum: 1,
                        isShow: !1,
                        shareTips: [ "分享失败，请您换个群重试", "注意！分享到不同的群", "分享失败，请分享到群里", "该群已分享过" ]
                    };
                },
                onLoad: function() {},
                onShow: function() {
                    this.isShow && (this.isShow = !1, (0, o.fullClose)(0, 10) < 5 ? e.showToast({
                        icon: "none",
                        title: this.shareTips[(0, o.fullClose)(0, 3)]
                    }) : (e.showToast({
                        icon: "none",
                        title: "分享成功！"
                    }), this.drawCard()));
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
                    drawCard: function() {
                        this.select = [];
                        for (var e = [], t = 0; t < 100; t++) {
                            var n = i.default["".concat(1e3 + (0, o.fullClose)(1, 131))], a = "";
                            n.exclusive && (a = n.exclusive.join(","));
                            for (var l = !0, c = 0; c < e.length; c++) (n.id == e[c].id || a.indexOf(n.id) > -1) && (l = !1);
                            if (l && (n.select = !1, e.push(n), e.length >= 10)) break;
                        }
                        this.select = e, this.isSelect = !0;
                    },
                    selectChange: function(e) {
                        var t = this.select;
                        if (t[e].select) {
                            t[e].select = !1;
                            for (var n = 0; n < this.handSelect.length; n++) this.handSelect[n] == t[e].id && this.handSelect.splice(n, 1);
                        } else this.handSelect.length < 3 && (this.handSelect.push(t[e].id), t[e].select = !0);
                        this.select = [], this.select = t;
                    },
                    jump: function() {
                        this.handSelect.length < 3 ? e.showToast({
                            icon: "none",
                            title: "请选择天赋"
                        }) : e.navigateTo({
                            url: "../attributes/attributes?select=".concat(this.handSelect.join(","))
                        });
                    }
                }
            };
            t.default = a;
        }).call(this, n("543d").default);
    },
    c2ff: function(e, t, n) {
        n.d(t, "b", function() {
            return i;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
        var i = function() {
            this.$createElement, this._self._c;
        }, o = [];
    },
    d89f: function(e, t, n) {
        n.r(t);
        var i = n("c2ff"), o = n("fc29");
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        n("d9a6");
        var l = n("f0c5"), c = Object(l.a)(o.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        t.default = c.exports;
    },
    d9a6: function(e, t, n) {
        var i = n("e2dd");
        n.n(i).a;
    },
    e2dd: function(e, t, n) {},
    fc29: function(e, t, n) {
        n.r(t);
        var i = n("8d5d"), o = n.n(i);
        for (var a in i) "default" !== a && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(a);
        t.default = o.a;
    }
}, [ [ "3851", "common/runtime", "common/vendor" ] ] ]);