import logo from "@/assets/sifam-logo.png";

export function SifamLogo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="Clínica Sifam — Saúde Integrada da Família"
      className={className}
      width={120}
      height={120}
    />
  );
}