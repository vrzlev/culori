export default definition;
declare namespace definition {
	const mode: string;
	const parse: string[];
	const serialize: string;
	namespace toMode {
		export { convertDlabToLab65 as lab65 };
		export function rgb(c: any): {
			mode: string;
			r: number;
			g: number;
			b: number;
		};
	}
	namespace fromMode {
		export { convertLab65ToDlab as lab65 };
		export function rgb_1(c: any): {
			mode: string;
			l: any;
			a: number;
			b: number;
		};
		export { rgb_1 as rgb };
	}
	const channels: string[];
	namespace ranges {
		const l: number[];
		const a: number[];
		const b: number[];
	}
	namespace interpolate {
		export { interpolatorLinear as l };
		export { interpolatorLinear as a };
		export { interpolatorLinear as b };
		export namespace alpha {
			export { interpolatorLinear as use };
			export { fixupAlpha as fixup };
		}
	}
}
declare function convertDlabToLab65(c: any): {
	mode: string;
	l: number;
};
declare function convertLab65ToDlab(c: any): {
	mode: string;
	l: any;
	a: number;
	b: number;
};
import { interpolatorLinear } from '../interpolate/linear.js';
import { fixupAlpha } from '../fixup/alpha.js';
//# sourceMappingURL=definition.d.ts.map
