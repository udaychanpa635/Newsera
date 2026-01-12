import React from "react";

const NavBar = ({ setCategory }) => {
  const categories = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];

  return (
    <nav className="nav-glass">
      <div className="nav-brand">Newsera</div>

      <ul className="nav-links">
        {categories.map((cat) => (
          <li key={cat} onClick={() => setCategory(cat)}>
            <span>{cat}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
