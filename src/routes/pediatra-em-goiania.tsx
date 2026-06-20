import { createFileRoute } from "@tanstack/react-router";
import { Baby } from "lucide-react";
import { LandingPage, buildFaqJsonLd, buildServiceJsonLd } from "@/components/LandingPage";

const URL = "https://www.clinicasifam.com.br/pediatra-em-goiania";
const TITLE = "Pediatra em Goiânia | Setor Aeroporto | Clínica Sifam";
const DESC = "Pediatra em Goiânia, no Setor Aeroporto. Consultas para bebês, crianças e adolescentes, com acompanhamento humanizado. Agende pelo WhatsApp.";

const faqs = [
  { q: "Qual a faixa etária atendida?", a: "Atendemos de 0 a 12 anos, do recém-nascido ao pré-adolescente." },
  { q: "Vocês emitem atestado escolar?", a: "Sim. Atestados, declarações de comparecimento e laudos médicos quando indicados." },
  { q: "Qual o endereço da pediatria no Setor Aeroporto?", a: "R. 9-A, 210 — 2º Andar, Setor Aeroporto, Goiânia/GO · CEP 74075-250." },
  { q: "Atende convênio?", a: "Sim, IMAS e IPASGO, além de particular com preço justo." },
];

export const Route = createFileRoute("/pediatra-em-goiania")({
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
      { type: "application/ld+json", children: JSON.stringify(buildServiceJsonLd({ url: URL, serviceName: "Consulta de Pediatria", description: DESC, specialty: "Pediatric" })) },
      { type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(faqs)) },
    ],
  }),
  component: () => (
    <LandingPage
      icon={Baby}
      kicker="Pediatria · Setor Aeroporto"
      h1="Pediatra em Goiânia — Setor Aeroporto"
      intro="Consultas pediátricas de rotina, puericultura, acompanhamento do crescimento e cuidado da saúde infantil em ambiente humanizado, no Setor Aeroporto, em Goiânia."
      benefits={[
        "Equipe pediátrica Sifam — atendimento de 0 a 12 anos",
        "Puericultura e acompanhamento de marcos do desenvolvimento",
        "Orientação de vacinação, sono e alimentação",
        "Convênios IMAS e IPASGO · particular com preço justo",
      ]}
      faqs={faqs}
    />
  ),
});
