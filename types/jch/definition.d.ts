export default definition;
declare namespace definition {
	const mode: string;
	const parse: string[];
	const serialize: string;
	namespace toMode {
		export { convertJchToJab as jab };
		export function rgb(c: any): {
			mode: string;
			r: number;
			g: number;
			b: number;
		};
	}
	namespace fromMode {
		export function rgb_1(c: any): {
			mode: string;
			j: any;
			c: number;
		};
		export { rgb_1 as rgb };
		export { convertJabToJch as jab };
	}
	const channels: string[];
	namespace ranges {
		const j: number[];
		const c: number[];
		const h: number[];
	}
	namespace interpolate {
		export namespace h_1 {
			export { interpolatorLinear as use };
			export { fixupHueShorter as fixup };
		}
		export { h_1 as h };
		export { interpolatorLinear as c };
		export { interpolatorLinear as j };
		export namespace alpha {
			export { interpolatorLinear as use };
			export { fixupAlpha as fixup };
		}
	}
	namespace difference {
		export { differenceHueChroma as h };
	}
	namespace average {
		export { averageAngle as h };
	}
}
import convertJchToJab from './convertJchToJab.js';
import convertJabToJch from './convertJabToJch.js';
import { interpolatorLinear } from '../interpolate/linear.js';
import { fixupHueShorter } from '../fixup/hue.js';
import { fixupAlpha } from '../fixup/alpha.js';
import { differenceHueChroma } from '../difference.js';
import { averageAngle } from '../average.js';
//# sourceMappingURL=definition.d.ts.map
