export default definition;
declare namespace definition {
	const mode: string;
	const channels: string[];
	const parse: (
		| string
		| ((color: any) => {
				mode: string;
		  })
	)[];
	const serialize: string;
	namespace interpolate {
		export { interpolatorLinear as r };
		export { interpolatorLinear as g };
		export { interpolatorLinear as b };
		export namespace alpha {
			export { interpolatorLinear as use };
			export { fixupAlpha as fixup };
		}
	}
}
import { interpolatorLinear } from '../interpolate/linear.js';
import { fixupAlpha } from '../fixup/alpha.js';
//# sourceMappingURL=definition.d.ts.map
