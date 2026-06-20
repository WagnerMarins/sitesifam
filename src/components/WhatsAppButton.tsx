import { MessageCircle } from "lucide-react";

export const WHATSAPP_URL = "https://wa.me/5562999340065?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20na%20Cl%C3%ADnica%20Sifam";
export const PHONE_DISPLAY = "(62) 99934-0065";
export const PHONE_TEL = "tel:+5562999340065";

export function WhatsAppFloating() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar consulta no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[var(--color-whatsapp)] px-4 py-3 text-white shadow-card transition-transform hover:scale-105 active:scale-95 sm:bottom-8 sm:right-8 sm:px-5"
    >
      <MessageCircle className="h-6 w-6" aria-hidden />
      <span className="hidden text-sm font-semibold sm:inline">Agendar no WhatsApp</span>
    </a>
  );
}
