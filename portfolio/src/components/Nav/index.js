import React, { useEffect } from 'react';

function Nav(props) {

  const {
    categories,
    setCurrentCategory,
    currentCategory,
  } = props;

  useEffect(() => {
    document.title = (currentCategory);
  }, [currentCategory]);


  return (
    <header className="column has-background-light">
      <nav className="">
        <div id="navcontent" className="navbar-start mt-3">
          {categories.map((category) => (
            <li
              className={`navbar-item navbar-menu ${currentCategory.name === category.name && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  console.log('clicked')
                  setCurrentCategory(category.name);
                }}
              >
                {category.name}
              </span>
            </li>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Nav;