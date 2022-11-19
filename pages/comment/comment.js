module.exports.canvasTextAutoLine = function(e, t, l, r, n, o) {
    var s = 0, a = 0, g = (g = t.replace(/&/g, "　")).replace(/=/g, "　");
    console.log(g);
    for (var i = 0; i < t.length; i++) ((s += e.measureText(t[i]).width) > o || "&" == t[i]) && (e.fillText(g.substring(a, i), l, r), 
    r += 25, s = 0, a = i, n += 18), i == t.length - 1 && e.fillText(g.substring(a, i + 1), l, r);
    return n + 10;
};