import { createFileRoute } from "@tanstack/react-router";
import { Scan } from "lucide-react";
import { LandingPage, buildFaqJsonLd, buildServiceJsonLd } from "@/components/LandingPage";

const URL = "https://www.clinicasifam.com.br/ultrassom-setor-aeroporto";
const TITLE = "Ultrassom no Setor Aeroporto, Goiânia | Clínica Sifam";
const DESC = "Ultrassom no Setor Aeroporto, Goiânia: abdominal, pélvico, obstétrico, morfológico e Doppler. Preço justo e laudo rápido. Agende pelo WhatsApp.";

const faqs = [
  { q: "Quais ultrassons vocês fazem?", a: "Abdominal total, pélvico, transvaginal, obstétrico, morfológico, Doppler vascular e Ecodoppler de carótidas e vertebrais." },
  { q: "Preciso de jejum?", a: "Ultrassom abdominal exige jejum de 6 a 8 horas. Os demais variam — confirme pelo WhatsApp no agendamento." },
  { q: "Em quanto tempo sai o laudo?", a: "Em geral em até 48h úteis. Casos urgentes podem sair no mesmo dia." },
  { q: "Qual o endereço?", a: "R. 9-A, 210 — 2º Andar, Setor Aeroporto, Goiânia/GO · CEP 74075-250." },
];

export const Route = createFileRoute("/ultrassom-setor-aeroporto")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { property: "og:locale", content: "pt_BR" },
      { name: "geo.region", content: "BR-GO" },
      { name: "geo.placename", content: "Goiânia" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildServiceJsonLd({ url: URL, serviceName: "Exames de Ultrassonografia e Doppler", description: DESC, specialty: "DiagnosticImaging" })) },
      { type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(faqs)) },
    ],
  }),
  component: () => (
    <LandingPage
      icon={Scan}
      kicker="Ultrassom · Setor Aeroporto"
      h1="Ultrassom no Setor Aeroporto — Goiânia"
      intro="Ultrassonografia e Doppler com equipamento moderno e laudo rápido, na Clínica Sifam, no Setor Aeroporto, em Goiânia. Conforto, preço justo e marcação rápida pelo WhatsApp."
      benefits={[
        "Ultrassom abdominal, pélvico, transvaginal e obstétrico",
        "Ultrassom morfológico de 1º e 2º trimestre",
        "Doppler vascular de membros e Ecodoppler de carótidas",
        "Laudo médico em até 48h úteis",
      ]}
      faqs={faqs}
    />
  ),
});
