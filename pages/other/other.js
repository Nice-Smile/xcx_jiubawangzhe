var n;
// 在页面中定义插屏广告
let interstitialAd = null
n = null, Page({
    data: {},
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
    },
    tocailei: function() {
        wx.navigateTo({
            url: "/pages/cailei/cailei"
        });
    },
    todanmu: function() {
        wx.navigateTo({
            url: "/pages/danmu/danmu"
        });
    },
    chongqi: function() {
        wx.navigateTo({
            url: "/pages/index/index"
        });
    },
    gonghzong: function() {
        wx.navigateToMiniProgram({
            appId: 'wxb0742e21010b6f03',  //appid
            //path
            extraData: {  //参数
              foo: 'bar'
            },
            envVersion: 'release', //开发版develop 开发版 trial   体验版 release 正式版 
            success(res) {
              console.log('成功')
              // 打开成功
            }
          })
    },

    gonghzong1: function() {
        wx.navigateToMiniProgram({
            appId: 'wxb0742e21010b6f03',  //appid
            //path
            extraData: {  //参数
              foo: 'bar'
            },
            envVersion: 'release', //开发版develop 开发版 trial   体验版 release 正式版 
            success(res) {
              console.log('成功')
              // 打开成功
            }
          })
    },

    gonghzong2: function() {
        wx.navigateToMiniProgram({
            appId: 'wxb0742e21010b6f03',  //appid
            //path
            extraData: {  //参数
              foo: 'bar'
            },
            envVersion: 'release', //开发版develop 开发版 trial   体验版 release 正式版 
            success(res) {
              console.log('成功')
              // 打开成功
            }
          })
    },

    gonghzong3: function() {
        wx.navigateToMiniProgram({
            appId: 'wxb0742e21010b6f03',  //appid
            //path
            extraData: {  //参数
              foo: 'bar'
            },
            envVersion: 'release', //开发版develop 开发版 trial   体验版 release 正式版 
            success(res) {
              console.log('成功')
              // 打开成功
            }
          })
    },

    gonghzong4: function() {
        wx.navigateToMiniProgram({
            appId: 'wxb0742e21010b6f03',  //appid
            //path
            extraData: {  //参数
              foo: 'bar'
            },
            envVersion: 'release', //开发版develop 开发版 trial   体验版 release 正式版 
            success(res) {
              console.log('成功')
              // 打开成功
            }
          })
    },
    totouzi: function() {
        wx.reLaunch({
            url: "/pages/index3/index"
        });
    },
    tozhijian: function() {
        wx.reLaunch({
            url: "/pages/zhijian/zhijian"
        });
    },
    todengguang: function() {
        wx.navigateTo({
            url: "/pages/dengguang/dengguang"
        });
    },
    tozhuanpan: function() {
        wx.navigateTo({
            url: "/pages/zhuanpan/zhuanpan"
        });
    },
    todage: function() {
        wx.navigateTo({
            url: "/pages/dage/dage"
        });
    },
    toeyu: function() {
        wx.navigateTo({
            url: "/pages/eyu/eyu"
        });
    },
    onReady: function() {},
    onShow: function() {

        // 在适合的场景显示插屏广告
if (interstitialAd) {
    interstitialAd.show().catch((err) => {
      console.error(err)
    })
  }

        n && n.show().catch(function(n) {
            console.error(n);
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: "喝酒神器摇骰子更多玩法",
            path: "/pages/other/other",
            imageUrl: "/pages/img/fximages.jpg"
        };
    },
    onShareTimeline: function(n) {
        return {
            title: "喝酒神器摇骰子更多玩法",
            query: "/pages/other/other"
        };
    }
});