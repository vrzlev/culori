export default definition;
declare namespace definition {
	const mode: string;
	const channels: string[];
	const parse: string[];
	const serialize: string;
	namespace fromMode {
		export { convertRgbToJab as rgb };
		export { convertXyz65ToJab as xyz65 };
	}
	namespace toMode {
		export { convertJabToRgb as rgb };
		export { convertJabToXyz65 as xyz65 };
	}
	namespace ranges {
		const j: number[];
		const a: number[];
		const b: number[];
	}
	namespace interpolate {
		export { interpolatorLinear as j };
		export { interpolatorLinear as a };
		export { interpolatorLinear as b };
		export namespace alpha {
			export { interpolatorLinear as use };
			export { fixupAlpha as fixup };
		}
	}
}
import convertRgbToJab from './convertRgbToJab.js';
import convertXyz65ToJab from './convertXyz65ToJab.js';
import convertJabToRgb from './convertJabToRgb.js';
import convertJabToXyz65 from './convertJabToXyz65.js';
import { interpolatorLinear } from '../interpolate/linear.js';
import { fixupAlpha } from '../fixup/alpha.js';
//# sourceMappingURL=definition.d.ts.map
