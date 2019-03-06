/** hsluv-ts entrpoint module */
/**
 * hue is a number between 0 and 360, saturation and lightness are numbers between 0 and 100. This function returns the resulting color as a hex string.
 */
export declare function hsluvToHex([hue, saturation, lightness]: [number, number, number]): string;
/**
 * Like above, but returns an array of 3 numbers between 0 and 1, for the r, g, and b channel.
 */
export declare function hsluvToRgb([hue, saturation, lightness]: [number, number, number]): [number, number, number];
/**
 * Takes a hex string and returns the HSLuv color as array that contains the hue(0 - 360), saturation(0 - 100) and lightness(0 - 100) channel.Note: The result can have rounding errors.For example saturation can be 100.00000000000007
 */
export declare function hexToHsluv(hex: string): [number, number, number];
/**
 * Like above, but red, green and blue are passed as numbers between 0 and 1.
 */
export declare function rgbToHsluv([red, green, blue]: [number, number, number]): any;
/**
 * hue is a number between 0 and 360, saturation and lightness are numbers between 0 and 100. This function returns the resulting color as a hex string.
 */
export declare function hpluvToHex([hue, saturation, lightness]: [number, number, number]): string;
/**
 * Like above, but returns an array of 3 numbers between 0 and 1, for the r, g, and b channel.
 */
export declare function hpluvToRgb([hue, saturation, lightness]: [number, number, number]): [number, number, number];
/**
 * Takes a hex string and returns the HSLuv color as array that contains the hue(0 - 360), saturation(0 - 100) and lightness(0 - 100) channel.Note: The result can have rounding errors.For example saturation can be 100.00000000000007
 */
export declare function hexToHpluv(hex: string): [number, number, number];
/**
 * Like above, but red, green and blue are passed as numbers between 0 and 1.
 */
export declare function rgbToHpluv([red, green, blue]: [number, number, number]): any;
export declare function hsluvToLch([hue, saturation, lightness]: [number, number, number]): [number, number, number];
export declare function lchToHsluv([lightness, chroma, hue]: [number, number, number]): [number, number, number];
export declare function hpluvToLch([hue, pastelSaturation, lightness]: [number, number, number]): [
    number,
    number,
    number
];
export declare function lchToHpluv([lightness, chroma, hue]: [number, number, number]): [number, number, number];
export declare function rgbToXyz([red, green, blue]: [number, number, number]): [number, number, number];
export declare function xyzToRgb([x, y, z]: [number, number, number]): [number, number, number];
export declare function rgbToLch([red, green, blue]: [number, number, number]): [number, number, number];
export declare function lchToRgb([lightness, chroma, hue]: [number, number, number]): [number, number, number];
export declare function luvToXyz([l, u, v]: [number, number, number]): [number, number, number];
export declare function xyzToLuv([x, y, z]: [number, number, number]): [number, number, number];
export declare function lchToLuv([lightness, chroma, hue]: [number, number, number]): [number, number, number];
export declare function luvToLch([l, u, v]: [number, number, number]): [number, number, number];
