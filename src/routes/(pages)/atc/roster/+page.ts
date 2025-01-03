import type { PageLoad } from './$types';
import type { Controller } from '$lib/types';

import data from '$lib/data/roster.json';

export const load: PageLoad = async () => {
	const residents: Controller[] = data;
	const visitors: Controller[] = data;

	return {
		residents,
		visitors
	};
};
