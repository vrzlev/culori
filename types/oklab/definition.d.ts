export default definition;
declare const definition: {
	mode: string;
	toMode: {
		lrgb: ({ l, a, b, alpha }: { l: any; a: any; b: any; alpha: any }) => {
			mode: string;
			r: number;
			g: number;
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
		lrgb: ({ r, g, b, alpha }: { r: any; g: any; b: any; alpha: any }) => {
			mode: string;
			l: number;
			a: number;
			b: number;
		};
		rgb: (rgb: any) => {
			mode: string;
			l: number;
			a: number;
			b: number;
		};
	};
	ranges: {
		l: number[];
		a: number[];
		b: number[];
	};
	parse: string[];
	serialize: string;
	channels: string[];
	interpolate: {
		l: (arr: any) => (t: any) => any;
		a: (arr: any) => (t: any) => any;
		b: (arr: any) => (t: any) => any;
		alpha: {
			use: (arr: any) => (t: any) => any;
			fixup: (arr: any) => any;
		};
	};
};
//# sourceMappingURL=definition.d.ts.map
