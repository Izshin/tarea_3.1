import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [showIntro, setShowIntro] = useState(true)
  const [showVideo, setShowVideo] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideoEnd = () => {
    setShowContent(true)
    setShowVideo(false)
  }

  const handleSkipVideo = () => {
    setShowContent(true)
    setShowVideo(false)
  }

  useEffect(() => {
    // Mostrar video después de 2.8s para que se superponga con el fade out
    const videoTimer = setTimeout(() => {
      setShowVideo(true);
    }, 2800);
    
    // Ocultar intro después de 3.5s (cuando termine el fade out)
    const introTimer = setTimeout(() => {
      setShowIntro(false);
    }, 3500);
    
    return () => {
      clearTimeout(videoTimer);
      clearTimeout(introTimer);
    };
  }, [])

  return (
    <div className="app">
      {/* Animación Inicial */}
      {showIntro && (
        <div className="intro-animation">
          <div className="intro-content">
            <div className="logo-animation">
              <h1 className="intro-title">
                <span className="intro-line">PARALYMPICDREAMS</span>
                <span className="intro-subtitle">Olympic Horizon</span>
              </h1>
            </div>
          </div>
        </div>
      )}

      {/* Video Introductorio */}
      {showVideo && (
        <div className="intro-video-container">
          <video 
            ref={videoRef}
            className="intro-video"
            onEnded={handleVideoEnd}
            controls
            playsInline
          >
            <source src="/INTRODUCTORIO.mp4" type="video/mp4" />
          </video>
          <button className="skip-button" onClick={handleSkipVideo}>
            Saltar ›
          </button>
        </div>
      )}

      {/* Contenido Principal */}
      {showContent && (
        <>
          {/* Hero Section */}
          <section className="hero">

            <div className="hero-content">
              <h1 className="hero-title">
                <span className="highlight">PARALYMPICDREAMS</span>
                <span className="subtitle">Olympic Horizon</span>
              </h1>
              <p className="hero-tagline">Alcanza tu máximo potencial deportivo</p>
              <div className="hero-location">
                <span className="location-icon">📍</span>
                Castillo de Neuschwanstein, Baviera
              </div>
            </div>
          </section>

          {/* Sección Descripción */}
          <section className="description">
            <div className="container">
              <p className="description-text">
                Bienvenido a <strong>PARALYMPICDREAMS</strong>, un centro de alto rendimiento deportivo donde los atletas 
                encuentran todo lo necesario para alcanzar sus metas. Nuestras instalaciones en el emblemático 
                Castillo de Neuschwanstein ofrecen un entorno único para el entrenamiento paralímpico de alto nivel.
              </p>
            </div>
          </section>

          {/* Sección de Servicios */}
          <section className="services">
            <div className="container">
              <h2 className="section-title">NUESTROS SERVICIOS</h2>
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon">⚡</div>
                  <h3>Entrenamiento Personalizado</h3>
                  <p>Programas de entrenamiento adaptados a tus necesidades y objetivos específicos.</p>
                </div>
                <div className="service-card">
                  <div className="service-icon">🧠</div>
                  <h3>Recuperación y Fisioterapia</h3>
                  <p>Tratamientos de recuperación muscular y terapias especializadas para prevenir lesiones.</p>
                </div>
                <div className="service-card">
                  <div className="service-icon">🔬</div>
                  <h3>Nutrición Deportiva</h3>
                  <p>Planes nutricionales personalizados diseñados por nuestro equipo de especialistas.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Instalaciones Subterráneas */}
          <section className="facilities">
            <div className="container">
              <h2 className="section-title">NUESTRAS INSTALACIONES</h2>
              <div className="facilities-grid">
                <div className="facility-item">
                  <div className="facility-number">01</div>
                  <h3>Pista de Atletismo</h3>
                  <p>Pista profesional con superficie de última generación para entrenamientos de velocidad y resistencia.</p>
                </div>
                <div className="facility-item">
                  <div className="facility-number">02</div>
                  <h3>Centro de Recuperación</h3>
                  <p>Salas equipadas con tecnología avanzada para la recuperación y tratamiento de lesiones.</p>
                </div>
                <div className="facility-item">
                  <div className="facility-number">03</div>
                  <h3>Laboratorio de Análisis</h3>
                  <p>Evaluación del rendimiento deportivo y seguimiento de tu progreso con tecnología de vanguardia.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonios */}
          <section className="testimonials">
            <div className="container">
              <h2 className="section-title">TESTIMONIOS</h2>
              <div className="testimonial-card">
                <p className="testimonial-text">
                  "En Ivomansion encontré el apoyo y las herramientas que necesitaba para superar mis límites"
                </p>
                <p className="testimonial-author">— María González, Atleta Paralímpica</p>
              </div>
            </div>
          </section>

          {/* Nuestro Equipo */}
          <section className="team">
            <div className="container">
              <h2 className="section-title">NUESTRO EQUIPO</h2>
              <div className="team-grid">
                <div className="team-member">
                  <img src="/Entrenador.jpg" alt="Entrenador" className="team-photo" />
                  <h3>Carlos Martínez</h3>
                  <p>Entrenador Principal</p>
                </div>
                <div className="team-member">
                  <img src="/Preparador1.jpg" alt="Preparador Físico" className="team-photo" />
                  <h3>Giovanni Bartolocago</h3>
                  <p>Preparador Físico</p>
                </div>
                <div className="team-member">
                  <img src="/Nutricionista1.jpg" alt="Nutricionista" className="team-photo" />
                  <h3>Laura García</h3>
                  <p>Nutricionista Deportiva</p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="footer">
            <div className="container">
              <p className="footer-main">PARALYMPICDREAMS: Olympic Horizon</p>
              <p className="footer-subtitle">Excelencia en entrenamiento deportivo</p>
              <div className="footer-links">
                <a href="#legal">Aviso Legal</a>
                <a href="#privacy">Políticas de Privacidad</a>
                <a href="#contact">Contacto</a>
              </div>
              <p className="footer-copyright">© 2026 PARALYMPICDREAMS: Olympic Horizon. Todos los derechos reservados.</p>
            </div>
          </footer>
        </>
      )}
    </div>
  )
}

export default App
