export default definition;
declare namespace definition {
	const mode: string;
	const parse: string[];
	const serialize: string;
	namespace toMode {
		export { convertXyz50ToRgb as rgb };
		export { convertXyz50ToLab as lab };
	}
	namespace fromMode {
		export { convertRgbToXyz50 as rgb };
		export { convertLabToXyz50 as lab };
	}
	const channels: string[];
	namespace ranges {
		const x: number[];
		const y: number[];
		const z: number[];
	}
	namespace interpolate {
		export { interpolatorLinear as x };
		export { interpolatorLinear as y };
		export { interpolatorLinear as z };
		export namespace alpha {
			export { interpolatorLinear as use };
			export { fixupAlpha as fixup };
		}
	}
}
import convertXyz50ToRgb from './convertXyz50ToRgb.js';
import convertXyz50ToLab from '../lab/convertXyz50ToLab.js';
import convertRgbToXyz50 from './convertRgbToXyz50.js';
import convertLabToXyz50 from '../lab/convertLabToXyz50.js';
import { interpolatorLinear } from '../interpolate/linear.js';
import { fixupAlpha } from '../fixup/alpha.js';
//# sourceMappingURL=definition.d.ts.map
