import React from "react";
import { Link } from "react-router-dom";

export default function Cocktail(props: any) {
  const { drink } = props;

  return (
    <article className="cocktail">
      <div className="cocktail__image">
        <img src={drink.strDrinkThumb} alt="" />
      </div>
      <div className="cocktail__footer">
        <h3>{drink.strDrink}</h3>
        <h4>{drink.strGlass}</h4>
        <p>{drink.strAlcoholic}</p>
        <Link to={`/cocktail/${drink.idDrink}`}>Details</Link>
      </div>
    </article>
  );
}
