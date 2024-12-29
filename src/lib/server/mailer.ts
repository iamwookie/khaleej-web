import { createTransport } from 'nodemailer';

import { MAILER_HOST, MAILER_USER, MAILER_PASS } from '$env/static/private';

export const transporter = createTransport({
	host: MAILER_HOST,
	port: 465,
	secure: true,
	auth: {
		user: MAILER_USER,
		pass: MAILER_PASS
	}
});
