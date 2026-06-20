import logoAsset from "@/assets/sifam-logo.png.asset.json";

export function SifamLogo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Clínica Sifam — Saúde Integrada da Família"
      className={className}
      width={120}
      height={120}
    />
  );
}
