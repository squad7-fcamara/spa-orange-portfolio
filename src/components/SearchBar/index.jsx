import { SearchBarSC } from "./style";

function SearchBar() {
  return (
    <SearchBarSC>
      <label htmlFor="search-tag-input">
        Meus Projetos<br/>
        <input
          type="text"
          name="search-tag"
          id="search-tag-input"
          placeholder="Buscar tags"
        />
      </label>
    </SearchBarSC>
  );
}

export default SearchBar;
