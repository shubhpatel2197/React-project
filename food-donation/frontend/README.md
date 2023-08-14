void rangeupdate(ll node, ll low, ll high, ll l, ll r, ll val) {

	if (lazy[node] != 0) {
		tree[node] += (high - low + 1) * lazy[node];
		if (low != high) {
			lazy[2 * node] += lazy[node];
			lazy[2 * node + 1] += lazy[node];
		}

		lazy[node] = 0;
	}

	if (r < low || l > high || low > high) return;

	if (low >= l && high <= r) {
		tree[node] += (high - low + 1) * val;

		if (low != high) {

			lazy[2 * node] += val;
			lazy[2 * node + 1] += val;
		}
		return;
	}

	ll mid = (low + high) / 2;

	rangeupdate(2 * node, low, mid, l, r, val);
	rangeupdate(2 * node + 1, mid + 1, high, l, r, val);

	tree[node] = tree[2 * node + 1] + tree[2 * node];


}