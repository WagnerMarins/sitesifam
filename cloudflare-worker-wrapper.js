import nitroHandler from './server.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    const isAsset =
      url.pathname.startsWith('/assets/') ||
      url.pathname.startsWith('/_') ||
      /\.(css|js|png|jpg|jpeg|svg|ico|woff2?|ttf|json|webmanifest)$/.test(url.pathname);

    if (isAsset && env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return nitroHandler.fetch(request, env, ctx);
  }
};