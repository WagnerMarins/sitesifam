import { createFileRoute } from "@tanstack/react-router";
import { Bone } from "lucide-react";
import { LandingPage, buildFaqJsonLd, buildServiceJsonLd } from "@/components/LandingPage";

const URL = "https://www.clinicasifam.com.br/ortopedista-em-goiania";
const TITLE = "Ortopedista em Goiânia | Setor Aeroporto | Clínica Sifam";
const DESC = "Ortopedista em Goiânia, no Setor Aeroporto. Consultas, infiltrações e cirurgias ortopédicas com preço justo. Agende pelo WhatsApp.";

const faqs = [
  { q: "Quanto custa uma consulta com ortopedista em Goiânia na Sifam?", a: "Praticamos preço popular para consulta particular. Confirme o valor atualizado pelo WhatsApp antes de agendar." },
  { q: "A Clínica Sifam atende convênio?", a: "Sim. Atendemos IMAS, IPASGO e atendimento particular. Cartão, Pix e dinheiro aceitos." },
  { q: "Qual o endereço do ortopedista no Setor Aeroporto?", a: "R. 9-A, 210 — 2º Andar, Setor Aeroporto, Goiânia/GO · CEP 74075-250." },
  { q: "Vocês fazem infiltração e pequenas cirurgias ortopédicas?", a: "Sim. Realizamos infiltrações guiadas e cirurgias ortopédicas eletivas ambulatoriais." },
];

export const Route = createFileRoute("/ortopedista-em-goiania")({
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
      { type: "application/ld+json", children: JSON.stringify(buildServiceJsonLd({ url: URL, serviceName: "Consulta de Ortopedia e Traumatologia", description: DESC, specialty: "Orthopedic" })) },
      { type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(faqs)) },
    ],
  }),
  component: () => (
    <LandingPage
      icon={Bone}
      kicker="Ortopedia · Setor Aeroporto"
      h1="Ortopedista em Goiânia — Setor Aeroporto"
      intro="Avaliação ortopédica completa para coluna, joelho, ombro, quadril e fraturas. Atendimento humanizado, preços justos e marcação rápida pelo WhatsApp, no Setor Aeroporto."
      benefits={[
        "Dr. Érico Neri Duarte — CRM/GO 14974 · RQE 7357",
        "Infiltrações, bloqueios e pequenas cirurgias ortopédicas",
        "Encaminhamento para raio-X, ultrassom e ressonância",
        "Convênios IMAS e IPASGO · particular com preço justo",
      ]}
      faqs={faqs}
    />
  ),
});
