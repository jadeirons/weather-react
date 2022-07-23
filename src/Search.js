import "./Styles.css";

export default function Search() {
  return (
    <div>
      <form class="search-form">
        <input
          type="search"
          class="search-input"
          placeholder="Search for a city..."
        />
        <input type="submit" value="Search" class="search-button" />
      </form>
    </div>
  );
}
