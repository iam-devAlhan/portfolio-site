import styles from "./navbar.module.css";
import { Link, scroller } from "react-scroll";
import { useState, useEffect } from "react";

const Navbar = function () {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ["about", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on link click (mobile)
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Close menu on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header>
        <nav>
          <div 
            className={`${styles.container} ${styles["navbar-header"]} ${
              scrolled ? styles.scrolled : ""
            }`}
          >
            {/* Optional Brand/Logo */}
            <a href="/" className={styles.brand}>
              Alhaan<span>.</span>
            </a>

            {/* Hamburger Menu Button */}
            <button
              className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            {/* Navigation Links */}
            <ul className={isOpen ? styles.open : ""}>
              <Link
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={handleLinkClick}
              >
                <li className={`${styles["nav-link"]} ${activeSection === "about" ? styles.active : ""}`}>
                  About
                </li>
              </Link>
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={handleLinkClick}
              >
                <li className={`${styles["nav-link"]} ${activeSection === "portfolio" ? styles.active : ""}`}>
                  Portfolio
                </li>
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={handleLinkClick}
              >
                <li className={`${styles["nav-link"]} ${activeSection === "contact" ? styles.active : ""}`}>
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      </header>

      {/* Overlay for mobile menu */}
      <div 
        className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
    </>
  );
};

export default Navbar;