import React from "react";

function Nav() {
    const categories = [
        {
            name:"About me",
        },
        {
            name:"Projects",
        },
        {
            name:"Contact Me",
        },
        {
            name:"Resume",
        },
    ];

    const handleClick = () => {
        console.log("click handled")
      }


    return (
        <header >
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => handleClick()}>
              About me
            </a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick()}>
              Contact
            </span>
          </li>
          {
            categories.map((category) => (
              <li className="mx-1" key={category.name} >
                <span onClick={() => { handleClick(); }}>
                 {(category.name)}
                </span>
              </li>
            ))
          }
        </ul>
      </nav>
        </header>
    )
}

export default Nav;