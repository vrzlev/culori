export default definition;
declare const definition: {
	mode: string;
	fromMode: {
		xyz65: ({ x, y, z, alpha }: { x: any; y: any; z: any; alpha: any }) => {
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
		xyz65: (rec2020: any) => {
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
	parse: string[];
	serialize: string;
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
