(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/main" ], {
    "1d79": function(e, n, t) {
        var o = t("40ad");
        t.n(o).a;
    },
    "1f6f": function(e, n, t) {
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function o(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    n && (o = o.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable;
                    })), t.push.apply(t, o);
                }
                return t;
            }
            function r(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e;
            }
            t("3b4f");
            var u = n(t("66fd")), c = n(t("60ba"));
            u.default.config.productionTip = !1, c.default.mpType = "app", e(new u.default(function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? o(Object(t), !0).forEach(function(n) {
                        r(e, n, t[n]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                    });
                }
                return e;
            }({}, c.default))).$mount();
        }).call(this, t("543d").createApp);
    },
    "40ad": function(e, n, t) {},
    "60ba": function(e, n, t) {
        t.r(n);
        var o = t("a9fe");
        for (var r in o) "default" !== r && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(r);
        t("1d79");
        var u = t("f0c5"), c = Object(u.a)(o.default, void 0, void 0, !1, null, null, null, !1, void 0, void 0);
        n.default = c.exports;
    },
    "9d4b": function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = {
            onLaunch: function() {
                console.log("App Launch");
            },
            onShow: function() {
                console.log("App Show");
            },
            onHide: function() {
                console.log("App Hide");
            }
        };
        n.default = o;
    },
    a9fe: function(e, n, t) {
        t.r(n);
        var o = t("9d4b"), r = t.n(o);
        for (var u in o) "default" !== u && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(u);
        n.default = r.a;
    }
}, [ [ "1f6f", "common/runtime", "common/vendor" ] ] ]);