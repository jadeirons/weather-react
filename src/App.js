import "./Styles.css";
import Search from "./Search";
import Weather from "./Weather";
import Footer from "./Footer";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div class="Box">
      <Search />
      <Weather />
      <Forecast />
      <Footer />
    </div>
  );
}
