export default modeOkhsv;
declare const modeOkhsv: {
	mode: string;
	channels: string[];
	parse: string[];
	serialize: string;
	fromMode: {
		oklab: typeof convertOklabToOkhsv;
		rgb: (c: any) => {
			mode: string;
			s: number;
			v: number;
		};
	};
	toMode: {
		oklab: typeof convertOkhsvToOklab;
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
		v: (arr: any) => (t: any) => any;
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
import convertOklabToOkhsv from './convertOklabToOkhsv.js';
import convertOkhsvToOklab from './convertOkhsvToOklab.js';
//# sourceMappingURL=modeOkhsv.d.ts.map
