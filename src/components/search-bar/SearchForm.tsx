import React from "react";

export default function SearchForm() {
  return (
    <div className="search-section">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="search" className="label">
            Search Your Favorite Cocktail
          </label>
          <input type="text" id="search" />
        </div>
      </form>
    </div>
  );
}
