import { redirect } from '@sveltejs/kit';

export const load = () => {
    throw redirect(302, 'https://www.youtube.com/@matuz_0117');
};