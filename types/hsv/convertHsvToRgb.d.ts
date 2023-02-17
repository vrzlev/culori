export default function convertHsvToRgb({
	h,
	s,
	v,
	alpha
}: {
	h: any;
	s: any;
	v: any;
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
//# sourceMappingURL=convertHsvToRgb.d.ts.map
