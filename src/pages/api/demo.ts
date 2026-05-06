import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData.entries());
  console.log('Demo request:', payload);
  return redirect('/demo?submitted=1');
};
