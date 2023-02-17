export default definition;
declare const definition: {
	mode: string;
	parse: string[];
	serialize: string;
	toMode: {
		lab65: (c: any) => {
			mode: string;
			l: any;
			a: number;
			b: number;
		};
		rgb: (c: any) => {
			mode: string;
			r: number;
			g: number;
			b: number;
		};
	};
	fromMode: {
		rgb: (c: any) => {
			mode: string;
			l: any;
			c: number;
		};
		lab65: (c: any) => {
			mode: string;
			l: any;
			c: number;
		};
	};
	ranges: {
		l: number[];
		c: number[];
		h: number[];
	};
	channels: string[];
	interpolate: {
		h: {
			use: (arr: any) => (t: any) => any;
			fixup: (arr: any) => any;
		};
		c: (arr: any) => (t: any) => any;
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
//# sourceMappingURL=definition.d.ts.map
