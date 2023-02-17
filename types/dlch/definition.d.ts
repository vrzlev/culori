export default definition;
declare namespace definition {
	const mode: string;
	const parse: string[];
	const serialize: string;
	namespace toMode {
		export { convertDlchToLab65 as lab65 };
		export function dlab(c: any): {
			mode: string;
			l: any;
			a: number;
			b: number;
		};
		export function rgb(c: any): {
			mode: string;
			r: number;
			g: number;
			b: number;
		};
	}
	namespace fromMode {
		export { convertLab65ToDlch as lab65 };
		export function dlab_1(c: any): {
			mode: string;
			l: any;
			c: number;
		};
		export { dlab_1 as dlab };
		export function rgb_1(c: any): {
			mode: string;
			l: number;
			c: number;
		};
		export { rgb_1 as rgb };
	}
	const channels: string[];
	namespace ranges {
		const l: number[];
		const c: number[];
		const h: number[];
	}
	namespace interpolate {
		export { interpolatorLinear as l };
		export { interpolatorLinear as c };
		export namespace h_1 {
			export { interpolatorLinear as use };
			export { fixupHueShorter as fixup };
		}
		export { h_1 as h };
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
import convertDlchToLab65 from './convertDlchToLab65.js';
import convertLab65ToDlch from './convertLab65ToDlch.js';
import { interpolatorLinear } from '../interpolate/linear.js';
import { fixupHueShorter } from '../fixup/hue.js';
import { fixupAlpha } from '../fixup/alpha.js';
import { differenceHueChroma } from '../difference.js';
import { averageAngle } from '../average.js';
//# sourceMappingURL=definition.d.ts.map
