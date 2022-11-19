!function() {
    function o(t) {
        return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? module.exports = o = function(o) {
            return typeof o;
        } : module.exports = o = function(o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }, o(t);
    }
    module.exports = o;
}();