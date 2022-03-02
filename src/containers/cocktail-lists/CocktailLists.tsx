import React from "react";

import Cocktail from "../../components/cocktails/Cocktail";

export default function CocktailLists(props: any) {
  const { drinks } = props;
  return (
    <div className="main-content">
      <h1>Cocktails</h1>
      <div className="cocktail-container">
        {drinks &&
          drinks.length > 0 &&
          drinks.map((drink: any) => {
            return <Cocktail key={drink.idDrink} drink={drink} />;
          })}
      </div>
    </div>
  );
}
