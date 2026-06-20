import { createFileRoute } from "@tanstack/react-router";
import { HandHeart } from "lucide-react";
import { LandingPage, buildFaqJsonLd, buildServiceJsonLd } from "@/components/LandingPage";

const URL = "https://www.clinicasifam.com.br/ginecologista-em-goiania";
const TITLE = "Ginecologista em Goiânia | Setor Aeroporto | Clínica Sifam";
const DESC = "Ginecologista e obstetra em Goiânia, no Setor Aeroporto. Preventivo, pré-natal, ultrassom e planejamento familiar. Agende pelo WhatsApp.";

const faqs = [
  { q: "A consulta inclui preventivo (Papanicolau)?", a: "O preventivo é realizado conforme indicação clínica na própria consulta ou em retorno agendado." },
  { q: "Vocês fazem pré-natal completo?", a: "Sim. Acompanhamento de pré-natal de baixo e médio risco, com ultrassom obstétrico e morfológico na clínica." },
  { q: "Qual o endereço da ginecologista no Setor Aeroporto?", a: "R. 9-A, 210 — 2º Andar, Setor Aeroporto, Goiânia/GO · CEP 74075-250." },
  { q: "Atende convênios?", a: "Sim, IMAS e IPASGO, além de particular com preço justo. Pagamentos em cartão, Pix e dinheiro." },
];

export const Route = createFileRoute("/ginecologista-em-goiania")({
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
      { type: "application/ld+json", children: JSON.stringify(buildServiceJsonLd({ url: URL, serviceName: "Consulta de Ginecologia e Obstetrícia", description: DESC, specialty: "Gynecologic" })) },
      { type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(faqs)) },
    ],
  }),
  component: () => (
    <LandingPage
      icon={HandHeart}
      kicker="Ginecologia · Setor Aeroporto"
      h1="Ginecologista em Goiânia — Setor Aeroporto"
      intro="Saúde da mulher em todas as fases da vida: preventivo, pré-natal, planejamento familiar e ultrassom obstétrico, com atendimento humanizado no Setor Aeroporto."
      benefits={[
        "Dra. Pâmela D. Oliveira Schelle · CRM/GO 20101 · RQE 1248",
        "Dra. Cássia de Souza Rebouças · CRM/GO 21555 · RQE 13887",
        "Ultrassom obstétrico, morfológico e ginecológico na clínica",
        "Convênios IMAS e IPASGO · particular com preço justo",
      ]}
      faqs={faqs}
    />
  ),
});
