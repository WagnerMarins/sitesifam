import type { LucideIcon } from "lucide-react";
import { CheckCircle2, MapPin, Clock, Phone } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloating, WHATSAPP_URL, PHONE_DISPLAY, PHONE_TEL } from "@/components/WhatsAppButton";

export type LandingProps = {
  icon: LucideIcon;
  h1: string;
  kicker: string;
  intro: string;
  benefits: string[];
  faqs: { q: string; a: string }[];
};

export function LandingPage({ icon: Icon, h1, kicker, intro, benefits, faqs }: LandingProps) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="bg-gradient-to-b from-accent/60 to-background">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.1fr_1fr] md:py-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-deep">
                <Icon className="h-4 w-4" /> {kicker}
              </span>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-primary-deep sm:text-4xl md:text-5xl">
                {h1}
              </h1>
              <p className="mt-4 text-base text-foreground/80 sm:text-lg">{intro}</p>
              <ul className="mt-6 space-y-2">
                {benefits.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-foreground/85">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" /> {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[var(--color-whatsapp)] px-5 py-3 text-sm font-semibold text-white shadow-soft"
                >
                  Agendar pelo WhatsApp
                </a>
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-primary-deep"
                >
                  <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <aside className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <h2 className="text-lg font-semibold text-primary-deep">Atendimento em Goiânia</h2>
              <ul className="mt-3 space-y-3 text-sm text-foreground/85">
                <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" /> R. 9-A, 210 — 2º Andar, Setor Aeroporto, Goiânia/GO · 74075-250</li>
                <li className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-secondary" /> Seg a Sex 07h–19h · Sáb 07h–13h</li>
                <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-secondary" /> {PHONE_DISPLAY}</li>
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block rounded-full bg-primary-deep px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Quero agendar agora
              </a>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-bold text-primary-deep sm:text-3xl">Perguntas frequentes</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border border-border bg-card p-5">
                <h3 className="text-base font-semibold text-primary-deep">{f.q}</h3>
                <p className="mt-2 text-sm text-foreground/80">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFloating />
    </div>
  );
}

export function buildFaqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function buildServiceJsonLd(opts: {
  url: string;
  serviceName: string;
  description: string;
  specialty: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${opts.url}#clinic`,
    name: "Clínica Sifam - Saúde Integrada da Família",
    url: opts.url,
    telephone: "+55-62-99934-0065",
    email: "contato@clinicasifam.com.br",
    taxID: "42.243.855/0001-93",
    priceRange: "$",
    description: opts.description,
    medicalSpecialty: opts.specialty,
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. 9-A, 210 - 2º Andar - Setor Aeroporto",
      addressLocality: "Goiânia",
      addressRegion: "GO",
      postalCode: "74075-250",
      addressCountry: "BR",
    },
    areaServed: { "@type": "City", name: "Goiânia" },
    availableService: { "@type": "MedicalProcedure", name: opts.serviceName },
  };
}
