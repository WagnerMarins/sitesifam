import { createFileRoute } from "@tanstack/react-router";
import {
  Heart, Stethoscope, Baby, Bone, Brain, Ear, Activity, ShieldCheck,
  FlaskConical, Scan, Scissors, Syringe, MapPin, Phone, Clock,
  Award, Users, HandHeart, Sparkles, CheckCircle2,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloating, WHATSAPP_URL, PHONE_DISPLAY, PHONE_TEL } from "@/components/WhatsAppButton";
import heroDoctor from "@/assets/hero-doctor.jpg";
import teamCare from "@/assets/team-care.jpg";
import labImg from "@/assets/lab.jpg";
import imagingImg from "@/assets/imaging.jpg";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": "https://www.clinicasifam.com.br/#clinic",
  name: "Clínica Sifam - Saúde Integrada da Família",
  alternateName: "Clínica Médica SIFAM",
  url: "https://www.clinicasifam.com.br",
  telephone: "+55-62-99934-0065",
  email: "contato@clinicasifam.com.br",
  taxID: "42.243.855/0001-93",
  priceRange: "$",
  image: "https://www.clinicasifam.com.br/og-cover.jpg",
  description:
    "Clínica médica no Setor Aeroporto de Goiânia com 11 especialidades, exames laboratoriais e de imagem, cirurgias ambulatoriais e atendimento humanizado a preços justos.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. 9-A, 210 - 2º Andar - Setor Aeroporto",
    addressLocality: "Goiânia",
    addressRegion: "GO",
    postalCode: "74075-250",
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "07:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "07:00", closes: "13:00" },
  ],
  medicalSpecialty: [
    "Orthopedic","Cardiology","GeneralPractice","Dermatology","Gynecologic","Nephrology","Oncology",
    "Otolaryngology","Pediatric","Pulmonary","Proctology","Psychiatry","Urology",
  ],
  availableService: [
    { "@type": "MedicalProcedure", name: "Consultas médicas em 11 especialidades" },
    { "@type": "MedicalProcedure", name: "Exames laboratoriais" },
    { "@type": "MedicalProcedure", name: "Ultrassom, Doppler, Ecodoppler de Carótidas" },
    { "@type": "MedicalProcedure", name: "ECG, Holter 24h, MAPA 24h, Teste Ergométrico" },
    { "@type": "MedicalProcedure", name: "Pequenas cirurgias e procedimentos ambulatoriais" },
  ],
  paymentAccepted: "Dinheiro, Cartão, Pix, Convênios IMAS e IPASGO",
  sameAs: ["https://www.clinicasifam.com.br"],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clínica Médica no Setor Aeroporto | Sifam Goiânia | Consultas e Exames" },
      { name: "description", content: "Agende sua consulta em Goiânia no Setor Aeroporto. 11 especialidades médicas, exames de imagem e laboratório. Marcação rápida pelo WhatsApp." },
      { name: "keywords", content: "clínica médica setor aeroporto, clínica médica Goiânia, consulta médica Goiânia, exames laboratoriais Goiânia, ultrassom setor aeroporto, ortopedista Goiânia, Clínica Sifam" },
      { name: "author", content: "Clínica Sifam" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Clínica Médica no Setor Aeroporto | Sifam Goiânia" },
      { property: "og:description", content: "11 especialidades, exames de imagem e laboratório no Setor Aeroporto. Agende pelo WhatsApp." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.clinicasifam.com.br" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "Clínica Sifam" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Clínica Médica no Setor Aeroporto | Sifam Goiânia" },
      { name: "twitter:description", content: "Consultas, exames e cirurgias no Setor Aeroporto, Goiânia. Agende pelo WhatsApp." },
      { name: "geo.region", content: "BR-GO" },
      { name: "geo.placename", content: "Goiânia" },
      { name: "geo.position", content: "-16.692; -49.270" },
      { name: "ICBM", content: "-16.692, -49.270" },
    ],
    links: [
      { rel: "canonical", href: "https://www.clinicasifam.com.br" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
    ],
  }),
  component: HomePage,
});

const specialties = [
  { icon: Heart, name: "Cardiologia", doctor: "Dr. Alberico Borges de Carvalho Neto", crm: "CRM/GO 5459 · RQE 12234", desc: "Avaliação cardiológica, ECG, Holter 24h, MAPA e Teste Ergométrico." },
  { icon: Stethoscope, name: "Clínica Geral", doctor: "Dr. Ivanir Rodrigues dos Santos", crm: "CRM/GO 6469", desc: "Check-ups, acompanhamento clínico e cuidado contínuo da família." },
  { icon: Sparkles, name: "Dermatologia", doctor: "Dra. Bárbara Alvim Vieira", crm: "CRM/GO 16558 · RQE 17696", desc: "Pele, cabelo e unhas. Acne, manchas, alergias e procedimentos clínicos." },
  { icon: HandHeart, name: "Ginecologia e Obstetrícia", doctor: "Dra. Pâmela D. Oliveira Schelle · Dra. Cássia de Souza Rebouças", crm: "CRM/GO 20101 · RQE 1248 · CRM/GO 21555 · RQE 13887", desc: "Saúde da mulher, pré-natal, preventivo e planejamento familiar." },
  { icon: Activity, name: "Nefrologia", doctor: "Dr. Gustavo Costa Pontes", crm: "CRM/GO 36947", desc: "Diagnóstico e acompanhamento de doenças renais e hipertensão." },
  { icon: ShieldCheck, name: "Oncologia, Proctologia e Urologia", doctor: "Dr. Antônio Gomes Teles", crm: "CRM/GO 5054 · RQE 2961", desc: "Prevenção, diagnóstico e tratamento integrado em três especialidades." },
  { icon: Bone, name: "Ortopedia e Traumatologia", doctor: "Dr. Érico Neri Duarte", crm: "CRM/GO 14974 · RQE 7357", desc: "Coluna, joelho, ombro, fraturas e cirurgia ortopédica." },
  { icon: Ear, name: "Otorrinolaringologia", doctor: "Dra. Miriam Ribeiro Gomes", crm: "CRM/GO 4535 · RQE 2577", desc: "Ouvido, nariz e garganta. Sinusite, rinite, vertigem e zumbido." },
  { icon: Baby, name: "Pediatria", doctor: "Equipe pediátrica Sifam", crm: "Atendimento de 0 a 12 anos", desc: "Acompanhamento do crescimento, vacinas e cuidados infantis." },
  { icon: Activity, name: "Pneumologia", doctor: "Equipe Sifam", crm: "Doenças respiratórias", desc: "Asma, bronquite, DPOC, tabagismo e avaliação pulmonar." },
  { icon: Brain, name: "Psiquiatria", doctor: "Dr. Thiago Guimarães de Moraes Rocha", crm: "CRM/GO 21421 · RQE 102401", desc: "Ansiedade, depressão, insônia e acompanhamento medicamentoso." },
  { icon: HandHeart, name: "Nutrição", doctor: "Dra. Lívia Nagib", crm: "CRN1: 16494", desc: "Reeducação alimentar, emagrecimento e alimentação clínica." },
];

const lab = [
  "Hemograma completo", "Glicemia e Hemoglobina Glicada", "Colesterol e Triglicerídeos",
  "TSH e T4 livre (Tireoide)", "PSA total e livre", "Beta HCG (gravidez)",
  "Sorologias e infectologia", "Urocultura e EAS", "Vitamina D e B12", "Ferro e Ferritina",
];

const imaging = [
  "Ultrassom abdominal e pélvico", "Ultrassom obstétrico e morfológico",
  "Doppler vascular de membros", "Ecodoppler de Carótidas e Vertebrais",
  "ECG — Eletrocardiograma", "Holter 24h", "MAPA 24h", "Teste Ergométrico",
];

const surgeries = [
  "Cirurgias ortopédicas eletivas", "Pequenos procedimentos ambulatoriais",
  "Cirurgias proctológicas", "Cirurgias urológicas", "Retirada de lesões de pele",
];

const diversos = [
  "Angiorressonância com contraste",
  "Audiometria",
  "Colonoscopia",
  "Densitometria óssea",
  "ECG — Eletrocardiograma",
  "Ecocardiograma",
  "Holter 24h",
  "Laringoscopia",
  "Mamografia digital",
  "MAPA 24h",
  "Raio-X digital (por região)",
  "Ressonância magnética com contraste",
  "Tomografia computadorizada com contraste",
  "Acompanhamento escolar (1 sessão)",
  "Avaliação ABA (5 sessões)",
  "Avaliação neuropedagógica (5 sessões)",
  "Avaliação psicopedagógica (5 sessões)",
  "Intervenção psicopedagógica (1 sessão)",
  "Biometria ocular (1 olho)",
  "Biometria ocular (2 olhos)",
  "Ceratometria",
  "Curva tensional diária (binocular)",
  "Fundoscopia",
  "Mapeamento de retina",
  "Retirada de corpo estranho ocular",
  "Tonometria",
  "Teste do olhinho",
  "Limpeza de ouvido",
  "Nasofibroscopia",
  "Vectoeletronistagmografia",
];

const addresses = [
  { title: "Sede Clínica Sifam", desc: "Consultas e Exames", addr: "R. 9-A, 210 — 2º Andar, St. Aeroporto, Goiânia/GO · 74075-250" },
];

function HomePage() {
  return (
    <div id="topo" className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* HERO */}
        <section aria-labelledby="hero-title" className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 gradient-brand opacity-[0.08]" aria-hidden />
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:py-20">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary/15 px-3 py-1 text-xs font-semibold text-primary-deep">
                <CheckCircle2 className="h-4 w-4 text-secondary" /> Clínica popular em Goiânia · IMAS e IPASGO
              </span>
              <h1 id="hero-title" className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-gradient-brand">Clínica Sifam</span><br />
                Cuidados médicos de excelência e atendimento humanizado.
              </h1>
              <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
                Consultas, exames laboratoriais, exames de imagem e cirurgias ambulatoriais com{" "}
                <strong className="text-foreground">preço justo</strong>, organização e atendimento digno.
                Profissionais qualificados e devidamente registrados em seus respectivos conselhos, dedicados ao cuidado de você e da sua família em Goiânia.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-whatsapp)] px-6 py-4 text-base font-semibold text-white shadow-card transition-transform hover:scale-[1.02]"
                >
                  Agendar pelo WhatsApp
                </a>
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-6 py-4 text-base font-semibold text-primary-deep hover:bg-accent"
                >
                  <Phone className="h-5 w-5" /> {PHONE_DISPLAY}
                </a>
              </div>

              <dl className="mt-8 grid grid-cols-3 gap-3 sm:gap-6">
                {[
                  { k: "13+", v: "Especialidades" },
                  { k: "200+", v: "Exames" },
                  { k: "30+", v: "Procedimentos" },
                ].map((s) => (
                  <div key={s.v} className="rounded-2xl border border-border bg-card p-3 text-center shadow-soft sm:p-4">
                    <dt className="text-2xl font-extrabold text-primary-deep sm:text-3xl">{s.k}</dt>
                    <dd className="text-xs text-muted-foreground sm:text-sm">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] gradient-brand opacity-25 blur-2xl" aria-hidden />
              <img
                src={heroDoctor}
                alt="Médico da Clínica Sifam de jaleco branco com logo no peito, atendendo paciente em Goiânia"
                width={1024} height={1024}
                className="aspect-square w-full rounded-[2rem] object-cover shadow-card"
              />
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" aria-labelledby="sobre-title" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Quem somos</p>
              <h2 id="sobre-title" className="mt-2 text-3xl font-bold sm:text-4xl">
                Saúde Integrada da Família — <span className="text-gradient-brand">com dignidade</span>
              </h2>
              <div className="prose-sifam mt-5 space-y-4 text-base text-muted-foreground">
                <p>
                  A <strong className="text-foreground">SIFAM (Saúde Integrada da Família)</strong> nasceu do
                  propósito de oferecer serviços de saúde integrados, acessíveis e de excelência, por meio
                  de uma gestão profissional e comprometida com a qualidade do atendimento. Foi realizada
                  uma minuciosa análise de mercado para estruturar uma clínica capaz de unir{" "}
                  <strong className="text-foreground">qualidade médica</strong>, organização e{" "}
                  <strong className="text-foreground">preços acessíveis</strong> em um mesmo lugar.
                </p>
                <p>
                  A sede da clínica está localizada mais especificamente no Setor Aeroporto, região que
                  concentra uma importante rede de clínicas e hospitais da capital. Dessa forma, ao chegar
                  a Goiânia, o paciente pode realizar diversos serviços de forma prática, confortável e
                  centralizada — reunindo <strong>consultas em mais de 13 especialidades</strong>,{" "}
                  <strong>mais de 200 exames laboratoriais</strong>, ultrassonografias, exames cardiológicos
                  e <strong>cirurgias ambulatoriais</strong> em um único endereço, com mais segurança
                  diagnóstica e maior qualidade no atendimento.
                </p>
                <p>
                  A gestão da clínica é conduzida por administradores devidamente qualificados, e a SIFAM
                  conta com profissionais qualificados, experientes e devidamente habilitados: médicos todos
                  registrados no CREMEGO e equipe de enfermagem registrada no COREN-GO, atuando
                  exclusivamente dentro de sua especialidade. Acreditamos que organização é uma forma de
                  respeito ao paciente.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { t: "Missão", d: "Oferecer acesso integrado a serviços de saúde com preços justos, atendimento humanizado e informação clara, sem burocracia." },
                  { t: "Visão", d: "Ser, em 2035, a principal plataforma de saúde integrada de Goiânia — referência em humanização, organização e respeito ao paciente." },
                  { t: "Valores", d: "Dignidade acima de tudo · Profissionais qualificados · Preço justo · Integração como cuidado · Organização como respeito." },
                ].map((b) => (
                  <article key={b.t} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                    <h3 className="text-base font-bold text-primary-deep">{b.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={teamCare}
                alt="Equipe Sifam de jaleco branco conversando com paciente e familiar — atendimento humanizado"
                loading="lazy" width={1024} height={1024}
                className="aspect-[5/4] w-full rounded-[2rem] object-cover shadow-card"
              />
            </div>
          </div>
        </section>

        {/* ESPECIALIDADES */}
        <section id="especialidades" aria-labelledby="esp-title" className="bg-accent/40 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <header className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Corpo clínico</p>
              <h2 id="esp-title" className="mt-2 text-3xl font-bold sm:text-4xl">Especialidades médicas</h2>
              <p className="mt-3 text-muted-foreground">
                Profissionais registrados nos respectivos conselhos, atuando exclusivamente em sua especialidade.
              </p>
            </header>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {specialties.map(({ icon: Icon, name, doctor, crm, desc }) => (
                <li key={name}>
                  <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-soft transition-transform hover:-translate-y-0.5 hover:shadow-card">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl gradient-brand text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h3 className="text-lg font-bold text-primary-deep">{name}</h3>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
                    <div className="mt-4 border-t border-border pt-3">
                      <p className="text-sm font-semibold text-foreground">{doctor}</p>
                      <p className="text-xs text-muted-foreground">{crm}</p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>

            <div className="mt-8 text-center">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:bg-primary-deep">
                Agendar uma especialidade
              </a>
            </div>
          </div>
        </section>

        {/* LABORATORIO */}
        <section id="laboratorio" aria-labelledby="lab-title" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Laboratório</p>
              <h2 id="lab-title" className="mt-2 text-3xl font-bold sm:text-4xl">
                <span className="text-gradient-brand">+200 exames</span> laboratoriais com agilidade
              </h2>
              <p className="mt-4 text-muted-foreground">
                Hemograma, hormônios, sorologias, bioquímica e microbiologia em coleta rápida, com
                resultados claros e prazos curtos. Aceitamos IMAS, IPASGO, particular e Pix.
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {lab.map((e) => (
                  <li key={e} className="flex items-start gap-2 rounded-lg bg-accent/50 px-3 py-2 text-sm">
                    <FlaskConical className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={labImg}
              alt="Profissional da Sifam de jaleco branco realizando análises laboratoriais"
              loading="lazy" width={1024} height={1024}
              className="order-1 aspect-[5/4] w-full rounded-[2rem] object-cover shadow-card lg:order-2"
            />
          </div>
        </section>

        {/* IMAGENS */}
        <section id="imagens" aria-labelledby="img-title" className="bg-accent/40 py-14 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
            <img
              src={imagingImg}
              alt="Médico da Sifam ao lado de aparelho de ultrassom — exames de imagem em Goiânia"
              loading="lazy" width={1024} height={1024}
              className="aspect-[5/4] w-full rounded-[2rem] object-cover shadow-card"
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Exames de Imagem</p>
              <h2 id="img-title" className="mt-2 text-3xl font-bold sm:text-4xl">
                Imagem e cardiologia <span className="text-gradient-brand">no mesmo dia</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Ultrassom, Doppler vascular, Ecodoppler de Carótidas, ECG, Holter 24h, MAPA 24h e Teste
                Ergométrico — com laudo médico assinado e preços populares.
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {imaging.map((e) => (
                  <li key={e} className="flex items-start gap-2 rounded-lg bg-card px-3 py-2 text-sm shadow-soft">
                    <Scan className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CIRURGIAS + DIVERSOS */}
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid gap-6 md:grid-cols-2">
            <article id="cirurgias" aria-labelledby="cir-title" className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl gradient-brand text-white">
                  <Scissors className="h-6 w-6" />
                </span>
                <h2 id="cir-title" className="text-2xl font-bold text-primary-deep sm:text-3xl">Cirurgias</h2>
              </div>
              <p className="mt-3 text-muted-foreground">
                Cirurgias eletivas e procedimentos ambulatoriais conduzidos por especialistas, com
                apoio do Hospital Dom Bosco quando necessário.
              </p>
              <ul className="mt-5 space-y-2">
                {surgeries.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" /> {s}
                  </li>
                ))}
              </ul>
            </article>

            <article id="diversos" aria-labelledby="div-title" className="rounded-3xl border border-border gradient-brand p-6 text-white shadow-card sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15">
                  <Syringe className="h-6 w-6" />
                </span>
                <h2 id="div-title" className="text-2xl font-bold sm:text-3xl">Diversos & Diferenciais</h2>
              </div>
              <p className="mt-3 text-white/90">
                Tudo que importa para você e sua família encontrar saúde com tranquilidade.
              </p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {diversos.map((s) => (
                  <li key={s} className="flex items-start gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm">
                    <Award className="mt-0.5 h-4 w-4 shrink-0 text-secondary" /> {s}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section aria-labelledby="dif-title" className="bg-accent/40 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <header className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Por que a Sifam</p>
              <h2 id="dif-title" className="mt-2 text-3xl font-bold sm:text-4xl">Atendimento humanizado, do primeiro contato ao laudo</h2>
            </header>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: HandHeart, t: "Acolhimento de verdade", d: "Equipe treinada para receber bem cada paciente, com paciência e clareza." },
                { icon: Users, t: "Profissionais qualificados", d: "Médicos registrados no CREMEGO e experientes em sua especialidade." },
                { icon: ShieldCheck, t: "Transparência total", d: "Preços informados com clareza — sem surpresas." },
                { icon: Clock, t: "Agilidade", d: "Resultados rápidos e organização que respeita seu tempo." },
              ].map(({ icon: Icon, t, d }) => (
                <li key={t} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary-deep">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 text-base font-bold text-primary-deep">{t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* LOCALIZACAO */}
        <section id="localizacao" aria-labelledby="loc-title" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Onde estamos</p>
            <h2 id="loc-title" className="mt-2 text-3xl font-bold sm:text-4xl">Nossa sede em Goiânia</h2>
            <p className="mt-3 text-muted-foreground">R. 9-A, 210 — 2º Andar, St. Aeroporto, Goiânia/GO · 74075-250</p>
          </header>

          <ul className="mt-10 grid gap-4">
            {addresses.map((a) => (
              <li key={a.title}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <span className="grid h-10 w-10 place-items-center rounded-xl gradient-brand text-white">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 text-base font-bold text-primary-deep">{a.title}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-secondary">{a.desc}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{a.addr}</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Clínica Sifam " + a.addr)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
                  >
                    Ver no Google Maps →
                  </a>
                </article>
              </li>
            ))}
          </ul>

          <div className="mt-10 overflow-hidden rounded-3xl border border-border shadow-soft">
            <iframe
              title="Mapa Clínica Sifam — Setor Aeroporto, Goiânia"
              src="https://www.google.com/maps?q=R.%209-A%2C%20210%20Setor%20Aeroporto%20Goiania&output=embed"
              className="h-72 w-full sm:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        {/* CONTATO / CTA */}
        <section id="contato" aria-labelledby="ct-title" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
          <div className="overflow-hidden rounded-[2rem] gradient-brand p-8 text-white shadow-card sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <h2 id="ct-title" className="text-3xl font-extrabold sm:text-4xl">
                  Pronto para cuidar da sua saúde com dignidade?
                </h2>
                <p className="mt-3 max-w-xl text-white/90">
                  Fale agora com nossa equipe pelo WhatsApp ou ligue. Atendimento de segunda a sábado.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-base font-semibold text-primary-deep shadow-card hover:bg-white/95"
                  >
                    Agendar pelo WhatsApp
                  </a>
                  <a
                    href={PHONE_TEL}
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-6 py-4 text-base font-semibold text-white hover:bg-white/10"
                  >
                    <Phone className="h-5 w-5" /> {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <ul className="grid gap-3 text-sm">
                <li className="flex items-start gap-3 rounded-2xl bg-white/10 p-4">
                  <Clock className="mt-0.5 h-5 w-5 text-secondary" />
                  <div><p className="font-semibold">Horário</p><p className="text-white/85">Seg–Sex 07h–19h · Sáb 07h–13h</p></div>
                </li>
                <li className="flex items-start gap-3 rounded-2xl bg-white/10 p-4">
                  <MapPin className="mt-0.5 h-5 w-5 text-secondary" />
                  <div><p className="font-semibold">Sede</p><p className="text-white/85">R. 9-A, 210 — St. Aeroporto, Goiânia/GO</p></div>
                </li>
                <li className="flex items-start gap-3 rounded-2xl bg-white/10 p-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-secondary" />
                  <div><p className="font-semibold">Convênios</p><p className="text-white/85">IMAS · IPASGO · Particular · Pix</p></div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppFloating />
    </div>
  );
}
