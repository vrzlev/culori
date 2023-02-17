export default parseNumber;
declare function parseNumber(
	color: any,
	len: any
):
	| {
			mode: string;
			r: number;
			g: number;
			b: number;
			alpha?: undefined;
	  }
	| {
			mode: string;
			r: number;
			g: number;
			b: number;
			alpha: number;
	  };
//# sourceMappingURL=parseNumber.d.ts.map
