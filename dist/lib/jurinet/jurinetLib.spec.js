"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var jurinetLib_1 = require("./jurinetLib");
describe('jurinetLib', function () {
    describe('cleanText', function () {
        it('should clean a text (general case)', function () { return __awaiter(void 0, void 0, void 0, function () {
            var xml, cleanedText;
            return __generator(this, function (_a) {
                xml = buildJurinetXml([
                    '<a href="URL"> TEXT1 </a> <br/> <b class="CLASS"> TEXT2 </b>',
                    '<i class="CLASS"> TEXT3 </i> <hr/> <u class="CLASS"> TEXT4 </u>',
                    '<em class="CLASS"> <strong class="CLASS"> TEXT5 </strong> \r\n <font class="CLASS"> <span class="CLASS"> TEXT6 </span> </font></em>',
                    '<p class="CLASS"> TEXT7 </p> <h1 class="CLASS"> TEXT8 </h1> TEXT9',
                    'TEXT10 \r\r\n\r\n\t\f\\t\t\\f <TEXT11> & &#',
                ]);
                cleanedText = jurinetLib_1.jurinetLib.cleanText(xml);
                expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 \n TEXT2 TEXT3 \n TEXT4 TEXT5 \n TEXT6 TEXT7 \n TEXT8 \n TEXT9 TEXT10 \n\n\n &lt;TEXT11&gt; &amp; &#</TEXTE_ARRET>');
                return [2 /*return*/];
            });
        }); });
        describe('assertions', function () {
            it('should throw if the parameter is not a string', function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    expect(function () { return jurinetLib_1.jurinetLib.cleanText(0); }).toThrow('jurinetLib.cleanText: text must be a string.');
                    return [2 /*return*/];
                });
            }); });
            it('should throw if the parameter is not in a text_arret', function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    expect(function () { return jurinetLib_1.jurinetLib.cleanText('Text of decision'); }).toThrow('jurinetLib.cleanText: <TEXTE_ARRET> tag not found or incomplete, the document could be malformed or corrupted.');
                    return [2 /*return*/];
                });
            }); });
            it('should throw if the parameter is all the text_arrets are empty', function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    expect(function () { return jurinetLib_1.jurinetLib.cleanText(buildJurinetXml(['', '\t'])); }).toThrow('jurinetLib.cleanText: empty text, the document could be malformed or corrupted.');
                    return [2 /*return*/];
                });
            }); });
            it('should throw if there header is not valid', function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    expect(function () {
                        return jurinetLib_1.jurinetLib.cleanText(buildJurinetXml(['TEXT1 TEXT2'], '<INVALID_HEADER></INVALID_HEADER>'));
                    }).toThrow('jurinetLib.cleanText: End of <CAT_PUB> or <LIEN_WWW> tag not found, the document could be malformed or corrupted.');
                    return [2 /*return*/];
                });
            }); });
        });
        describe('headers', function () {
            it('should return a cleaned decision text with a LIEN_WWW header before <TEXTE_ARRET>', function () { return __awaiter(void 0, void 0, void 0, function () {
                var xml, cleanedText;
                return __generator(this, function (_a) {
                    xml = buildJurinetXml(['TEXT1 TEXT2'], '<LIEN_WWW></LIEN_WWW>');
                    cleanedText = jurinetLib_1.jurinetLib.cleanText(xml);
                    expect(cleanedText).toEqual('<LIEN_WWW></LIEN_WWW><TEXTE_ARRET>TEXT1 TEXT2</TEXTE_ARRET>');
                    return [2 /*return*/];
                });
            }); });
            it('should clean all the xml special character < and > outside the <TEXTE_ARRET>', function () { return __awaiter(void 0, void 0, void 0, function () {
                var xml, cleanedText;
                return __generator(this, function (_a) {
                    xml = buildJurinetXml(['TEXT1 TEXT2'], ' < BEFORE_HEADER <LIEN_WWW> HEADER1 < HEADER2 > HEADER3 </LIEN_WWW>');
                    cleanedText = jurinetLib_1.jurinetLib.cleanText(xml);
                    expect(cleanedText).toEqual('&lt; BEFORE_HEADER <LIEN_WWW> HEADER1 &lt; HEADER2 &gt; HEADER3 </LIEN_WWW><TEXTE_ARRET>TEXT1 TEXT2</TEXTE_ARRET>');
                    return [2 /*return*/];
                });
            }); });
            it('should clean all the xml special character & and &# outside the <TEXTE_ARRET>', function () { return __awaiter(void 0, void 0, void 0, function () {
                var xml, cleanedText;
                return __generator(this, function (_a) {
                    xml = buildJurinetXml(['TEXT1 TEXT2'], '& BEFORE_HEADER <LIEN_WWW> HEADER1 & HEADER2 &# HEADER3 </LIEN_WWW>');
                    cleanedText = jurinetLib_1.jurinetLib.cleanText(xml);
                    expect(cleanedText).toEqual('&amp; BEFORE_HEADER <LIEN_WWW> HEADER1 &amp; HEADER2 &# HEADER3 </LIEN_WWW><TEXTE_ARRET>TEXT1 TEXT2</TEXTE_ARRET>');
                    return [2 /*return*/];
                });
            }); });
            it('should serialize all the numpourvoi in the header', function () { return __awaiter(void 0, void 0, void 0, function () {
                var xml, cleanedText;
                return __generator(this, function (_a) {
                    xml = buildJurinetXml(['TEXT1 TEXT2'], '<numpourvoi id="1">1</numpourvoi><numpourvoi id="2">2</numpourvoi><LIEN_WWW></LIEN_WWW>');
                    cleanedText = jurinetLib_1.jurinetLib.cleanText(xml);
                    expect(cleanedText).toEqual('<numpourvoi id="1">1,2</numpourvoi><LIEN_WWW></LIEN_WWW><TEXTE_ARRET>TEXT1 TEXT2</TEXTE_ARRET>');
                    return [2 /*return*/];
                });
            }); });
        });
        describe('TEXTE_ARRET cleaning', function () {
            it('should remove the <br/> inside the <TEXTE_ARRET>', function () { return __awaiter(void 0, void 0, void 0, function () {
                var xml, cleanedText;
                return __generator(this, function (_a) {
                    xml = buildJurinetXml(['TEXT1 <br/> TEXT2', 'TEXT3 <br/> TEXT4']);
                    cleanedText = jurinetLib_1.jurinetLib.cleanText(xml);
                    expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 \n TEXT2 TEXT3 \n TEXT4</TEXTE_ARRET>');
                    return [2 /*return*/];
                });
            }); });
            it('should remove the <hr/> inside the <TEXTE_ARRET>', function () { return __awaiter(void 0, void 0, void 0, function () {
                var xml, cleanedText;
                return __generator(this, function (_a) {
                    xml = buildJurinetXml(['TEXT1 <hr/> TEXT2', 'TEXT3 <hr/> TEXT4']);
                    cleanedText = jurinetLib_1.jurinetLib.cleanText(xml);
                    expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 \n TEXT2 TEXT3 \n TEXT4</TEXTE_ARRET>');
                    return [2 /*return*/];
                });
            }); });
            it('should remove the <a> inside the <TEXTE_ARRET>', function () { return __awaiter(void 0, void 0, void 0, function () {
                var xml, cleanedText;
                return __generator(this, function (_a) {
                    xml = buildJurinetXml(['TEXT1 <a href="URL"> TEXT2 </a>']);
                    cleanedText = jurinetLib_1.jurinetLib.cleanText(xml);
                    expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 TEXT2</TEXTE_ARRET>');
                    return [2 /*return*/];
                });
            }); });
            it('should remove the <b> inside the <TEXTE_ARRET>', function () { return __awaiter(void 0, void 0, void 0, function () {
                var xml, cleanedText;
                return __generator(this, function (_a) {
                    xml = buildJurinetXml(['TEXT1 <b class="CLASS"> TEXT2 </b>']);
                    cleanedText = jurinetLib_1.jurinetLib.cleanText(xml);
                    expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 TEXT2</TEXTE_ARRET>');
                    return [2 /*return*/];
                });
            }); });
            it('should remove the <i> inside the <TEXTE_ARRET>', function () { return __awaiter(void 0, void 0, void 0, function () {
                var xml, cleanedText;
                return __generator(this, function (_a) {
                    xml = buildJurinetXml(['TEXT1 <i class="CLASS"> TEXT2 </i>']);
                    cleanedText = jurinetLib_1.jurinetLib.cleanText(xml);
                    expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 TEXT2</TEXTE_ARRET>');
                    return [2 /*return*/];
                });
            }); });
            it('should remove the <u> inside the <TEXTE_ARRET>', function () { return __awaiter(void 0, void 0, void 0, function () {
                var xml, cleanedText;
                return __generator(this, function (_a) {
                    xml = buildJurinetXml(['TEXT1 <u class="CLASS"> TEXT2 </u>']);
                    cleanedText = jurinetLib_1.jurinetLib.cleanText(xml);
                    expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 TEXT2</TEXTE_ARRET>');
                    return [2 /*return*/];
                });
            }); });
            it('should remove the <em> inside the <TEXTE_ARRET>', function () { return __awaiter(void 0, void 0, void 0, function () {
                var xml, cleanedText;
                return __generator(this, function (_a) {
                    xml = buildJurinetXml(['TEXT1 <em class="CLASS"> TEXT2 </em>']);
                    cleanedText = jurinetLib_1.jurinetLib.cleanText(xml);
                    expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 TEXT2</TEXTE_ARRET>');
                    return [2 /*return*/];
                });
            }); });
            it('should remove the <strong> inside the <TEXTE_ARRET>', function () { return __awaiter(void 0, void 0, void 0, function () {
                var xml, cleanedText;
                return __generator(this, function (_a) {
                    xml = buildJurinetXml(['TEXT1 <strong class="CLASS"> TEXT2 </strong>']);
                    cleanedText = jurinetLib_1.jurinetLib.cleanText(xml);
                    expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 TEXT2</TEXTE_ARRET>');
                    return [2 /*return*/];
                });
            }); });
            it('should remove the <font> inside the <TEXTE_ARRET>', function () { return __awaiter(void 0, void 0, void 0, function () {
                var xml, cleanedText;
                return __generator(this, function (_a) {
                    xml = buildJurinetXml(['TEXT1 <font class="CLASS"> TEXT2 </font>']);
                    cleanedText = jurinetLib_1.jurinetLib.cleanText(xml);
                    expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 TEXT2</TEXTE_ARRET>');
                    return [2 /*return*/];
                });
            }); });
            it('should remove the <span> inside the <TEXTE_ARRET>', function () { return __awaiter(void 0, void 0, void 0, function () {
                var xml, cleanedText;
                return __generator(this, function (_a) {
                    xml = buildJurinetXml(['TEXT1 <span class="CLASS"> TEXT2 </span>']);
                    cleanedText = jurinetLib_1.jurinetLib.cleanText(xml);
                    expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 TEXT2</TEXTE_ARRET>');
                    return [2 /*return*/];
                });
            }); });
            it('should remove the <p> inside the <TEXTE_ARRET>', function () { return __awaiter(void 0, void 0, void 0, function () {
                var xml, cleanedText;
                return __generator(this, function (_a) {
                    xml = buildJurinetXml(['TEXT1 <p class="CLASS"> TEXT2 </p> TEXT3']);
                    cleanedText = jurinetLib_1.jurinetLib.cleanText(xml);
                    expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 TEXT2 \n TEXT3</TEXTE_ARRET>');
                    return [2 /*return*/];
                });
            }); });
            it('should remove the <h%d> inside the <TEXTE_ARRET>', function () { return __awaiter(void 0, void 0, void 0, function () {
                var titleNumberCategory, xml, cleanedText;
                return __generator(this, function (_a) {
                    titleNumberCategory = Math.floor(Math.random() * 5) + 1;
                    xml = buildJurinetXml([
                        "TEXT1 <h".concat(titleNumberCategory, " class=\"CLASS\"> TEXT2 </h").concat(titleNumberCategory, "> TEXT3"),
                    ]);
                    cleanedText = jurinetLib_1.jurinetLib.cleanText(xml);
                    expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 TEXT2 \n TEXT3</TEXTE_ARRET>');
                    return [2 /*return*/];
                });
            }); });
            it('should replace the newline \\r\\n by \\n inside the <TEXTE_ARRET>', function () { return __awaiter(void 0, void 0, void 0, function () {
                var xml, cleanedText;
                return __generator(this, function (_a) {
                    xml = buildJurinetXml(['TEXT1 \r\n TEXT2']);
                    cleanedText = jurinetLib_1.jurinetLib.cleanText(xml);
                    expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 \n TEXT2</TEXTE_ARRET>');
                    return [2 /*return*/];
                });
            }); });
            it('should replace the newline \\r by \\n inside the <TEXTE_ARRET>', function () { return __awaiter(void 0, void 0, void 0, function () {
                var xml, cleanedText;
                return __generator(this, function (_a) {
                    xml = buildJurinetXml(['TEXT1 \r TEXT2']);
                    cleanedText = jurinetLib_1.jurinetLib.cleanText(xml);
                    expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 \n TEXT2</TEXTE_ARRET>');
                    return [2 /*return*/];
                });
            }); });
            it('should replace the newline \\r\\r\\n by \\n\\n inside the <TEXTE_ARRET>', function () { return __awaiter(void 0, void 0, void 0, function () {
                var xml, cleanedText;
                return __generator(this, function (_a) {
                    xml = buildJurinetXml(['TEXT1 \r\r\n TEXT2']);
                    cleanedText = jurinetLib_1.jurinetLib.cleanText(xml);
                    expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 \n\n TEXT2</TEXTE_ARRET>');
                    return [2 /*return*/];
                });
            }); });
            it('should remove the tabulation \\t inside the <TEXTE_ARRET>', function () { return __awaiter(void 0, void 0, void 0, function () {
                var xml, cleanedText;
                return __generator(this, function (_a) {
                    xml = buildJurinetXml(['TEXT1\t\tTEXT2']);
                    cleanedText = jurinetLib_1.jurinetLib.cleanText(xml);
                    expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1TEXT2</TEXTE_ARRET>');
                    return [2 /*return*/];
                });
            }); });
            it('should remove ill formed tabulation \\\\t inside the <TEXTE_ARRET>', function () { return __awaiter(void 0, void 0, void 0, function () {
                var xml, cleanedText;
                return __generator(this, function (_a) {
                    xml = buildJurinetXml(['TEXT1\\t\\tTEXT2']);
                    cleanedText = jurinetLib_1.jurinetLib.cleanText(xml);
                    expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1TEXT2</TEXTE_ARRET>');
                    return [2 /*return*/];
                });
            }); });
            it('should remove the page break \\f inside the <TEXTE_ARRET>', function () { return __awaiter(void 0, void 0, void 0, function () {
                var xml, cleanedText;
                return __generator(this, function (_a) {
                    xml = buildJurinetXml(['TEXT1\f\fTEXT2']);
                    cleanedText = jurinetLib_1.jurinetLib.cleanText(xml);
                    expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1TEXT2</TEXTE_ARRET>');
                    return [2 /*return*/];
                });
            }); });
            it('should remove ill formed page break \\\\f inside the <TEXTE_ARRET>', function () { return __awaiter(void 0, void 0, void 0, function () {
                var xml, cleanedText;
                return __generator(this, function (_a) {
                    xml = buildJurinetXml(['TEXT1\\f\\fTEXT2']);
                    cleanedText = jurinetLib_1.jurinetLib.cleanText(xml);
                    expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1TEXT2</TEXTE_ARRET>');
                    return [2 /*return*/];
                });
            }); });
            it('should replace multiple space by single space inside the <TEXTE_ARRET>', function () { return __awaiter(void 0, void 0, void 0, function () {
                var xml, cleanedText;
                return __generator(this, function (_a) {
                    xml = buildJurinetXml(['TEXT1   TEXT2']);
                    cleanedText = jurinetLib_1.jurinetLib.cleanText(xml);
                    expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 TEXT2</TEXTE_ARRET>');
                    return [2 /*return*/];
                });
            }); });
            it('should format well the & character inside the <TEXTE_ARRET>', function () { return __awaiter(void 0, void 0, void 0, function () {
                var xml, cleanedText;
                return __generator(this, function (_a) {
                    xml = buildJurinetXml(['&TEXT1']);
                    cleanedText = jurinetLib_1.jurinetLib.cleanText(xml);
                    expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>&amp;TEXT1</TEXTE_ARRET>');
                    return [2 /*return*/];
                });
            }); });
            it('should keep the &amp; inside the <TEXTE_ARRET>', function () { return __awaiter(void 0, void 0, void 0, function () {
                var xml, cleanedText;
                return __generator(this, function (_a) {
                    xml = buildJurinetXml(['&amp;TEXT1']);
                    cleanedText = jurinetLib_1.jurinetLib.cleanText(xml);
                    expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>&amp;TEXT1</TEXTE_ARRET>');
                    return [2 /*return*/];
                });
            }); });
            it('should convert the &amp;# into &# inside the <TEXTE_ARRET>', function () { return __awaiter(void 0, void 0, void 0, function () {
                var xml, cleanedText;
                return __generator(this, function (_a) {
                    xml = buildJurinetXml(['&amp;#TEXT1']);
                    cleanedText = jurinetLib_1.jurinetLib.cleanText(xml);
                    expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>&#TEXT1</TEXTE_ARRET>');
                    return [2 /*return*/];
                });
            }); });
            it('should format well the < character inside the <TEXTE_ARRET>', function () { return __awaiter(void 0, void 0, void 0, function () {
                var xml, cleanedText;
                return __generator(this, function (_a) {
                    xml = buildJurinetXml(['<TEXT1']);
                    cleanedText = jurinetLib_1.jurinetLib.cleanText(xml);
                    expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>&lt;TEXT1</TEXTE_ARRET>');
                    return [2 /*return*/];
                });
            }); });
            it('should format well the > character inside the <TEXTE_ARRET>', function () { return __awaiter(void 0, void 0, void 0, function () {
                var xml, cleanedText;
                return __generator(this, function (_a) {
                    xml = buildJurinetXml(['>TEXT1']);
                    cleanedText = jurinetLib_1.jurinetLib.cleanText(xml);
                    expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>&gt;TEXT1</TEXTE_ARRET>');
                    return [2 /*return*/];
                });
            }); });
            it('should conserve the < and > for data inside the <TEXTE_ARRET>', function () { return __awaiter(void 0, void 0, void 0, function () {
                var xml, cleanedText;
                return __generator(this, function (_a) {
                    xml = buildJurinetXml(['<TEXT1>']);
                    cleanedText = jurinetLib_1.jurinetLib.cleanText(xml);
                    expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>&lt;TEXT1&gt;</TEXTE_ARRET>');
                    return [2 /*return*/];
                });
            }); });
            describe('WEIRD CASE', function () {
                it('should conserve the opening html balise without parameters but not the closing one inside the <TEXTE_ARRET>', function () { return __awaiter(void 0, void 0, void 0, function () {
                    var xml, cleanedText;
                    return __generator(this, function (_a) {
                        xml = buildJurinetXml(['<p> TEXT1 </p>']);
                        cleanedText = jurinetLib_1.jurinetLib.cleanText(xml);
                        expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>&lt;p&gt; TEXT1</TEXTE_ARRET>');
                        return [2 /*return*/];
                    });
                }); });
            });
        });
    });
});
function buildJurinetXml(textArrets, header) {
    if (header === void 0) { header = '<CAT_PUB></CAT_PUB>'; }
    var textArretsWithTags = textArrets.map(function (textArret) { return "<TEXTE_ARRET>".concat(textArret, "</TEXTE_ARRET>"); });
    var xmlDocument = "".concat(header).concat(textArretsWithTags.join(''));
    return xmlDocument;
}
