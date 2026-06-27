import { Mail, MapPin } from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "./ui/hover-footer";
import "./Footer.css";

export default function Footer() {
  // Footer link data
  const footerLinks = [
    {
      title: "O Programa",
      links: [
        { label: "Manifesto Carbonus", href: "#proposito" },
        { label: "Como Funciona", href: "#como-funciona" },
        { label: "Diferenciais", href: "#por-que" },
        { label: "Quero Colecionar", href: "#cadastro" },
      ],
    },
    {
      title: "Suporte e Regulação",
      links: [
        { label: "Termos de Uso", href: "#" },
        { label: "Políticas de Privacidade", href: "#" },
        { label: "Segurança de Dados LGPD", href: "#" },
        {
          label: "Canal P2P Chat",
          href: "#",
          pulse: true,
        },
      ],
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <Mail size={18} className="text-secondary" />,
      text: "suporte@carbonus.com",
      href: "mailto:suporte@carbonus.com",
    },
    {
      icon: <MapPin size={18} className="text-secondary" />,
      text: "Belo Horizonte, Minas Gerais, Brazil",
    },
  ];

  // Social media icons using inline SVGs for compatibility
  const socialLinks = [
    {
      label: "Facebook",
      href: "#",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      )
    },
    {
      label: "Instagram",
      href: "#",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      )
    },
    {
      label: "Twitter",
      href: "#",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
        </svg>
      )
    },
    {
      label: "Globe",
      href: "#",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
          <path d="M2 12h20"/>
        </svg>
      )
    },
  ];

  return (
    <footer className="relative h-fit rounded-[28px] overflow-hidden mx-4 sm:mx-8 mb-8 mt-16 bg-[#121a35]/40 border border-white/10">
      <div className="max-w-7xl mx-auto p-8 sm:p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-accent text-3xl font-extrabold">
                🌱
              </span>
              <span className="text-white text-3xl font-bold font-display tracking-tight">CARBONUS®</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Transformando a compensação de emissões de CO₂ em uma via de impacto real e retorno financeiro no bolso de motoristas de todo o Brasil.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-md font-extrabold mb-6 uppercase tracking-wider text-gray-300">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative w-fit">
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-secondary text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                    {link.pulse && (
                      <span className="absolute top-1.5 -right-3.5 w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-white text-md font-extrabold mb-6 uppercase tracking-wider text-gray-300">
              Fale Conosco
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-sm">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-secondary transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-gray-400">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-white/10 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0 text-gray-500">
          {/* Social icons */}
          <div className="flex space-x-6">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-secondary transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left font-medium">
            &copy; {new Date().getFullYear()} Carbonus — Realização Ecobit™ Ativos Ambientais. Todos os direitos reservados.
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[22rem] -mt-36 -mb-28 relative z-50">
        <TextHoverEffect text="CARBONUS" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
