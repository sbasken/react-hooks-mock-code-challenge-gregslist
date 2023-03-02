import React from "react";
import Search from "./Search";

function Header({ onFilterItems, onSubmit }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onFilterItems={onFilterItems} onSubmit={onSubmit}/>
    </header>
  );
}

export default Header;
