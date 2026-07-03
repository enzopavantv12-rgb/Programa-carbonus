import ScrollExpandMedia from './ui/scroll-expansion-hero';
import './Hero.css';

export default function Hero() {
  const forestVideo = '/download.mp4';
  const backgroundTunnel = '/hero-fundo-carbonus.jpg';

  return (
    <section className="hero-scroll-container">
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc={forestVideo}
        bgImageSrc={backgroundTunnel}
        title="Carbonus"
        date="Ação Climática"
        scrollToExpand="Role para expandir"
        textBlend={true}
      >
        <div className="hero__expanded-content">
          {/* Navbar flutuante em vidro */}
          <header className="hero__nav hero__nav--scroll">
            <nav className="hero__links">
              <a href="#proposito">Propósito</a>
              <a href="#como-funciona">Como funciona</a>
              <a href="#cadastro">Cadastro</a>
              <a href="#validar">Validar Cartela</a>
            </nav>
            <span className="hero__brand">CAR<b>₿</b>ONUS</span>
            <a href="#cadastro" className="hero__cta">
              Comprar figurinhas <span className="hero__dot">→</span>
            </a>
          </header>

          {/* Frase e bloco inferior */}
          <div className="hero__scroll-floor">
            <p className="hero__phrase hero__phrase--scroll">Tudo que sobe, desce.</p>
            <div className="hero__floor hero__floor--scroll">
              <h1 className="hero__word hero__word--scroll">Carbonus</h1>
              <div className="hero__aside">
                <p>
                  Um programa que transforma cada abastecimento em ação climática.
                  Complete sua cartela, troque por etanol e monetize figurinhas
                  repetidas — sem depredar a natureza.
                </p>
                <a href="#como-funciona" className="hero__cta hero__cta--floor">
                  Quero me envolver <span className="hero__dot">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollExpandMedia>
    </section>
  );
}
