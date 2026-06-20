import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { SifamLogo } from "./SifamLogo";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "./WhatsAppButton";

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-primary-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="rounded-xl bg-white/95 p-3 inline-block">
            <SifamLogo className="h-14 w-auto" />
          </div>
          <p className="mt-4 text-sm text-white/80">
            Clínica Sifam — Saúde Integrada da Família. Cuidado humanizado, preços justos e
            profissionais qualificados em Goiânia.
          </p>
          <a
            href="https://clinicasifam.com.br/"
            className="mt-3 inline-block text-sm font-semibold text-secondary hover:underline"
          >
            clinicasifam.com.br
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary">Contato</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
              <a href={PHONE_TEL} className="hover:underline">{PHONE_DISPLAY}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
              <a href="mailto:contato@clinicasifam.com.br" className="hover:underline break-all">contato@clinicasifam.com.br</a>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
              <span>Seg a Sex: 07h–19h · Sáb: 07h–13h</span>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block rounded-full bg-[var(--color-whatsapp)] px-4 py-2 text-sm font-semibold text-white"
              >
                Falar no WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary">Endereço</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/85">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" /> R. 9-A, 210 — 2º Andar, St. Aeroporto, Goiânia/GO · 74075-250</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary">Navegação</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {["Especialidades","Laboratório","Imagens","Cirurgias","Diversos","Localização","Contato"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase().replace("á","a").replace("ó","o").replace("çã","ca")}`} className="text-white/85 hover:text-white hover:underline">{l}</a></li>
            ))}
          </ul>
          <div className="mt-5 flex gap-3">
            <a aria-label="Instagram" href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><Instagram className="h-5 w-5" /></a>
            <a aria-label="Facebook" href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/70 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} Clínica Sifam — Saúde Integrada da Família. Todos os direitos reservados.</p>
          <p>CNPJ e responsáveis técnicos disponíveis na recepção.</p>
        </div>
      </div>
    </footer>
  );
}
