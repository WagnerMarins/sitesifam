import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { SifamLogo } from "./SifamLogo";
import { WHATSAPP_URL, PHONE_DISPLAY, PHONE_TEL } from "./WhatsAppButton";

const NAV = [
  { href: "#especialidades", label: "Especialidades" },
  { href: "#laboratorio", label: "Laboratório" },
  { href: "#imagens", label: "Imagens" },
  { href: "#cirurgias", label: "Cirurgias" },
  { href: "#diversos", label: "Diversos" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contato", label: "Contato" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="#topo" className="flex min-w-0 items-center gap-2" aria-label="Clínica Sifam — início">
          <SifamLogo className="h-11 w-auto shrink-0 sm:h-12" />
          <span className="sr-only">Clínica Sifam</span>
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((i) => (
              <li key={i.href}>
                <a
                  href={i.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-primary-deep"
                >
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PHONE_TEL}
            className="hidden items-center gap-2 rounded-full border border-border px-3 py-2 text-sm font-semibold text-primary-deep hover:bg-accent md:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden /> {PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-[var(--color-whatsapp)] px-4 py-2 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-[1.02] sm:inline-flex"
          >
            Agendar consulta
          </a>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="inline-flex items-center justify-center rounded-md p-2 text-primary-deep hover:bg-accent lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Menu mobile" className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {NAV.map((i) => (
              <li key={i.href}>
                <a
                  href={i.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-accent"
                >
                  {i.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex flex-col gap-2 pb-3">
              <a
                href={PHONE_TEL}
                className="flex items-center justify-center gap-2 rounded-full border border-border px-4 py-3 text-sm font-semibold text-primary-deep"
              >
                <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[var(--color-whatsapp)] px-4 py-3 text-center text-sm font-semibold text-white shadow-soft"
              >
                Agendar no WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
