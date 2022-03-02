import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function CocktailDetail() {
  const { cocktailID } = useParams();

  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailID}`
        );
        if (response.status === 200) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = response.data.drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          // @ts-ignore
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [cocktailID]);

  if (!cocktail) {
    return <h2>No cocktail to display</h2>;
  } else {
    const { name, image, info, category, glass, instructions, ingredients } =
      cocktail;
    return (
      <div className="cocktail-detail">
        <Link to="/">Way back home! </Link>
        <h1>{name}</h1>
        <div className="drink">
          <div className="drink__image">
            <img src={image} alt={name} />
          </div>
          <div className="drink__info">
            <p>
              <span className="drink__data">Name:</span>
              {name}
            </p>
            <p>
              <span className="drink__data">Category:</span>
              {category}
            </p>
            <p>
              <span className="drink__data">Info:</span>
              {info}
            </p>
            <p>
              <span className="drink__data">Glass:</span>
              {glass}
            </p>
            <p>
              <span className="drink__data">Instructions:</span>
              {instructions}
            </p>
            <p>
              <span className="drink__data">Ingredients:</span>
              {
                // @ts-ignore
                ingredients.map((item: any, index: number) => {
                  return item ? <span key={index}>{item}</span> : null;
                })
              }
            </p>
          </div>
        </div>
      </div>
    );
  }
}
