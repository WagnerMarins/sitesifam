export async function onRequest(context) {
  const { request, env, next } = context;
  try {
    return await next();
  } catch {
    return new Response("Not found", { status: 404 });
  }
}