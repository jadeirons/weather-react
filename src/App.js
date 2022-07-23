import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import Search from "./Search";
import Weather from "./Weather";
import Footer from "./Footer";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="container">
      <Search />
      <div className="box">
        <Weather />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}
