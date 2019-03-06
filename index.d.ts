export declare type ThreeNumbers = [number, number, number];
/**
 * hue is a number between 0 and 360, saturation and lightness are numbers between 0 and 100. This function returns the resulting color as a hex string.
 */
export declare function hsluvToHex([hue, saturation, lightness]: ThreeNumbers): string;
/**
 * Like above, but returns an array of 3 numbers between 0 and 1, for the r, g, and b channel.
 */
export declare function hsluvToRgb([hue, saturation, lightness]: ThreeNumbers): ThreeNumbers;
/**
 * Takes a hex string and returns the HSLuv color as array that contains the hue(0 - 360), saturation(0 - 100) and lightness(0 - 100) channel.Note: The result can have rounding errors.For example saturation can be 100.00000000000007
 */
export declare function hexToHsluv(hex: string): ThreeNumbers;
/**
 * Like above, but red, green and blue are passed as numbers between 0 and 1.
 */
export declare function rgbToHsluv([red, green, blue]: ThreeNumbers): any;
/**
 * hue is a number between 0 and 360, saturation and lightness are numbers between 0 and 100. This function returns the resulting color as a hex string.
 */
export declare function hpluvToHex([hue, saturation, lightness]: ThreeNumbers): string;
/**
 * Like above, but returns an array of 3 numbers between 0 and 1, for the r, g, and b channel.
 */
export declare function hpluvToRgb([hue, saturation, lightness]: ThreeNumbers): ThreeNumbers;
/**
 * Takes a hex string and returns the HSLuv color as array that contains the hue(0 - 360), saturation(0 - 100) and lightness(0 - 100) channel.Note: The result can have rounding errors.For example saturation can be 100.00000000000007
 */
export declare function hexToHpluv(hex: string): ThreeNumbers;
/**
 * Like above, but red, green and blue are passed as numbers between 0 and 1.
 */
export declare function rgbToHpluv([red, green, blue]: ThreeNumbers): any;
export declare function hsluvToLch([hue, saturation, lightness]: ThreeNumbers): ThreeNumbers;
export declare function lchToHsluv([lightness, chroma, hue]: ThreeNumbers): ThreeNumbers;
export declare function hpluvToLch([hue, pastelSaturation, lightness]: ThreeNumbers): ThreeNumbers;
export declare function lchToHpluv([lightness, chroma, hue]: ThreeNumbers): ThreeNumbers;
export declare function rgbToXyz([red, green, blue]: ThreeNumbers): ThreeNumbers;
export declare function xyzToRgb([x, y, z]: ThreeNumbers): ThreeNumbers;
export declare function rgbToLch([red, green, blue]: ThreeNumbers): ThreeNumbers;
export declare function lchToRgb([lightness, chroma, hue]: ThreeNumbers): ThreeNumbers;
export declare function luvToXyz([l, u, v]: ThreeNumbers): ThreeNumbers;
export declare function xyzToLuv([x, y, z]: ThreeNumbers): ThreeNumbers;
export declare function lchToLuv([lightness, chroma, hue]: ThreeNumbers): ThreeNumbers;
export declare function luvToLch([l, u, v]: ThreeNumbers): ThreeNumbers;
