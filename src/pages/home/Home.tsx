import React from "react";

import SearchForm from "../../components/search-bar/SearchForm";
import CocktailLists from "../../containers/cocktail-lists/CocktailLists";
export default function Home(props: any) {
  return (
    <main>
      <SearchForm />
      <CocktailLists drinks={props.drinks} />
    </main>
  );
}
