import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const { theme } = useSelector((state: RootState) => state.theme);

  const bgColor =
    theme === "dark"
      ? "bg-[#18181b] text-gray-300"
      : "bg-[#ffffff] text-gray-700";

  const headingColor = theme === "dark" ? "text-white" : "text-black";
  const iconColor = "text-yellow-400";

  const sections = [
    { title: "Company", links: ["About Us", "Our Team", "Products", "Contact"] },
    { title: "Product", links: ["Feature", "Pricing", "Credit", "FAQ"] },
    { title: "Our Store", links: ["New York", "London-SF", "Cockfosters BP", "Los Angeles"] },
    { title: "Support", links: ["Privacy", "Help", "Terms", "FAQ"] },
  ];

  return (
    <footer
      id="footer"
      className={`${bgColor} py-10 px-4 sm:px-6 lg:px-8 overflow-x-hidden`}
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Logo & Description */}
        <div className="lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center mb-4">
            <a href="/" className="flex items-center space-x-2">
              <img
                src="/images/yellow logo.png"
                alt="Horologix logo"
                className="w-8 h-8"
              />
              <span className="text-2xl font-bold text-yellow-400">
                Horologix
              </span>
            </a>
          </div>
          <p className="text-sm leading-relaxed mb-6 max-w-sm">
            Experience the perfect blend of technology and fashion with our
            smartwatches.
          </p>
          <div className="flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 hover:scale-105 transition-transform"
              aria-label="Facebook"
            >
              <FaFacebookF className={`text-xl ${iconColor}`} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 hover:scale-105 transition-transform"
              aria-label="Twitter"
            >
              <FaTwitter className={`text-xl ${iconColor}`} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 hover:scale-105 transition-transform"
              aria-label="Instagram"
            >
              <FaInstagram className={`text-xl ${iconColor}`} />
            </a>
          </div>
        </div>

        {/* Footer Columns */}
        <div className="lg:col-span-3 flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-8">
          {/* Mobile: Row 1 (Company + Product) */}
          <div className="flex justify-center gap-6 w-full sm:w-auto flex-1">
            {sections.slice(0, 2).map((section) => (
              <div
                key={section.title}
                className="flex-1 min-w-0 flex flex-col items-center sm:items-start text-center sm:text-left"
              >
                <h3 className={`font-semibold mb-4 ${headingColor}`}>
                  {section.title}
                </h3>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="hover:text-yellow-500 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Mobile: Row 2 (Store + Support) */}
          <div className="flex justify-center gap-6 w-full sm:w-auto flex-1">
            {sections.slice(2).map((section) => (
              <div
                key={section.title}
                className="flex-1 min-w-0 flex flex-col items-center sm:items-start text-center sm:text-left"
              >
                <h3 className={`font-semibold mb-4 ${headingColor}`}>
                  {section.title}
                </h3>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="hover:text-yellow-500 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
