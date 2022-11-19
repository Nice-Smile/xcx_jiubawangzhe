require("./common/runtime.js"), require("./common/vendor.js"), require("./common/main.js"), 
App({
    onLaunch: function() {
        var n = this, e = wx.getStorageSync("logs") || [];
        e.unshift(Date.now()), wx.setStorageSync("logs", e), wx.login({
            success: function(n) {}
        }), wx.getSetting({
            success: function(e) {
                e.authSetting["scope.userInfo"] && wx.getUserInfo({
                    success: function(e) {
                        n.globalData.userInfo = e.userInfo, n.userInfoReadyCallback && n.userInfoReadyCallback(e);
                    }
                });
            }
        });
    },
    globalData: {
        userInfo: null
    }
});