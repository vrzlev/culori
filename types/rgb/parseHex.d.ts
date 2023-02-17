export default parseHex;
declare function parseHex(color: any):
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
//# sourceMappingURL=parseHex.d.ts.map
