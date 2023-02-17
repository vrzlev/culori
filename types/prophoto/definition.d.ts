export default definition;
declare const definition: {
	mode: string;
	parse: string[];
	serialize: string;
	fromMode: {
		xyz50: ({ x, y, z, alpha }: { x: any; y: any; z: any; alpha: any }) => {
			mode: string;
			r: number;
			g: number;
			b: number;
		};
		rgb: (color: any) => {
			mode: string;
			r: number;
			g: number;
			b: number;
		};
	};
	toMode: {
		xyz50: (prophoto: any) => {
			mode: string;
			x: number;
			y: number;
			z: number;
		};
		rgb: (color: any) => {
			mode: string;
			r: number;
			g: number;
			b: number;
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
