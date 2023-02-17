export default function convertHslToRgb({
	h,
	s,
	l,
	alpha
}: {
	h: any;
	s: any;
	l: any;
	alpha: any;
}):
	| {
			r: any;
			g: number;
			b: number;
	  }
	| {
			r: number;
			g: any;
			b: number;
	  }
	| {
			r: number;
			g: number;
			b: any;
	  };
//# sourceMappingURL=convertHslToRgb.d.ts.map
