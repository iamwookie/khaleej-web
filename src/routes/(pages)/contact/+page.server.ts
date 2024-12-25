import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
        
		const name = data.get('name');
		const vatsimCid = data.get('vatsimCid');
		const email = data.get('email');
		const message = data.get('message');

		// Add further email logic here, for now we will just log the data
		console.log({ name, vatsimCid, email, message });

		// Return a response to the client, for now we just fail until we add logic
		return { fail: true };
	}
};
