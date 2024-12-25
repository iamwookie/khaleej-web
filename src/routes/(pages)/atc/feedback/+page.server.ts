import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const pilotName = data.get('pilotName');
		const interactionDate = data.get('interactionDate');
		const atcName = data.get('atcName');
		const atcCallsign = data.get('atcCallsign');
		const rating = data.get('rating');
		const feedback = data.get('feedback');

		// Add further email logic here, for now we will just log the data
		console.log({ pilotName, interactionDate, atcName, atcCallsign, rating, feedback });

		// Return a response to the client, for now we just fail until we add logic
		return { fail: true };
	}
};
