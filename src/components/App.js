import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState ([])
  const [formData, setFormData] = useState({
    description: ""
   })

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then((res)=> res.json())
      .then((listings) => setListings(listings))
  }, [])

  function renderDelete(id){
    let returnedArray = listings.filter((listing)=> listing.id !== id)
    setListings(returnedArray)
  }

  function searchRender() {
    const searchedArray = listings.filter((listing)=> 
    listing.description.toLowerCase().includes(formData.description.toLowerCase()))
    setListings(searchedArray)
  }

  return (
    <div className="app">
      <Header 
        listings={listings} 
        formData={formData}
        setFormData={setFormData}
        searchRender={searchRender}
      />
      <ListingsContainer 
        listings={listings}
        renderDelete={renderDelete}
      />
    </div>
  );
}

export default App;
