import React from "react";

function Search({formData, setFormData, searchRender}) {

  function handleSubmit(e) {
    e.preventDefault();
    searchRender(formData.description)
  }

  function handleChange(e) {
    const {name, value} = e.target
    setFormData({...formData, 
      [name]: value})
    console.log(name, value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        name="description"
        placeholder="search free stuff"
        value={formData.description}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
