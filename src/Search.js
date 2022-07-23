import "./Styles.css";

export default function Search() {
  return (
    <div class="Search">
      <form class="search-form">
        <input
          type="search"
          class="search"
          placeholder="Search for a city..."
        />
        <input type="submit" value="Search" class="button" />
      </form>
    </div>
  );
}
