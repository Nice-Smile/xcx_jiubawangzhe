require("../../@babel/runtime/helpers/Arrayincludes"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/game/game" ], {
    1045: function(e, t, n) {
        var r = n("396a");
        n.n(r).a;
    },
    "396a": function(e, t, n) {},
    "45a8": function(e, t, n) {
        (function(e) {
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function a(e, t) {
                var n;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = c(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0, a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                };
                            },
                            e: function(e) {
                                throw e;
                            },
                            f: a
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var i, u = !0, f = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]();
                    },
                    n: function() {
                        var e = n.next();
                        return u = e.done, e;
                    },
                    e: function(e) {
                        f = !0, i = e;
                    },
                    f: function() {
                        try {
                            u || null == n.return || n.return();
                        } finally {
                            if (f) throw i;
                        }
                    }
                };
            }
            function c(e, t) {
                if (e) {
                    if ("string" == typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0;
                }
            }
            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function u(e, t, n, r, a, c, i) {
                try {
                    var u = e[c](i), f = u.value;
                } catch (e) {
                    return void n(e);
                }
                u.done ? t(f) : Promise.resolve(f).then(r, a);
            }
            function f(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, a) {
                        function c(e) {
                            u(f, r, a, c, i, "next", e);
                        }
                        function i(e) {
                            u(f, r, a, c, i, "throw", e);
                        }
                        var f = e.apply(t, n);
                        c(void 0);
                    });
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n("a34a")), s = r(n("b594")), l = r(n("075d")), d = r(n("69ae")), T = n("1276"), h = {
                data: function() {
                    return {
                        DEFAULT_PROP: {
                            CHR: 0,
                            INT: 0,
                            MNY: 0,
                            STR: 0,
                            AGE: 0,
                            SPR: 0,
                            EVT: [],
                            TLT: []
                        },
                        dec: [],
                        nextID: "",
                        isDie: !1,
                        TLTData: []
                    };
                },
                onShareAppMessage: function() {
                    return {
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
                onLoad: function(e) {
                    var t = this;
                    this.DEFAULT_PROP.CHR = Number(e.CHR), this.DEFAULT_PROP.INT = Number(e.INT), this.DEFAULT_PROP.MNY = Number(e.MNY), 
                    this.DEFAULT_PROP.STR = Number(e.STR), this.DEFAULT_PROP.SPR = Number(e.SPR), this.DEFAULT_PROP.TLT = e.TLT.split(",");
                    var n = this;
                    e.TLT.split(",").map(function(e) {
                        var r = d.default[e];
                        !r.condition && r.effect && (r.effect.CHR && (n.DEFAULT_PROP.CHR += r.effect.CHR), 
                        r.effect.INT && (n.DEFAULT_PROP.INT += r.effect.INT), r.effect.MNY && (n.DEFAULT_PROP.MNY += r.effect.MNY), 
                        r.effect.STR && (n.DEFAULT_PROP.STR += r.effect.STR), r.effect.SPR && (n.DEFAULT_PROP.SPR += r.effect.SPR)), 
                        t.TLTData.push(d.default[e]);
                    }), this.next();
                },
                methods: {
                    next: function() {
                        var t = this;
                        return f(o.default.mark(function n() {
                            var r, a, c, i, u;
                            return o.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    if (!t.isDie) {
                                        n.next = 2;
                                        break;
                                    }
                                    return n.abrupt("return");

                                  case 2:
                                    return n.next = 4, t.getEvent();

                                  case 4:
                                    if (1 != (r = n.sent).NoRandom) {
                                        n.next = 8;
                                        break;
                                    }
                                    return t.next(), n.abrupt("return");

                                  case 8:
                                    if (!r.include) {
                                        n.next = 12;
                                        break;
                                    }
                                    if (t.check(r.include)) {
                                        n.next = 12;
                                        break;
                                    }
                                    return t.next(), n.abrupt("return");

                                  case 12:
                                    if (!r.exclude) {
                                        n.next = 16;
                                        break;
                                    }
                                    if (!t.check(r.exclude)) {
                                        n.next = 16;
                                        break;
                                    }
                                    return t.next(), n.abrupt("return");

                                  case 16:
                                    r.effect && (r.effect.CHR && (t.DEFAULT_PROP.CHR += r.effect.CHR), r.effect.INT && (t.DEFAULT_PROP.INT += r.effect.INT), 
                                    r.effect.MNY && (t.DEFAULT_PROP.MNY += r.effect.MNY), r.effect.STR && (t.DEFAULT_PROP.STR += r.effect.STR), 
                                    r.effect.SPR && (t.DEFAULT_PROP.SPR += r.effect.SPR)), r.TLT = [], a = 0;

                                  case 19:
                                    if (!(a < t.TLTData.length)) {
                                        n.next = 31;
                                        break;
                                    }
                                    if (!(c = t.TLTData[a]).condition) {
                                        n.next = 28;
                                        break;
                                    }
                                    if (t.check(c.condition) && c.effect && (c.effect.CHR && (t.DEFAULT_PROP.CHR += c.effect.CHR), 
                                    c.effect.INT && (t.DEFAULT_PROP.INT += c.effect.INT), c.effect.MNY && (t.DEFAULT_PROP.MNY += c.effect.MNY), 
                                    c.effect.STR && (t.DEFAULT_PROP.STR += c.effect.STR), c.effect.SPR && (t.DEFAULT_PROP.SPR += c.effect.SPR), 
                                    r.TLT.push({
                                        name: c.name,
                                        description: c.description
                                    }), 6 == c.condition.length && c.condition.indexOf(">") > -1 && (t.TLTData[a].condition = null)), 
                                    !c.condition || !t.check(c.condition) || c.effect) {
                                        n.next = 28;
                                        break;
                                    }
                                    return t.DEFAULT_PROP.AGE += 1, t.dec.push({
                                        TLT: [ {
                                            name: c.name,
                                            description: c.description
                                        } ]
                                    }), setTimeout(function() {
                                        e.pageScrollTo({
                                            scrollTop: 1e6,
                                            duration: 100
                                        });
                                    }, 100), n.abrupt("return");

                                  case 28:
                                    a++, n.next = 19;
                                    break;

                                  case 31:
                                    i = null, r.branch && (u = r.branch[0].split(":"), t.check(u[0]) && (i = l.default[u[1]], 
                                    "10000" == u[1] && (t.isDie = !0, e.showModal({
                                        title: "提示",
                                        content: r.event
                                    })))), r.branch = i, t.dec.push(r), t.DEFAULT_PROP.EVT.push(r.id), t.DEFAULT_PROP.AGE += 1, 
                                    setTimeout(function() {
                                        e.pageScrollTo({
                                            scrollTop: 1e8,
                                            duration: 100
                                        });
                                    }, 100);

                                  case 38:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    getEvent: function() {
                        var e = this;
                        return f(o.default.mark(function t() {
                            var n;
                            return o.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return n = e, t.abrupt("return", new Promise(function(e, t) {
                                        var r = s.default[n.DEFAULT_PROP.AGE].event, a = (0, T.fullClose)(0, r.length - 1), c = String(r[a]), i = c;
                                        c.indexOf("*") > -1 && (i = c.split("*")[0]), e(l.default[i]);
                                    }));

                                  case 2:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    summarize: function() {
                        e.navigateTo({
                            url: "../summarize/summarize?AGE=".concat(this.DEFAULT_PROP.AGE, "&CHR=").concat(this.DEFAULT_PROP.CHR, "&INT=").concat(this.DEFAULT_PROP.INT, "&MNY=").concat(this.DEFAULT_PROP.MNY, "&SPR=").concat(this.DEFAULT_PROP.SPR, "&STR=").concat(this.DEFAULT_PROP.STR)
                        });
                    },
                    getProp: function(e) {
                        switch (e) {
                          case "CHR":
                          case "INT":
                          case "STR":
                          case "MNY":
                          case "SPR":
                          case "LIF":
                          case "TLT":
                            return this.DEFAULT_PROP[e];

                          case "AGE":
                          case "EVT":
                            return this.DEFAULT_PROP[e];

                          default:
                            return null;
                        }
                    },
                    check: function(e) {
                        var t = this.parseCondition(e);
                        return this.checkParsedCondition(t);
                    },
                    checkParsedCondition: function(e) {
                        if (!Array.isArray(e)) return this.checkLogic(e);
                        if (0 == e.length) return !0;
                        if (1 == e.length) return this.checkParsedCondition(e[0]);
                        for (var t = this.checkParsedCondition(e[0]), n = 1; n < e.length; n += 2) switch (e[n]) {
                          case "&":
                            t && (t = this.checkParsedCondition(e[n + 1]));
                            break;

                          case "|":
                            if (t) return !0;
                            t = this.checkParsedCondition(e[n + 1]);
                            break;

                          default:
                            return !1;
                        }
                        return t;
                    },
                    checkLogic: function(e) {
                        var t = e.length, n = e.search(/[><\!\?=]/), r = e.substring(0, n), c = e.substring(n, n += "=" == e[n + 1] ? 2 : 1), i = e.substring(n, t), u = this.getProp(r), f = "[" == i[0] ? JSON.parse(i) : Number(i);
                        switch (c) {
                          case ">":
                            return u > f;

                          case "<":
                            return u < f;

                          case ">=":
                            return u >= f;

                          case "<=":
                            return u <= f;

                          case "=":
                            return Array.isArray(u) ? u.includes(f) : u == f;

                          case "!=":
                            return Array.isArray(u) ? !u.includes(f) : u == f;

                          case "?":
                            if (Array.isArray(u)) {
                                var o, s = a(u);
                                try {
                                    for (s.s(); !(o = s.n()).done; ) {
                                        var l = o.value;
                                        if (f.includes(Number(l))) return !0;
                                    }
                                } catch (e) {
                                    s.e(e);
                                } finally {
                                    s.f();
                                }
                                return !1;
                            }
                            return f.includes(u);

                          case "!":
                            if (Array.isArray(u)) {
                                var d, T = a(u);
                                try {
                                    for (T.s(); !(d = T.n()).done; ) {
                                        var h = d.value;
                                        if (f.includes(Number(h))) return !1;
                                    }
                                } catch (e) {
                                    T.e(e);
                                } finally {
                                    T.f();
                                }
                                return !0;
                            }
                            return !f.includes(u);

                          default:
                            return !1;
                        }
                    },
                    parseCondition: function(e) {
                        var t = [], n = e.length, r = [];
                        r.unshift(t);
                        for (var a = 0, c = function(t) {
                            var n = e.substring(a, t).trim();
                            a = t, n && r[0].push(n);
                        }, i = 0; i < n; i++) switch (e[i]) {
                          case " ":
                            continue;

                          case "(":
                            c(i), a++;
                            var u = [];
                            r[0].push(u), r.unshift(u);
                            break;

                          case ")":
                            c(i), a++, r.shift();
                            break;

                          case "|":
                          case "&":
                            c(i), c(i + 1);
                            break;

                          default:
                            continue;
                        }
                        return c(n), t;
                    }
                }
            };
            t.default = h;
        }).call(this, n("543d").default);
    },
    "462c": function(e, t, n) {
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {});
        var r = function() {
            this.$createElement, this._self._c;
        }, a = [];
    },
    "636d": function(e, t, n) {
        n.r(t);
        var r = n("45a8"), a = n.n(r);
        for (var c in r) "default" !== c && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(c);
        t.default = a.a;
    },
    eafd: function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("3b4f"), t(n("66fd")), e(t(n("ecc5")).default);
        }).call(this, n("543d").createPage);
    },
    ecc5: function(e, t, n) {
        n.r(t);
        var r = n("462c"), a = n("636d");
        for (var c in a) "default" !== c && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(c);
        n("1045");
        var i = n("f0c5"), u = Object(i.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        t.default = u.exports;
    }
}, [ [ "eafd", "common/runtime", "common/vendor" ] ] ]);