export default definition;
declare namespace definition {
	const mode: string;
	namespace toMode {
		export { convertXyz65ToRgb as rgb };
		export { convertXyz65ToXyz50 as xyz50 };
	}
	namespace fromMode {
		export { convertRgbToXyz65 as rgb };
		export { convertXyz50ToXyz65 as xyz50 };
	}
	namespace ranges {
		const x: number[];
		const y: number[];
		const z: number[];
	}
	const channels: string[];
	const parse: string[];
	const serialize: string;
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
import convertXyz65ToRgb from './convertXyz65ToRgb.js';
import convertXyz65ToXyz50 from './convertXyz65ToXyz50.js';
import convertRgbToXyz65 from './convertRgbToXyz65.js';
import convertXyz50ToXyz65 from './convertXyz50ToXyz65.js';
import { interpolatorLinear } from '../interpolate/linear.js';
import { fixupAlpha } from '../fixup/alpha.js';
//# sourceMappingURL=definition.d.ts.map
