export default definition;
declare namespace definition {
	const mode: string;
	namespace toMode {
		export { convertHsiToRgb as rgb };
	}
	const parse: string[];
	const serialize: string;
	namespace fromMode {
		export { convertRgbToHsi as rgb };
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
		export { interpolatorLinear as i };
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
import convertHsiToRgb from './convertHsiToRgb.js';
import convertRgbToHsi from './convertRgbToHsi.js';
import { interpolatorLinear } from '../interpolate/linear.js';
import { fixupHueShorter } from '../fixup/hue.js';
import { fixupAlpha } from '../fixup/alpha.js';
import { differenceHueSaturation } from '../difference.js';
import { averageAngle } from '../average.js';
//# sourceMappingURL=definition.d.ts.map
