export default definition;
declare namespace definition {
	const mode: string;
	namespace toMode {
		export { convertHslToRgb as rgb };
	}
	namespace fromMode {
		export { convertRgbToHsl as rgb };
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
import convertHslToRgb from './convertHslToRgb.js';
import convertRgbToHsl from './convertRgbToHsl.js';
import { interpolatorLinear } from '../interpolate/linear.js';
import { fixupHueShorter } from '../fixup/hue.js';
import { fixupAlpha } from '../fixup/alpha.js';
import { differenceHueSaturation } from '../difference.js';
import { averageAngle } from '../average.js';
//# sourceMappingURL=definition.d.ts.map
