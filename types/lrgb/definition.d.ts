export default definition;
declare const definition: {
	mode: string;
	toMode: {
		rgb: (
			{
				r,
				g,
				b,
				alpha
			}: {
				r: any;
				g: any;
				b: any;
				alpha: any;
			},
			mode?: string
		) => {
			mode: string;
			r: number;
			g: number;
			b: number;
		};
	};
	fromMode: {
		rgb: ({ r, g, b, alpha }: { r: any; g: any; b: any; alpha: any }) => {
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
