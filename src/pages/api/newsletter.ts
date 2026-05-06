import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData.entries());
  console.log('Newsletter signup:', payload);
  return redirect('/?subscribed=1');
};
