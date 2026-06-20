import { createFileRoute } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { LandingPage, buildFaqJsonLd, buildServiceJsonLd } from "@/components/LandingPage";

const URL = "https://www.clinicasifam.com.br/cardiologista-em-goiania";
const TITLE = "Cardiologista em Goiânia | Setor Aeroporto | Clínica Sifam";
const DESC = "Cardiologista em Goiânia, no Setor Aeroporto. Consulta, ECG, Holter 24h, MAPA e Teste Ergométrico no mesmo lugar. Agende pelo WhatsApp.";

const faqs = [
  { q: "Faço ECG, Holter e MAPA no mesmo dia?", a: "Sim, dependendo da agenda. Confirme disponibilidade pelo WhatsApp para concentrar os exames na mesma visita." },
  { q: "Preciso de jejum para o ECG?", a: "Não. O ECG não exige jejum e dura poucos minutos." },
  { q: "Qual o endereço do cardiologista no Setor Aeroporto?", a: "R. 9-A, 210 — 2º Andar, Setor Aeroporto, Goiânia/GO · CEP 74075-250." },
  { q: "Atende convênio?", a: "Sim, IMAS e IPASGO, além de particular com preço justo." },
];

export const Route = createFileRoute("/cardiologista-em-goiania")({
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
      { type: "application/ld+json", children: JSON.stringify(buildServiceJsonLd({ url: URL, serviceName: "Consulta de Cardiologia com ECG, Holter e MAPA", description: DESC, specialty: "Cardiology" })) },
      { type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(faqs)) },
    ],
  }),
  component: () => (
    <LandingPage
      icon={Heart}
      kicker="Cardiologia · Setor Aeroporto"
      h1="Cardiologista em Goiânia — Setor Aeroporto"
      intro="Avaliação cardiológica completa, com ECG, Holter 24h, MAPA 24h e Teste Ergométrico realizados na própria clínica, no Setor Aeroporto, em Goiânia."
      benefits={[
        "Dr. Albérico Borges de Carvalho Neto · CRM/GO 5459 · RQE 12234",
        "ECG, Holter 24h, MAPA 24h e Teste Ergométrico no mesmo local",
        "Acompanhamento de hipertensão, arritmias e check-up cardiológico",
        "Convênios IMAS e IPASGO · particular com preço justo",
      ]}
      faqs={faqs}
    />
  ),
});
