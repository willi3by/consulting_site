export { renderers } from '../../renderers.mjs';

const POST = async ({ request, redirect }) => {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData.entries());
  console.log("Contact form submission:", payload);
  return redirect("/contact?submitted=1");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
