export default definition;
declare namespace definition {
	const mode: string;
	namespace toMode {
		export { convertHsvToRgb as rgb };
	}
	const parse: string[];
	const serialize: string;
	namespace fromMode {
		export { convertRgbToHsv as rgb };
	}
	const channels: string[];
	namespace ranges {
		const h: number[];
	}
	namespace interpolate {
		export namespace h_1 {
			export { interpolatorLinear as use };
			export { fixupHueShorter as fixup };
		}
		export { h_1 as h };
		export { interpolatorLinear as s };
		export { interpolatorLinear as v };
		export namespace alpha {
			export { interpolatorLinear as use };
			export { fixupAlpha as fixup };
		}
	}
	namespace difference {
		export { differenceHueSaturation as h };
	}
	namespace average {
		export { averageAngle as h };
	}
}
import convertHsvToRgb from './convertHsvToRgb.js';
import convertRgbToHsv from './convertRgbToHsv.js';
import { interpolatorLinear } from '../interpolate/linear.js';
import { fixupHueShorter } from '../fixup/hue.js';
import { fixupAlpha } from '../fixup/alpha.js';
import { differenceHueSaturation } from '../difference.js';
import { averageAngle } from '../average.js';
//# sourceMappingURL=definition.d.ts.map
