//import logo from './logo.svg';
//import './App.css';
import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import About from "./components/About";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import ContactForm from './components/Contact'
import Resume from './components/Resume';
import Footer from './components/Footer';


function App() {

  const [categories] = useState([
    { name: 'About me' },
    { name: 'Projects' },
    { name: 'Contact Me' },
    { name: 'Resume' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}>
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      </Nav>

        <main className="columns has-text-white">
          
          <section className="column has-text-centered  m-5">
            <ContactForm></ContactForm>
            <About></About>
            <Projects></Projects>
            <Resume></Resume>
            <Footer></Footer>
          </section>
        </main>
      
    </div>
  );
}

export default App;
