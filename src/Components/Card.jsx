import React, { useState } from "react";
import "../Styles/Card.css"

export function Card({ id, name, imag, location, status, onSelect }){

  //estado de seleccion -> true:false
  const [isSelected, setIsSelected] = useState(false);

  //manejo de seleccion
  const handleSelection = () => {
    const newSelectedState = !isSelected;
    setIsSelected(newSelectedState);
    onSelect({ id, name, imag, location, status }, newSelectedState);
  };

  return(
    <div className={`${isSelected? "card-selected":""} card text-bg-dark`}
      onClick={handleSelection}
      style={{cursor: "pointer"}}
    >
      <img src={imag} className="card-img" alt={name}/>
      <div className="card-img-overlay">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">Locación actual: {location} <br /> Estado: {status}</p>
      </div>
  </div>
  );
}