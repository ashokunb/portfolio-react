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

  const [currentCategory, setCurrentCategory] = useState(categories[0].name);


  function RenderPage() {
    switch (currentCategory) {
      case 'About me':
        return  <About/>
      case 'Projects':
        return <Projects/>
      case 'Contact Me':
        return <ContactForm/>
      case 'Resume':
        return <Resume/>
        default:
          return  <About/>
    }
  }

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}>
      </Nav>

        <main className=" has-text-white">
          
          {currentCategory ? (
            <>
            {RenderPage()}
            </>
          ) : (
          <section className="column has-text-centered  m-5">
            <ContactForm></ContactForm>
          </section>
          )}
          <Footer/>
        </main>
      
    </div>
  );
}

export default App;
