import { form } from '$app/server';
import { type } from 'arktype';
import { colocationPlans } from '$lib/data/colocationPlans';
import { AUTUMN_SECRET_KEY } from '$env/static/private';
import { Autumn } from 'autumn-js';

const planNames = colocationPlans.map((p) => p.name);
const planType = type.enumerated(...planNames);

const reserveSchema = type({
	plan: planType,
	name: 'string.trim & /\\S/',
	email: 'string.trim & string.email'
});

export type ReserveInput = typeof reserveSchema.infer;

export type ReserveResult =
	| {
			ok: true;
			paymentLink: string;
	  }
	| {
			ok: false;
			error: string;
	  };

// TODO: Integrate with payment provider (Autumn)
async function createPaymentLink(plan: string, email: string, name: string): Promise<string> {
	const user_id = crypto.randomUUID();
	const autumn = new Autumn({ secretKey: AUTUMN_SECRET_KEY });

	await autumn.customers.getOrCreate({
		customerId: user_id,
		name: name,
		email: email
	});

	const response = await autumn.billing.attach({
		customerId: user_id,
		planId: plan,
		successUrl: "https://fyrastack.com/services/colocation?success=true"
	});

	// Stub - will return actual payment link from Autumn
	return response.paymentUrl as string;
}

export const reserve = form(
	reserveSchema,
	async (data): Promise<ReserveResult> => {
		const paymentLink = await createPaymentLink(data.plan, data.email, data.name);
		return { ok: true, paymentLink };
	}
);
