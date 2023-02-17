export default modeOkhsl;
declare const modeOkhsl: {
	mode: string;
	channels: string[];
	parse: string[];
	serialize: string;
	fromMode: {
		oklab: typeof convertOklabToOkhsl;
		rgb: (c: any) => {
			mode: string;
			l: number;
		};
	};
	toMode: {
		oklab: typeof convertOkhslToOklab;
		rgb: (c: any) => {
			mode: string;
			r: number;
			g: number;
			b: number;
		};
	};
	ranges: {
		h: number[];
	};
	interpolate: {
		h: {
			use: (arr: any) => (t: any) => any;
			fixup: (arr: any) => any;
		};
		s: (arr: any) => (t: any) => any;
		l: (arr: any) => (t: any) => any;
		alpha: {
			use: (arr: any) => (t: any) => any;
			fixup: (arr: any) => any;
		};
	};
	difference: {
		h: (std: any, smp: any) => number;
	};
	average: {
		h: (val: any) => number;
	};
};
import convertOklabToOkhsl from './convertOklabToOkhsl.js';
import convertOkhslToOklab from './convertOkhslToOklab.js';
//# sourceMappingURL=modeOkhsl.d.ts.map
