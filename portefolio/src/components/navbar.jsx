
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          Gaëtane's Portfolio
        </Link>
      </div>
      <a href="" className="cta-btn">A propos de moi</a>
      <a href="" className="cta-btn">Compétences</a>
      <a href="" className="cta-btn">Projets</a>
      <a href="" className="cta-btn">Contact</a>
      <a href="" className="cta-btn">CV</a>
    </div>
  )
}

export default Navbar;