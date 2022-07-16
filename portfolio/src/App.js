//import logo from './logo.svg';
//import './App.css';

import About from "./components/About";
import Nav from "./components/Nav";
import Projects from "./components/Projects/projects";


function App() {
  return (
    <hero>
      <div class="columns my-height is-vcentered has-text-white">
        <section class="column has-text-centered is-half m-5">
          <Nav></Nav>
          <About></About>
          <Projects></Projects>
      
        </section>
      </div>
    </hero>
  );
}

export default App;

//function App() {
//   return (
//     <hero>
//       <div class="columns my-height is-vcentered has-text-white">
//         <section class="column has-text-centered is-half m-5">
          
//         </section>
//       </div>
//     </hero>
//   );
// }
