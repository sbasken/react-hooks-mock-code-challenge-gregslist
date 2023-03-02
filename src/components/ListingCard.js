import React, { useState } from "react";

function ListingCard({ item, onDeleteItem }) {
  const { description, image, location } = item
  const [ isFave, setIsFave ] = useState(false)

  const handleDelete = () => {
    fetch(`http://localhost:6001/listings/${item.id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(() => onDeleteItem(item.id))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <label onClick={() => setIsFave(isFave => !isFave)}>{isFave ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}</label>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
