const invariant = values => values;

const monotone = (Vim1, Vi, Vip1, Vip2, h, t) => {
	let h2 = h * h;
	let t2 = t * t;
	let t3 = t2 * t;

	let s1 = (Vip1 - Vim1) / h;
	let s2 = (Vip2 - Vi) / h;
	let s3 = (Vip1 - Vi) / h;

	return (
		(0.5 * s1 + 0.5 * s2 - 2 * s3) / h2 * t3 +
		(3 * s3 - s1 - 0.5 * s2) / h * t2 + 
		0.5 * s1 * t +
		Vi
	);
}

export default (normalize = invariant, γ = 1) => 
	(arr, t) => {

		t = Math.pow(t, γ);

		let classes = arr.length - 1;
		let i = t === 1 ? classes - 1 : Math.floor(t * classes);

		let h = 1 / classes;
		let Vi = arr[i];
		let Vip1 = arr[i + 1];

		let Vim1 = i > 0 ? arr[i-1] : 2 * Vi - Vip1;
		let Vip2 = i < classes - 1 ? arr[i+2] : 2 * Vip1 - Vi;

		let v = normalize([Vim1, Vi, Vip1, Vip2]);

		return typeof v === 'object' ? 
			monotone(v[0], v[1], v[2], v[3], h, (t - i / classes) * classes) : v;
	};