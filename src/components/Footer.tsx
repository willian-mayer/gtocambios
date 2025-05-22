// components/Footer.tsx
import Image from "next/image";
import { Route } from "@/types/routes";
import Link from "next/link";
import media from "@/data/media.json"; // 👈 Importamos el JSON

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
              <Image
                src="/logo.jpg"
                alt="Logo"
                width={80}
                height={80}
                className="h-20 w-auto"
              />
            </Link>

            <span className="text-sm text-gray-400 sm:ml-4">
              © {new Date().getFullYear()}{" "}
              <Link href="/" className="hover:underline">
                GTO Cambios
              </Link>
              . Todos os direitos reservados.
            </span>
          </div>

          {/* Enlaces + Redes Sociales */}
          <ul className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center text-sm font-medium gap-2 sm:gap-4">
                        {media.map((item, idx) => (
              <li key={`media-${idx}`}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:underline"
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={20}
                    height={20}
                    className="h-5 w-5 invert"
                  />
                  <span className="sr-only">{item.name}</span>
                </a>
              </li>
            ))}
            {links.map((link, idx) => (
              <li key={idx}>
                <a href={link.path} className="hover:underline">
                  {link.name}
                </a>
              </li>
            ))}

            {/* Redes Sociales */}

          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
