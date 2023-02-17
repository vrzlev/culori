export default function convertHwbToRgb({
	h,
	w,
	b,
	alpha
}: {
	h: any;
	w: any;
	b: any;
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
//# sourceMappingURL=convertHwbToRgb.d.ts.map
