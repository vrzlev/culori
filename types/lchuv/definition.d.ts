export default definition;
declare namespace definition {
	const mode: string;
	namespace toMode {
		export { convertLchuvToLuv as luv };
		export { convertLchuvToRgb as rgb };
	}
	namespace fromMode {
		export { convertRgbToLchuv as rgb };
		export { convertLuvToLchuv as luv };
	}
	const channels: string[];
	const parse: string[];
	const serialize: string;
	namespace ranges {
		const l: number[];
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
import convertLchuvToLuv from './convertLchuvToLuv.js';
declare function convertLchuvToRgb(lchuv: any): {
	mode: string;
	r: number;
	g: number;
	b: number;
};
declare function convertRgbToLchuv(rgb: any): {
	mode: string;
	l: any;
	c: number;
};
import convertLuvToLchuv from './convertLuvToLchuv.js';
import { interpolatorLinear } from '../interpolate/linear.js';
import { fixupHueShorter } from '../fixup/hue.js';
import { fixupAlpha } from '../fixup/alpha.js';
import { differenceHueChroma } from '../difference.js';
import { averageAngle } from '../average.js';
//# sourceMappingURL=definition.d.ts.map
