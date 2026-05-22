export default function Nav() {
  return (
    <nav aria-label="Main navigation">
      <div className="nav-logo">VISHWA R</div>
      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <a href="#contact" className="nav-hire">
        Hire Me
      </a>
    </nav>
  );
}
