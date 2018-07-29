"use strict";
/**
 * hsluv-ts entrpoint module
 * This utility library wraps hsluv in TypeScript (until @types/hsluv) is provided.
 */
exports.__esModule = true;
// tslint:disable:max-line-length
// tslint:disable-next-line:no-var-requires
var hsluv = require("hsluv");
/**
 * hue is a number between 0 and 360, saturation and lightness are numbers between 0 and 100. This function returns the resulting color as a hex string.
 */
function hsluvToHex(_a) {
    var hue = _a[0], saturation = _a[1], lightness = _a[2];
    return hsluv.hsluvtoHex([hue, saturation, lightness]);
}
exports.hsluvToHex = hsluvToHex;
/**
 * Like above, but returns an array of 3 numbers between 0 and 1, for the r, g, and b channel.
 */
function hsluvToRgb(_a) {
    var hue = _a[0], saturation = _a[1], lightness = _a[2];
    return hsluv.hsluvToRgb([hue, saturation, lightness]);
}
exports.hsluvToRgb = hsluvToRgb;
/**
 * Takes a hex string and returns the HSLuv color as array that contains the hue(0 - 360), saturation(0 - 100) and lightness(0 - 100) channel.Note: The result can have rounding errors.For example saturation can be 100.00000000000007
 */
function hexToHsluv(hex) {
    return hsluv.hexToHsluv(hex);
}
exports.hexToHsluv = hexToHsluv;
/**
 * Like above, but red, green and blue are passed as numbers between 0 and 1.
 */
function rgbToHsluv(_a) {
    var red = _a[0], green = _a[1], blue = _a[2];
    return hsluv.rgbToHsluv([red, green, blue]);
}
exports.rgbToHsluv = rgbToHsluv;
// Use hpluvToHex, hpluvToRgb, hexToHpluv and rgbToHpluv for the pastel variant(HPLuv).
// Note that HPLuv does not contain all the colors of RGB, so converting arbitrary RGB to it may generate invalid HPLuv colors.
/**
 * hue is a number between 0 and 360, saturation and lightness are numbers between 0 and 100. This function returns the resulting color as a hex string.
 */
function hpluvToHex(_a) {
    var hue = _a[0], saturation = _a[1], lightness = _a[2];
    return hsluv.hpluvtoHex([hue, saturation, lightness]);
}
exports.hpluvToHex = hpluvToHex;
/**
 * Like above, but returns an array of 3 numbers between 0 and 1, for the r, g, and b channel.
 */
function hpluvToRgb(_a) {
    var hue = _a[0], saturation = _a[1], lightness = _a[2];
    return hsluv.hpluvToRgb([hue, saturation, lightness]);
}
exports.hpluvToRgb = hpluvToRgb;
/**
 * Takes a hex string and returns the HSLuv color as array that contains the hue(0 - 360), saturation(0 - 100) and lightness(0 - 100) channel.Note: The result can have rounding errors.For example saturation can be 100.00000000000007
 */
function hexToHpluv(hex) {
    return hsluv.hexToHpluv(hex);
}
exports.hexToHpluv = hexToHpluv;
/**
 * Like above, but red, green and blue are passed as numbers between 0 and 1.
 */
function rgbToHpluv(_a) {
    var red = _a[0], green = _a[1], blue = _a[2];
    return hsluv.rgbToHpluv([red, green, blue]);
}
exports.rgbToHpluv = rgbToHpluv;
// For advance use cases, additional functions are avalible:
function hsluvToLch(_a) {
    var hue = _a[0], saturation = _a[1], lightness = _a[2];
    return hsluv.hsluvToLch([hue, saturation, lightness]);
}
exports.hsluvToLch = hsluvToLch;
function lchToHsluv(_a) {
    var lightness = _a[0], chroma = _a[1], hue = _a[2];
    return hsluv.lchToHsluv([lightness, chroma, hue]);
}
exports.lchToHsluv = lchToHsluv;
function hpluvToLch(_a) {
    var hue = _a[0], pastelSaturation = _a[1], lightness = _a[2];
    return hsluv.hpluvToLch([hue, pastelSaturation, lightness]);
}
exports.hpluvToLch = hpluvToLch;
function lchToHpluv(_a) {
    var lightness = _a[0], chroma = _a[1], hue = _a[2];
    return hsluv.lchToHpluv([lightness, chroma, hue]);
}
exports.lchToHpluv = lchToHpluv;
function rgbToXyz(_a) {
    var red = _a[0], green = _a[1], blue = _a[2];
    return hsluv.rgbToXyz([red, green, blue]);
}
exports.rgbToXyz = rgbToXyz;
function xyzToRgb(_a) {
    var x = _a[0], y = _a[1], z = _a[2];
    return hsluv.xyzToRgb([x, y, z]);
}
exports.xyzToRgb = xyzToRgb;
function rgbToLch(_a) {
    var red = _a[0], green = _a[1], blue = _a[2];
    return hsluv.rgbToLch([red, green, blue]);
}
exports.rgbToLch = rgbToLch;
function lchToRgb(_a) {
    var lightness = _a[0], chroma = _a[1], hue = _a[2];
    return hsluv.lchToRgb([lightness, chroma, hue]);
}
exports.lchToRgb = lchToRgb;
function luvToXyz(_a) {
    var l = _a[0], u = _a[1], v = _a[2];
    return hsluv.luvToXyz([l, u, v]);
}
exports.luvToXyz = luvToXyz;
function xyzToLuv(_a) {
    var x = _a[0], y = _a[1], z = _a[2];
    return hsluv.xyzToLuv([x, y, z]);
}
exports.xyzToLuv = xyzToLuv;
function lchToLuv(_a) {
    var lightness = _a[0], chroma = _a[1], hue = _a[2];
    return hsluv.lchToLuv([lightness, chroma, hue]);
}
exports.lchToLuv = lchToLuv;
function luvToLch(_a) {
    var l = _a[0], u = _a[1], v = _a[2];
    return hsluv.luvToLch([l, u, v]);
}
exports.luvToLch = luvToLch;
//# sourceMappingURL=index.js.map