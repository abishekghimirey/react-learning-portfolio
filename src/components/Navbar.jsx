import {
  NavLink
} from "react-router-dom";

import {
  useState,
  useEffect
} from "react";

function Navbar() {

  const [darkMode, setDarkMode] =
    useState(false);

  useEffect(() => {

    const savedTheme =
      localStorage.getItem("darkMode");

    if(savedTheme === "true"){

      setDarkMode(true);

      document.body.classList.add("dark");

    }

  }, []);

  const toggleTheme = () => {

    setDarkMode(!darkMode);

    localStorage.setItem(
      "darkMode",
      !darkMode
    );

    document.body.classList.toggle("dark");

  };

  return (

    <nav>

      <NavLink
        to="/"
        className={({isActive}) =>
          isActive ? "active-link" : ""
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/profile"
        className={({isActive}) =>
          isActive ? "active-link" : ""
        }
      >
        Profile
      </NavLink>

      <NavLink
        to="/skills"
        className={({isActive}) =>
          isActive ? "active-link" : ""
        }
      >
        Skills
      </NavLink>

      <NavLink
        to="/concepts"
        className={({isActive}) =>
          isActive ? "active-link" : ""
        }
      >
        Concepts
      </NavLink>

      <NavLink
        to="/notes"
        className={({isActive}) =>
          isActive ? "active-link" : ""
        }
      >
        Notes
      </NavLink>

      <button onClick={toggleTheme}>

        {darkMode
          ? "Light Mode"
          : "Dark Mode"}

      </button>

    </nav>

  );
}

export default Navbar;