import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
        
		const pilotName = data.get('pilotName');
        const pilotCid = data.get('pilotCid');
		const atcCallsign = data.get('atcCallsign');
		const rating = data.get('email');
		const feedback = data.get('feedback');

		// Add further email logic here, for now we will just log the data
		console.log({ pilotName, pilotCid, atcCallsign, rating, feedback });

		// Return a response to the client, for now we just fail until we add logic
		return { fail: true };
	}
};
