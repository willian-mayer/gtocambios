// components/Footer.tsx
import Image from "next/image";
import { Route } from "@/types/routes";
import Link from "next/link";
type FooterProps = {
  links: Route[];
};

const Footer = ({ links }: FooterProps) => {
  return (
    <footer className="bg-black text-gray-400 shadow-sm">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-6 md:py-8 md:px-8 lg:px-16 xl:px-32">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          {/* Logo y copyright */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Link href="/" className="text-blue-500 hover:underline">
               <Image src="/logo.jpg" alt="Logo" width={80} height={80} className="h-20 w-auto" />
</Link>

            <span className="text-sm text-gray-400 sm:ml-4">
              © {new Date().getFullYear()} <Link href="/" className="hover:underline">
  GTO Cambios
</Link>. Todos os direitos reservados.
            </span>
          </div>

          {/* Enlaces dinámicos */}
          <ul className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center text-sm font-medium gap-2 sm:gap-4">
            {links.map((link, idx) => (
              <li key={idx}>
                <a href={link.path} className="hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
