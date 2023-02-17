export default definition;
declare namespace definition {
	const mode: string;
	namespace toMode {
		export { convertLchToLab as lab };
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
			l: any;
			c: number;
		};
		export { rgb_1 as rgb };
		export { convertLabToLch as lab };
	}
	const channels: string[];
	namespace ranges {
		const l: number[];
		const c: number[];
		const h: number[];
	}
	const parse: ((color: any) => {
		mode: string;
	})[];
	function serialize(c: any): string;
	namespace interpolate {
		export namespace h_1 {
			export { interpolatorLinear as use };
			export { fixupHueShorter as fixup };
		}
		export { h_1 as h };
		export { interpolatorLinear as c };
		export { interpolatorLinear as l };
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
import convertLchToLab from './convertLchToLab.js';
import convertLabToLch from './convertLabToLch.js';
import { interpolatorLinear } from '../interpolate/linear.js';
import { fixupHueShorter } from '../fixup/hue.js';
import { fixupAlpha } from '../fixup/alpha.js';
import { differenceHueChroma } from '../difference.js';
import { averageAngle } from '../average.js';
//# sourceMappingURL=definition.d.ts.map
