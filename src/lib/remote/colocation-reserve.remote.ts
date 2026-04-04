import { form } from '$app/server';
import { type } from 'arktype';
import { colocationPlans } from '$lib/data/colocationPlans';

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
async function createPaymentLink(plan: string, email: string): Promise<string> {
	// Stub - will return actual payment link from Autumn
	return `https://pay.fyrastack.com/checkout/${plan.toLowerCase()}/${Date.now()}`;
}

export const reserve = form(
	reserveSchema,
	async (data): Promise<ReserveResult> => {
		const paymentLink = await createPaymentLink(data.plan, data.email);
		return { ok: true, paymentLink };
	}
);
