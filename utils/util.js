module.exports = {
    shake: function(t) {
        var e = 0, n = 0, a = 0;
        wx.onAccelerometerChange(function(r) {
            if (e) {
                var o = Math.abs(r.x - e), g = Math.abs(r.y - n), i = Math.abs(r.z - a);
                (o > .85 || g > .85 || i > .85) && t();
            }
            e = r.x, n = r.y, a = r.z;
        });
    },
    formatTime: function(t) {
        var e = t.getFullYear(), n = t.getMonth() + 1, a = t.getDate();
        return t.getHours(), t.getMinutes(), t.getSeconds(), String(e) + String(n) + String(a);
    }
};