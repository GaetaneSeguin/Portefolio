import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image
        src="/images/avatar.png"
        className="avatar-img"
        width={300}
        height={300}
        alt="Dessin de l'avatar de Gaetane"
      />
      <div className="hero-text">
        <h1>Hello moi c'est Gaëtane</h1>
        <p>
          Actuellement en formation à Ada Tech School, je suis à la recherche
          d'une alternance en développement d'une durée d'un an. Disponible à
          partir de Juillet 2024, j'ai hâte de vous rencontrer
        </p>
        <div className="social-icons">
          <a
            href="https://github.com/GaetaneSeguin"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/gaetane-seguin/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero
