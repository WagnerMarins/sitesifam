import nitroHandler from './server.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    const isAsset =
      url.pathname.startsWith('/assets/') ||
      url.pathname.startsWith('/_') ||
      /\.(css|js|png|jpg|jpeg|svg|ico|woff2?|ttf|json|webmanifest)$/.test(url.pathname);

    const isRedirectPage =
      url.pathname === '/laboratorio' ||
      url.pathname === '/laboratorio/' ||
      url.pathname === '/ressonancia' ||
      url.pathname === '/ressonancia/' ||
      url.pathname === '/consultas' ||
      url.pathname === '/consultas/';

    if ((isAsset || isRedirectPage) && env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return nitroHandler.fetch(request, env, ctx);
  }
};
