# hsluv-ts

**hsluv-ts** is a TypeScript wrapper around the [`hsluv`](https://www.npmjs.com/package/hsluv) color library, which lacks type definitions.

## Links

* Github: [@gfmio/hsluv-ts](https://github.com/gfmio/hsluv-ts)
* NPM: [hsluv-ts](https://www.npmjs.com/package/hsluv-ts)

## Install

```sh
// If you use yarn
yarn install hsluv-ts
// If you use npm
npm install hsluv-ts
```

## Usage

```ts
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
export declare function hpluvToLch([hue, pastelSaturation, lightness]: [number, number, number]): [number, number, number];
export declare function lchToHpluv([lightness, chroma, hue]: [number, number, number]): [number, number, number];
export declare function rgbToXyz([red, green, blue]: [number, number, number]): [number, number, number];
export declare function xyzToRgb([x, y, z]: [number, number, number]): [number, number, number];
export declare function rgbToLch([red, green, blue]: [number, number, number]): [number, number, number];
export declare function lchToRgb([lightness, chroma, hue]: [number, number, number]): [number, number, number];
export declare function luvToXyz([l, u, v]: [number, number, number]): [number, number, number];
export declare function xyzToLuv([x, y, z]: [number, number, number]): [number, number, number];
export declare function lchToLuv([lightness, chroma, hue]: [number, number, number]): [number, number, number];
export declare function luvToLch([l, u, v]: [number, number, number]): [number, number, number];
```

## Build

Incidentally, I decided to test my [TypeScript compiler patch](https://github.com/gfmio/TypeScript) on this repo. The source file `index.ts` generates the CommonJS module (`index.js`) and its source map (`index.js.map`) as well as the ES module module (`index.mjs`) and its source map (`index.mjs.map`). This extension is needed for NodeJS to automatically identify the source file as an ES module.

See also the commands in the [`package.json`](./package.json):

```json
{
  "dependencies": {
    "hsluv": "^0.0.3"
  },
  "devDependencies": {
    "@types/node": "^10.5.4",
    "npm-run-all": "^4.1.3",
    "ts-mjs": "^3.1.0",
    "tslint": "^5.11.0",
    "typescript": "^2.9.2"
  },
  "scripts": {
    "compile:cjs": "tsc --sourceMap --declaration --target es3 --module commonjs index.ts",
    "compile:cjs:watch": "tsc -w --sourceMap --declaration --target es3 --module commonjs index.ts",
    "compile:mjs": "tsc-mjs --sourceMap --declaration --target esnext --module esnext --mjs index.ts",
    "compile:mjs:watch": "tsc-mjs -w --sourceMap --declaration --target esnext --module esnext --mjs index.ts",
    "compile": "npm-run-all compile:cjs compile:mjs",
    "compile:watch": "npm-run-all -p compile:cjs:watch compile:mjs:watch",
  }
}
```

## License: MIT

See the [LICENSE file](./LICENSE).
