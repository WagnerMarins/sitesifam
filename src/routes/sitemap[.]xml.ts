import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://www.clinicasifam.com.br";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/ortopedista-em-goiania", changefreq: "monthly", priority: "0.9" },
          { path: "/ginecologista-em-goiania", changefreq: "monthly", priority: "0.9" },
          { path: "/cardiologista-em-goiania", changefreq: "monthly", priority: "0.9" },
          { path: "/pediatra-em-goiania", changefreq: "monthly", priority: "0.9" },
          { path: "/ultrassom-setor-aeroporto", changefreq: "monthly", priority: "0.9" },
          { path: "/exames-laboratoriais-em-goiania", changefreq: "monthly", priority: "0.9" },
        ];
        const urls = entries.map(
          (e) =>
            `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
