import React from "react";

export default function SearchForm(props: any) {
  const handleOnChange = (e: any) => {
    props.searchDinkItem(e.target.value);
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="search-section">
      <form className="search-form" onSubmit={handleOnSubmit}>
        <div className="form-control">
          <label htmlFor="search" className="label">
            Search Your Favorite Cocktail
          </label>
          <input type="text" id="search" onChange={handleOnChange} />
        </div>
      </form>
    </div>
  );
}
