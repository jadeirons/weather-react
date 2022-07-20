import "./Styles.css";

export default function Search() {
  return (
    <div>
      <form class="Search-form" id="search-form">
        <div class="input-group mb-3">
          <input
            type="search"
            class="form-control"
            id="city-search"
            placeholder="Search for a city..."
          />
          <button
            class="btn btn-outline-primary"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>

        <button
          class="btn btn-outline-primary btn-sm"
          type="button"
          id="current-location-btn"
        >
          Current location
        </button>
      </form>
    </div>
  );
}
