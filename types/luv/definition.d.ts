export default definition;
declare namespace definition {
	const mode: string;
	namespace toMode {
		export { convertLuvToXyz50 as xyz50 };
		export function rgb(luv: any): {
			mode: string;
			r: number;
			g: number;
			b: number;
		};
	}
	namespace fromMode {
		export { convertXyz50ToLuv as xyz50 };
		export function rgb_1(rgb: any): {
			mode: string;
			l: number;
			u: number;
			v: number;
		};
		export { rgb_1 as rgb };
	}
	const channels: string[];
	const parse: string[];
	const serialize: string;
	namespace ranges {
		const l: number[];
		const u: number[];
		const v: number[];
	}
	namespace interpolate {
		export { interpolatorLinear as l };
		export { interpolatorLinear as u };
		export { interpolatorLinear as v };
		export namespace alpha {
			export { interpolatorLinear as use };
			export { fixupAlpha as fixup };
		}
	}
}
import convertLuvToXyz50 from './convertLuvToXyz50.js';
import convertXyz50ToLuv from './convertXyz50ToLuv.js';
import { interpolatorLinear } from '../interpolate/linear.js';
import { fixupAlpha } from '../fixup/alpha.js';
//# sourceMappingURL=definition.d.ts.map
