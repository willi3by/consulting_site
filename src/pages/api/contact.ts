import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData.entries());
  console.log('Contact form submission:', payload);
  return redirect('/contact?submitted=1');
};
