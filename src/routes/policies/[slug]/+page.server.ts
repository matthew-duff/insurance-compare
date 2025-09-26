import { error } from '@sveltejs/kit';
import { getPolicyByType } from '$lib/stores/policyStore';

export async function load({ params }: { params: { slug: string } }) {
    const policyData = getPolicyByType(params.slug);
    
    if (!policyData) {
        throw error(404, 'Policy not found');
    }

    return { policy: policyData };
}; 