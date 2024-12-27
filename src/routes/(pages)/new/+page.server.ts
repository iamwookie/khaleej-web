import { redirect } from '@sveltejs/kit';

export function load() {
	redirect(307, 'https://vatsim.net/docs/basics/getting-started');
}
