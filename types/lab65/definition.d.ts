export default definition;
declare const definition: {
	mode: string;
	parse: string[];
	serialize: string;
	toMode: {
		xyz65: ({ l, a, b, alpha }: { l: any; a: any; b: any; alpha: any }) => {
			mode: string;
			x: number;
			y: number;
			z: number;
		};
		rgb: (lab: any) => {
			mode: string;
			r: number;
			g: number;
			b: number;
		};
	};
	fromMode: {
		xyz65: ({ x, y, z, alpha }: { x: any; y: any; z: any; alpha: any }) => {
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
