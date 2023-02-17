export default definition;
declare namespace definition {
	const mode: string;
	const channels: string[];
	const parse: string[];
	const serialize: string;
	namespace ranges {
		const h: number[];
		const s: number[];
		const l: number[];
	}
	namespace fromMode {
		export { convertRgbToCubehelix as rgb };
	}
	namespace toMode {
		export { convertCubehelixToRgb as rgb };
	}
	namespace interpolate {
		export namespace h_1 {
			export { interpolatorLinear as use };
			export { fixupHueShorter as fixup };
		}
		export { h_1 as h };
		export { interpolatorLinear as s };
		export { interpolatorLinear as l };
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
import convertRgbToCubehelix from './convertRgbToCubehelix.js';
import convertCubehelixToRgb from './convertCubehelixToRgb.js';
import { interpolatorLinear } from '../interpolate/linear.js';
import { fixupHueShorter } from '../fixup/hue.js';
import { fixupAlpha } from '../fixup/alpha.js';
import { differenceHueSaturation } from '../difference.js';
import { averageAngle } from '../average.js';
//# sourceMappingURL=definition.d.ts.map
