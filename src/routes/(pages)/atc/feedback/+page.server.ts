import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import { fail } from '@sveltejs/kit';
import { RateLimiter } from 'sveltekit-rate-limiter/server';
import { superValidate, message } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

import { transporter } from '$lib/server/mailer';

const limiter = new RateLimiter({ IPUA: [1, 'm'] });

const feedbackFormSchema = z.object({
	pilotName: z.string().min(1, 'Required.'),
	interactionDate: z.date(),
	atcName: z.string().min(1, 'Required.'),
	atcCallsign: z.string().min(1, 'Required.'),
	rating: z.number().int().min(0).max(100, 'Rating must be between 1 and 5.').default(50),
	feedback: z.string().min(8, 'Feedback must be at least 8 characters.')
});

export const load: PageServerLoad = async () => {
	const form = await superValidate(zod(feedbackFormSchema));
	return { form };
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event.request, zod(feedbackFormSchema));

		if (!form.valid) return fail(400, { form });
		if (await limiter.isLimited(event)) return message(form, { status: 'error', text: 'Too many requests! Try again after a few minutes.' });

		try {
			const time = new Date();

			const html = `
		    <!doctype html>
		    <html lang="en">
		        <head>
		            <meta charset="UTF-8" />
		            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
		            <title>ATC Feedback Form Submission</title>
		        </head>
		        <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px">
		            <div style="background-color: #ffffff; border-radius: 5px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); padding: 20px; max-width: 600px; margin: auto;">
		                <h2 style="color: #333">ATC Feedback Form Submission</h2>

		                <p style="color: #555"><strong>Pilot Name:</strong> ${form.data.pilotName}</p>
		                <p style="color: #555"><strong>Interaction Date:</strong> ${form.data.interactionDate.toLocaleDateString()}</p>
		                <p style="color: #555"><strong>ATC Name:</strong> ${form.data.atcName}</p>
                        <p style="color: #555"><strong>ATC Callsign:</strong> ${form.data.atcCallsign}</p>
                        <p style="color: #555"><strong>Rating (0-100):</strong> ${form.data.rating}</p>
		                <p style="color: #555"><strong>Feedback:</strong></p>
		                <p style="color: #555">${form.data.feedback}</p>

		                <div style="margin-top: 20px; font-size: 12px; color: #aaa">
		                    <p>Submitted on ${time.toLocaleString()} | IP: ${event.getClientAddress()}</p>
		                </div>
		            </div>
		        </body>
		    </html>
		    `;

			await transporter.sendMail({
				from: 'noreply@khaleejvacc.net',
				to: ['atc@khaleejvacc.net', 'hr@khaleejvacc.net'],
				subject: 'ATC Feedback Form Submission',
				html
			});

			return message(form, { status: 'success', text: 'Your feedback has been sent successfully.' });
		} catch (err) {
			console.error(err);
			// More advanced error handling can be added here in the future
			return message(form, { status: 'error', text: 'Uh oh! An error occured, try again later.' });
		}
	}
};
