export default definition;
declare namespace definition {
	const mode: string;
	namespace toMode {
		export { convertLabToXyz50 as xyz50 };
		export { convertLabToRgb as rgb };
	}
	namespace fromMode {
		export { convertXyz50ToLab as xyz50 };
		export { convertRgbToLab as rgb };
	}
	const channels: string[];
	namespace ranges {
		const l: number[];
		const a: number[];
		const b: number[];
	}
	const parse: ((color: any) => {
		mode: string;
	})[];
	function serialize(c: any): string;
	namespace interpolate {
		export { interpolatorLinear as l };
		export { interpolatorLinear as a };
		export { interpolatorLinear as b };
		export namespace alpha {
			export { interpolatorLinear as use };
			export { fixupAlpha as fixup };
		}
	}
}
import convertLabToXyz50 from './convertLabToXyz50.js';
import convertLabToRgb from './convertLabToRgb.js';
import convertXyz50ToLab from './convertXyz50ToLab.js';
import convertRgbToLab from './convertRgbToLab.js';
import { interpolatorLinear } from '../interpolate/linear.js';
import { fixupAlpha } from '../fixup/alpha.js';
//# sourceMappingURL=definition.d.ts.map
