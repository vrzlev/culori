export default definition;
declare const definition: {
	mode: string;
	parse: string[];
	serialize: string;
	fromMode: {
		rgb: (color: any) => {
			mode: string;
			r: number;
			g: number;
			b: number;
		};
		xyz65: ({ x, y, z, alpha }: { x: any; y: any; z: any; alpha: any }) => {
			mode: string;
			r: number;
			g: number;
			b: number;
		};
	};
	toMode: {
		rgb: (color: any) => {
			mode: string;
			r: number;
			g: number;
			b: number;
		};
		xyz65: (a98: any) => {
			mode: string;
			x: number;
			y: number;
			z: number;
		};
	};
	channels: string[];
	interpolate: {
		r: (arr: any) => (t: any) => any;
		g: (arr: any) => (t: any) => any;
		b: (arr: any) => (t: any) => any;
		alpha: {
			use: (arr: any) => (t: any) => any;
			fixup: (arr: any) => any;
		};
	};
};
//# sourceMappingURL=definition.d.ts.map
