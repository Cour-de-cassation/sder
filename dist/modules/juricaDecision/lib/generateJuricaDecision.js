var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
export { generateJuricaDecision };
var MAX_RAND_NUMBER = 1000000;
function generateJuricaDecision(decisionFields) {
    if (decisionFields === void 0) { decisionFields = {}; }
    return __assign({ _id: Math.floor(Math.random() * MAX_RAND_NUMBER), JDEC_HTML_SOURCE: '<html>HTML_SOURCE</html>' }, decisionFields);
}
