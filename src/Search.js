import "./Styles.css";

export default function Search() {
  return (
    <div>
      <form className="search-form">
        <input
          type="search"
          className="search-input"
          placeholder="Search for a city..."
        />
        <input type="submit" value="Search" className="search-button" />
      </form>
    </div>
  );
}
