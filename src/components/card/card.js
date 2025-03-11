import React from "react";
import "./card.css";
import Button from "../button/button";

const Card = ({title, description}) => {
    return (
        <div className="card">
            <h1>{title}</h1>
            <p>{description}</p>
            <Button/>
        </div>
    );
}

// Outra forma de criar o componente Card com CLASSE
// class Card extends React.Component {
//     render(){
//         return (
//             <div className="card">
//                 <h3>{this.props.title}</h3>
//                 <p>Esse é um texto do card</p>    
//             </div>
//         );
//     }
// }

export default Card;