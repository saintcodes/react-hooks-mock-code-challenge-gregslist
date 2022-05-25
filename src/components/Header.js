import React from "react";
import Search from "./Search";

function Header({listings, formData, setFormData, searchRender}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search 
        searchRender={searchRender}
        listings={listings}
        formData={formData} 
        setFormData={setFormData}
      />
    </header>
  );
}

export default Header;
