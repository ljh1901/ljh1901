import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import Header from './components/header/Header.jsx';
import Profile from './components/profilesection/ProfileSection.jsx';
import Skills from './components/skillssection/Skills.jsx';
import Projects from './components/projectssection/Projects.jsx';
import Footer from './components/footer/Footer.jsx';
import TypeIt from "typeit-react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main-app">
      <Header />

      <section className="main-section">
        <div className="intro-section">
          <img src={heroImg} className="intro-image-base" width="170" height="179" alt="Hero" />
          <img src={reactLogo} className="intro-image-react" alt="React logo" />
          <img src={viteLogo} className="intro-image-vite" alt="Vite logo" />

          <div className="intro-text">
            <h1>
              My dream is Full-Stack Developer who values clean architecture and efficient data flow
            </h1>
            <TypeIt
              options={{
                strings: ["Back-End", "Front-End"],
                speed: 100,
                loop: true,
                loopDelay: 5000,
                waitUntilVisible: true
              }}
            />
          </div>

          <Profile />

          <button
            className="counter-button"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </button>
        </div>
      </section>

      <Projects />
      <Skills />

      <section className="contact-section">
        <div className="contact-container">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect With Me</h2>
          <p>Contact</p>
          <ul>
            <li>
              <a href="https://github.com/ljh1901" target="_blank">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <i className="fa-brands fa-notion"></i>
                Notion
              </a>
            </li>
            <li>
              <a href="mailto:juho8690@gmail.com" target="_blank">
                <i className="fa-solid fa-envelope"></i>
                juho8690@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;