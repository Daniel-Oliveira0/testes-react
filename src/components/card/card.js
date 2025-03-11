import React from "react";
import "./card.css";
import Button from "../button/button";

const Card = ({ title, description }) => {
    const handleClick = () => {
      alert(`Você clicou no botão do ${title}`);
    };
  
    return (
      <div className="card">
        <h1>{title}</h1>
        <p>{description}</p>
        <Button onClick={handleClick} />
      </div>
    );
  };
  

export default Card;