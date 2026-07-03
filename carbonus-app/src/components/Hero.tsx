import { MeshGradient } from "@paper-design/shaders-react";
import './Hero.css';

export default function Hero() {
  const forestVideo = '/download.mp4';

  return (
    <section className="hero-section-new">
      {/* Dynamic Background Shader */}
      <div className="hero-bg-shader">
        <MeshGradient
          style={{ height: "100%", width: "100%" }}
          distortion={0.8}
          swirl={0.1}
          offsetX={0}
          offsetY={0}
          scale={1}
          rotation={0}
          speed={1}
          colors={["hsl(228, 80%, 8%)", "hsl(217, 91%, 45%)", "hsl(142, 86%, 45%)", "hsl(45, 95%, 55%)"]}
        />
        <div className="hero-shader-overlay" />
      </div>

      {/* Floating Navbar */}
      <header className="hero-navbar">
        <div className="navbar-container">
          <div className="navbar-links">
            <a href="#proposito">Propósito</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#por-que">Diferenciais</a>
          </div>
          
          <span className="navbar-brand">CAR<b>₿</b>ONUS</span>
          
          <a href="#cadastro" className="navbar-cta">
            Participar <span className="cta-arrow">→</span>
          </a>
        </div>
      </header>

      {/* Hero Content */}
      <div className="hero-container">
        <div className="hero-grid">
          {/* Left Column: Copy & CTAs */}
          <div className="hero-text-block">
            <p className="hero-eyebrow">Programa Carbonus®</p>
            <h1 className="hero-title font-display">
              Compense emissões e ganhe <span className="text-grad-neon">retorno real.</span>
            </h1>
            <p className="hero-description">
              Um programa inovador que transforma cada abastecimento em ação climática. 
              Complete sua cartela, resgate 50L de etanol automotivo e monetize figurinhas repetidas via Pix.
            </p>
            <div className="hero-ctas">
              <a href="#cadastro" className="btn-pill btn-pill-dark">
                Quero me envolver
                <span className="dot">→</span>
              </a>
              <a href="#como-funciona" className="hero-secondary-link">
                Como funciona o app
              </a>
            </div>
          </div>

          {/* Right Column: Cinematic Video Frame */}
          <div className="hero-video-wrapper">
            <div className="video-frame-outer">
              <div className="video-frame-inner">
                <video
                  src={forestVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                  controls={false}
                />
                <div className="video-overlay-glow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
