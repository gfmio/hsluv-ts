/**
 * hsluv-ts entrpoint module
 * This utility library wraps hsluv in TypeScript (until @types/hsluv) is provided.
 */

// tslint:disable:max-line-length
// tslint:disable-next-line:no-var-requires
const hsluv = require("hsluv");

/**
 * hue is a number between 0 and 360, saturation and lightness are numbers between 0 and 100. This function returns the resulting color as a hex string.
 */
export function hsluvToHex([hue, saturation, lightness]: [number, number, number]): string {
    return hsluv.hsluvtoHex([hue, saturation, lightness]);
}

/**
 * Like above, but returns an array of 3 numbers between 0 and 1, for the r, g, and b channel.
 */
export function hsluvToRgb([hue, saturation, lightness]: [number, number, number]): [number, number, number] {
    return hsluv.hsluvToRgb([hue, saturation, lightness]);
}

/**
 * Takes a hex string and returns the HSLuv color as array that contains the hue(0 - 360), saturation(0 - 100) and lightness(0 - 100) channel.Note: The result can have rounding errors.For example saturation can be 100.00000000000007
 */
export function hexToHsluv(hex: string): [number, number, number] {
    return hsluv.hexToHsluv(hex);
}

/**
 * Like above, but red, green and blue are passed as numbers between 0 and 1.
 */
export function rgbToHsluv([red, green, blue]: [number, number, number]) {
    return hsluv.rgbToHsluv([red, green, blue]);
}

// Use hpluvToHex, hpluvToRgb, hexToHpluv and rgbToHpluv for the pastel variant(HPLuv).
// Note that HPLuv does not contain all the colors of RGB, so converting arbitrary RGB to it may generate invalid HPLuv colors.

/**
 * hue is a number between 0 and 360, saturation and lightness are numbers between 0 and 100. This function returns the resulting color as a hex string.
 */
export function hpluvToHex([hue, saturation, lightness]: [number, number, number]): string {
    return hsluv.hpluvtoHex([hue, saturation, lightness]);
}

/**
 * Like above, but returns an array of 3 numbers between 0 and 1, for the r, g, and b channel.
 */
export function hpluvToRgb([hue, saturation, lightness]: [number, number, number]): [number, number, number] {
    return hsluv.hpluvToRgb([hue, saturation, lightness]);
}

/**
 * Takes a hex string and returns the HSLuv color as array that contains the hue(0 - 360), saturation(0 - 100) and lightness(0 - 100) channel.Note: The result can have rounding errors.For example saturation can be 100.00000000000007
 */
export function hexToHpluv(hex: string): [number, number, number] {
    return hsluv.hexToHpluv(hex);
}

/**
 * Like above, but red, green and blue are passed as numbers between 0 and 1.
 */
export function rgbToHpluv([red, green, blue]: [number, number, number]) {
    return hsluv.rgbToHpluv([red, green, blue]);
}

// For advance use cases, additional functions are avalible:

export function hsluvToLch([hue, saturation, lightness]: [number, number, number]): [number, number, number] {
    return hsluv.hsluvToLch([hue, saturation, lightness]);
}

export function lchToHsluv([lightness, chroma, hue]: [number, number, number]): [number, number, number] {
    return hsluv.lchToHsluv([lightness, chroma, hue]);
}

export function hpluvToLch([hue, pastelSaturation, lightness]: [number, number, number]): [number, number, number] {
    return hsluv.hpluvToLch([hue, pastelSaturation, lightness]);
}

export function lchToHpluv([lightness, chroma, hue]: [number, number, number]): [number, number, number] {
    return hsluv.lchToHpluv([lightness, chroma, hue]);
}

export function rgbToXyz([red, green, blue]: [number, number, number]): [number, number, number] {
    return hsluv.rgbToXyz([red, green, blue]);
}

export function xyzToRgb([x, y, z]: [number, number, number]): [number, number, number] {
    return hsluv.xyzToRgb([x, y, z]);
}

export function rgbToLch([red, green, blue]: [number, number, number]): [number, number, number] {
    return hsluv.rgbToLch([red, green, blue]);
}

export function lchToRgb([lightness, chroma, hue]: [number, number, number]): [number, number, number] {
    return hsluv.lchToRgb([lightness, chroma, hue]);
}

export function luvToXyz([l, u, v]: [number, number, number]): [number, number, number] {
    return hsluv.luvToXyz([l, u, v]);
}

export function xyzToLuv([x, y, z]: [number, number, number]): [number, number, number] {
    return hsluv.xyzToLuv([x, y, z]);
}

export function lchToLuv([lightness, chroma, hue]: [number, number, number]): [number, number, number] {
    return hsluv.lchToLuv([lightness, chroma, hue]);
}

export function luvToLch([l, u, v]: [number, number, number]): [number, number, number] {
    return hsluv.luvToLch([l, u, v]);
}
