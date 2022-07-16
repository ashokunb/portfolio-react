import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';



function Nav(props) {
  
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;

  return (
    <header className="column has-background-light">
      <nav className="">
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