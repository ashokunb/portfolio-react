import { capitalizeFirstLetter } from '../../utils/helpers';


function Nav(props) {
  
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;

  return (
    <header className="column has-background-light">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
      </h2>

      <nav className="navbaris-transparent">
        
        <div id="navcontent" className="navbar-start mt-3">
          
          {categories.map((category) => (
            <li
              className={`navbar-item navbar-menu ${
                currentCategory.name === category.name && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Nav;