export default parseNamed;
declare function parseNamed(color: any):
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
//# sourceMappingURL=parseNamed.d.ts.map
