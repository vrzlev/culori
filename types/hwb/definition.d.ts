export default definition;
declare namespace definition {
	const mode: string;
	namespace toMode {
		export { convertHwbToRgb as rgb };
	}
	namespace fromMode {
		export { convertRgbToHwb as rgb };
	}
	const channels: string[];
	namespace ranges {
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
		export { interpolatorLinear as w };
		export { interpolatorLinear as b };
		export namespace alpha {
			export { interpolatorLinear as use };
			export { fixupAlpha as fixup };
		}
	}
	namespace difference {
		export { differenceHueNaive as h };
	}
	namespace average {
		export { averageAngle as h };
	}
}
import convertHwbToRgb from './convertHwbToRgb.js';
import convertRgbToHwb from './convertRgbToHwb.js';
import { interpolatorLinear } from '../interpolate/linear.js';
import { fixupHueShorter } from '../fixup/hue.js';
import { fixupAlpha } from '../fixup/alpha.js';
import { differenceHueNaive } from '../difference.js';
import { averageAngle } from '../average.js';
//# sourceMappingURL=definition.d.ts.map
