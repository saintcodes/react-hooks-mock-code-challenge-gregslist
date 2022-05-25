import React, {useState} from "react";

function ListingCard({listing, renderDelete}) {
  const [fav, setFav] = useState(false)
  const {id, description, image, location} = listing

  function handleFav() {
    setFav(fav => !fav)
  }

  function handleDelete(e) {
    // console.log(id)
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    .then(renderDelete(id))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {fav ? (
          <button onClick={handleFav} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFav} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} value={id} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
