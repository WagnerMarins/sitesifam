import { createFileRoute } from "@tanstack/react-router";
import { FlaskConical } from "lucide-react";
import { LandingPage, buildFaqJsonLd, buildServiceJsonLd } from "@/components/LandingPage";

const URL = "https://www.clinicasifam.com.br/exames-laboratoriais-em-goiania";
const TITLE = "Exames Laboratoriais em Goiânia | Setor Aeroporto | Clínica Sifam";
const DESC = "Exames laboratoriais em Goiânia, no Setor Aeroporto: hemograma, glicemia, hormônios, sorologias e mais. Coleta rápida e preço justo. Agende pelo WhatsApp.";

const faqs = [
  { q: "Quais exames laboratoriais vocês fazem?", a: "Hemograma, glicemia, hemoglobina glicada, colesterol, triglicerídeos, TSH/T4, PSA, Beta HCG, sorologias, urocultura, EAS, vitamina D, B12, ferro e ferritina, entre outros." },
  { q: "Precisa de jejum?", a: "Depende do exame. Glicemia, colesterol e triglicerídeos costumam exigir 8h de jejum. Confirme pelo WhatsApp no agendamento." },
  { q: "Em quanto tempo sai o resultado?", a: "A maior parte dos exames de rotina sai em 1 a 3 dias úteis." },
  { q: "Qual o endereço do laboratório?", a: "R. 9-A, 210 — 2º Andar, Setor Aeroporto, Goiânia/GO · CEP 74075-250." },
];

export const Route = createFileRoute("/exames-laboratoriais-em-goiania")({
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
      { type: "application/ld+json", children: JSON.stringify(buildServiceJsonLd({ url: URL, serviceName: "Exames Laboratoriais", description: DESC, specialty: "Pathology" })) },
      { type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(faqs)) },
    ],
  }),
  component: () => (
    <LandingPage
      icon={FlaskConical}
      kicker="Laboratório · Setor Aeroporto"
      h1="Exames Laboratoriais em Goiânia — Setor Aeroporto"
      intro="Coleta e análise de exames laboratoriais com preço justo e prazo rápido, na Clínica Sifam, no Setor Aeroporto, em Goiânia. Agende sua coleta pelo WhatsApp."
      benefits={[
        "Hemograma, glicemia, perfil lipídico e função renal",
        "Tireoide (TSH/T4), PSA, Beta HCG e sorologias",
        "Vitamina D, B12, ferro e ferritina",
        "Resultados em 1 a 3 dias úteis na maior parte dos exames",
      ]}
      faqs={faqs}
    />
  ),
});
