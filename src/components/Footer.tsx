import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black shadow-sm">
      <div className="w-full max-w-screen-xl mx-auto p-4">
        <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">  
          <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <Image src="/logo.jpg" alt="Logo" width={80} height={80} className="h-20" />
            
          </a>
                  <span className="block text-sm text-gray-400 sm:text-center">
          © {new Date().getFullYear()} <a href="/" className="hover:underline">GTO Cambios</a>. All Rights Reserved.
        </span>
            </div>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
