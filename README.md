# hsluv-ts

<p align="center">
  <!-- License -->
  <a href="./LICENSE">
    <img src="https://img.shields.io/github/license/gfmio/hsluv-ts.svg" alt="Github license" title="Github license" />
  </a>
  <!-- Code Climate -->
  <a href="https://codeclimate.com/github/gfmio/hsluv-ts/issues">
    <img src="https://img.shields.io/codeclimate/issues/gfmio/hsluv-ts.svg" alt="Code Climate issues" title="Code Climate issues" />
  </a>
  <a href="https://codeclimate.com/github/gfmio/hsluv-ts/maintainability">
    <img src="https://img.shields.io/codeclimate/maintainability/gfmio/hsluv-ts.svg" alt="Code Climate maintainability" title="Code Climate maintainability" />
  </a>
  <a href="https://codeclimate.com/github/gfmio/hsluv-ts/maintainability">
    <img src="https://img.shields.io/codeclimate/maintainability-percentage/gfmio/hsluv-ts.svg" alt="Code Climate maintainability (percentage)" title="Code Climate maintainability (percentage)" />
  </a>
  <a href="https://codeclimate.com/github/gfmio/hsluv-ts">
    <img src="https://img.shields.io/codeclimate/tech-debt/gfmio/hsluv-ts.svg" alt="Code Climate technical debt" title="Code Climate technical debt" />
  </a>
  <!-- NPM -->
  <a href="https://www.npmjs.com/package/hsluv-ts">
    <img src="https://img.shields.io/npm/v/hsluv-ts.svg" alt="NPM version" title="NPM version" />
  </a>
  <a href="https://www.npmjs.com/package/hsluv-ts">
    <img src="https://img.shields.io/npm/dw/hsluv-ts.svg" alt="Downloads per week" title="Downloads per week" />
  </a>
  <a href="https://www.npmjs.com/package/hsluv-ts">
    <img src="https://img.shields.io/bundlephobia/minzip/hsluv-ts.svg" alt="Minified gzipped size" title="Minified gzipped size" />
  </a>
  <a href="https://www.npmjs.com/package/hsluv-ts">
    <img src="https://img.shields.io/npm/types/hsluv-ts.svg" alt="Types" title="Types" />
  </a>
  <a href="#">
    <img src="https://img.shields.io/snyk/vulnerabilities/npm/hsluv-ts.svg" alt="Known Vulnerabilities" title="Known Vulnerabilities">
  </a>
</p>

**hsluv-ts** is a TypeScript wrapper around the [`hsluv`](https://www.npmjs.com/package/hsluv) color library, which lacks type definitions.

## Install

```sh
// If you use yarn
yarn add hsluv-ts

// If you use npm
npm install hsluv-ts
```

## Usage

```ts
/**
 * hue is a number between 0 and 360, saturation and lightness are numbers between 0 and 100. This function returns the resulting color as a hex string.
 */
export declare function hsluvToHex([hue, saturation, lightness]: [
  number,
  number,
  number
]): string;
/**
 * Like above, but returns an array of 3 numbers between 0 and 1, for the r, g, and b channel.
 */
export declare function hsluvToRgb([hue, saturation, lightness]: [
  number,
  number,
  number
]): [number, number, number];
/**
 * Takes a hex string and returns the HSLuv color as array that contains the hue(0 - 360), saturation(0 - 100) and lightness(0 - 100) channel.Note: The result can have rounding errors.For example saturation can be 100.00000000000007
 */
export declare function hexToHsluv(hex: string): [number, number, number];
/**
 * Like above, but red, green and blue are passed as numbers between 0 and 1.
 */
export declare function rgbToHsluv([red, green, blue]: [
  number,
  number,
  number
]): any;
/**
 * hue is a number between 0 and 360, saturation and lightness are numbers between 0 and 100. This function returns the resulting color as a hex string.
 */
export declare function hpluvToHex([hue, saturation, lightness]: [
  number,
  number,
  number
]): string;
/**
 * Like above, but returns an array of 3 numbers between 0 and 1, for the r, g, and b channel.
 */
export declare function hpluvToRgb([hue, saturation, lightness]: [
  number,
  number,
  number
]): [number, number, number];
/**
 * Takes a hex string and returns the HSLuv color as array that contains the hue(0 - 360), saturation(0 - 100) and lightness(0 - 100) channel.Note: The result can have rounding errors.For example saturation can be 100.00000000000007
 */
export declare function hexToHpluv(hex: string): [number, number, number];
/**
 * Like above, but red, green and blue are passed as numbers between 0 and 1.
 */
export declare function rgbToHpluv([red, green, blue]: [
  number,
  number,
  number
]): any;
export declare function hsluvToLch([hue, saturation, lightness]: [
  number,
  number,
  number
]): [number, number, number];
export declare function lchToHsluv([lightness, chroma, hue]: [
  number,
  number,
  number
]): [number, number, number];
export declare function hpluvToLch([hue, pastelSaturation, lightness]: [
  number,
  number,
  number
]): [number, number, number];
export declare function lchToHpluv([lightness, chroma, hue]: [
  number,
  number,
  number
]): [number, number, number];
export declare function rgbToXyz([red, green, blue]: [
  number,
  number,
  number
]): [number, number, number];
export declare function xyzToRgb([x, y, z]: [number, number, number]): [
  number,
  number,
  number
];
export declare function rgbToLch([red, green, blue]: [
  number,
  number,
  number
]): [number, number, number];
export declare function lchToRgb([lightness, chroma, hue]: [
  number,
  number,
  number
]): [number, number, number];
export declare function luvToXyz([l, u, v]: [number, number, number]): [
  number,
  number,
  number
];
export declare function xyzToLuv([x, y, z]: [number, number, number]): [
  number,
  number,
  number
];
export declare function lchToLuv([lightness, chroma, hue]: [
  number,
  number,
  number
]): [number, number, number];
export declare function luvToLch([l, u, v]: [number, number, number]): [
  number,
  number,
  number
];
```
