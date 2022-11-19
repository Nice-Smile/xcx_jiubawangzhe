(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/index" ], {
    "4ea0": function(n, t, e) {
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var e = {
                data: function() {
                    return {
                        title: "Hello"
                    };
                },
                onShareAppMessage: function() {
                    return {
                        title: "这垃圾人生一秒也不想呆了！"
                    };
                },
                onShareTimeline: function() {
                    return {
                        title: "这垃圾人生一秒也不想呆了！"
                    };
                },
                methods: {
                    start: function() {
                        n.navigateTo({
                            url: "../select/select"
                        });
                    }
                }
            };
            t.default = e;
        }).call(this, e("543d").default);
    },
    "59ff": function(n, t, e) {},
    "9a14": function(n, t, e) {
        e.r(t);
        var u = e("4ea0"), a = e.n(u);
        for (var f in u) "default" !== f && function(n) {
            e.d(t, n, function() {
                return u[n];
            });
        }(f);
        t.default = a.a;
    },
    c35c: function(n, t, e) {
        var u = e("59ff");
        e.n(u).a;
    },
    d2ca: function(n, t, e) {
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("3b4f"), t(e("66fd")), n(t(e("f4d0")).default);
        }).call(this, e("543d").createPage);
    },
    e233: function(n, t, e) {
        e.d(t, "b", function() {
            return u;
        }), e.d(t, "c", function() {
            return a;
        }), e.d(t, "a", function() {});
        var u = function() {
            this.$createElement, this._self._c;
        }, a = [];
    },
    f4d0: function(n, t, e) {
        e.r(t);
        var u = e("e233"), a = e("9a14");
        for (var f in a) "default" !== f && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(f);
        e("c35c");
        var c = e("f0c5"), o = Object(c.a)(a.default, u.b, u.c, !1, null, null, null, !1, u.a, void 0);
        t.default = o.exports;
    }
}, [ [ "d2ca", "common/runtime", "common/vendor" ] ] ]);