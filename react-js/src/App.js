import React, { useEffect, useState } from 'react';
import './App.css';
import linksData from "./data/links.json";

function App() {
  const [theme, setTheme] = useState("dark");
  const [links, setLinks] = useState([]);

  // Carregar tema salvo no localStorage
  useEffect(() => {
    const savedTheme =localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("light-mode", savedTheme === "light");
  }, []);

  // Alternar tema
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("light-mode", newTheme === "light");
    localStorage.setItem("theme", newTheme);
  };

  // Carregar links dinâmicos
  useEffect (() => {
    setLinks(linksData);
  }, []);

  return (
    <>
    {/* Header */}
    <header>
      <section aria-labelledby='profile-title'>
        <picture>
          <source srcSet={`${process.env.PUBLIC_URL}/assets/profile.webp`} type='image/webp' />
          <img
          src={`${process.env.PUBLIC_URL}/assets/profile.jpg`}
          alt='Foto de Victor Carvalho'
          id='profile-pic'
          loading='lazy'
          />
        </picture>

        <h1 id='profile-title' className='fade-in'>
          Victor Carvalho
        </h1>
        <p className='fade-in'>Desenvolvedor Front-End em formação</p>

        <button
        id='theme-toggle'
        aria-label='Alternar tema'
        onClick={toggleTheme}>
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </section>
    </header>

    {/* Sobre mim */}
    <section id='about' aria-labelledby='about-title'>
      <h2 id='about-title' className='sr-only'>
        Sobre mim
      </h2>
      <p className='about-text'>
        Apaixonado por tecnologia, focado em construir interfaces modernas e 
        funcionais. Atualmente estudando e desenvolvendo projetos Front-End
        para consolidar minha carreira na área.
      </p>
    </section>

    {/* Links */}
    <main>
      <section aria-labelledby='links-title'>
        <h2 id='links-title' className='sr-only'>
          Meus Links
        </h2>
        <nav role='navigation' className='fade-in'>
          <ul id='links-container'>
            {links.map((link, index) => (
              <li key={index}>
                <a
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={link.aria}
                {...(link.download ? { download: "Victor-Carvalho-CV.pdf" } : {})}
                >
                  <i className={link.icon}></i> {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </main>

    {/* Footer */}
    <footer>
      <p>&copy; 2025 Victor Carvalho. Todos os direitos reservados.</p>
    </footer>
    </>
  );
}

export default App;
