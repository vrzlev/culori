export function differenceHueChroma(std: any, smp: any): number;
export function differenceHueSaturation(std: any, smp: any): number;
export function differenceHueNaive(std: any, smp: any): number;
export function differenceEuclidean(
	mode?: string,
	weights?: number[]
): (std: any, smp: any) => number;
export function differenceCie76(): (std: any, smp: any) => number;
export function differenceCie94(
	kL?: number,
	K1?: number,
	K2?: number
): (std: any, smp: any) => number;
export function differenceCiede2000(
	Kl?: number,
	Kc?: number,
	Kh?: number
): (std: any, smp: any) => number;
export function differenceCmc(
	l?: number,
	c?: number
): (std: any, smp: any) => number;
export function differenceHyab(): (std: any, smp: any) => number;
export function differenceKotsarenkoRamos(): (std: any, smp: any) => number;
//# sourceMappingURL=difference.d.ts.map
