import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, renderDelete}) {
  
  const renderInitialListings = listings.map((listing) => {
    return (
      <ListingCard 
        key={listing.id} 
        listing={listing}
        renderDelete={renderDelete}
      />
    )
  })

  return (
    <main>
      <ul className="cards">
        {renderInitialListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
