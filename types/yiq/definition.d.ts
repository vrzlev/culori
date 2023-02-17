export default definition;
declare namespace definition {
	const mode: string;
	namespace toMode {
		export { convertYiqToRgb as rgb };
	}
	namespace fromMode {
		export { convertRgbToYiq as rgb };
	}
	const channels: string[];
	const parse: string[];
	const serialize: string;
	namespace ranges {
		const i: number[];
		const q: number[];
	}
	namespace interpolate {
		export { interpolatorLinear as y };
		export { interpolatorLinear as i };
		export { interpolatorLinear as q };
		export namespace alpha {
			export { interpolatorLinear as use };
			export { fixupAlpha as fixup };
		}
	}
}
import convertYiqToRgb from './convertYiqToRgb.js';
import convertRgbToYiq from './convertRgbToYiq.js';
import { interpolatorLinear } from '../interpolate/linear.js';
import { fixupAlpha } from '../fixup/alpha.js';
//# sourceMappingURL=definition.d.ts.map
