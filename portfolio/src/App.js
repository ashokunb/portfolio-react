//import logo from './logo.svg';
//import './App.css';
import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import About from "./components/About";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import ContactForm from './components/Contact'
import Resume from './components/Resume';


function App() {

  const [categories] = useState([
    {name: 'About me'},
    { name: 'Projects'},
    { name: 'Contact Me'},
    { name: 'Resume'},
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <hero>
      <div>
        <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}></Nav>
      </div>
      <div className="columns my-height is-vcentered has-text-white">
        <section className="column has-text-centered is-half m-5">
        
          <About></About>
          <Projects></Projects>
          <Resume></Resume>
          <ContactForm></ContactForm>
      
        </section>
      </div>
    </hero>
  );
}

export default App;

//function App() {
//   return (
//     <hero>
//       <div classNameName="columns my-height is-vcentered has-text-white">
//         <section classNameName="column has-text-centered is-half m-5">
          
//         </section>
//       </div>
//     </hero>
//   );
// }
