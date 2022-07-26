import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="container">
      <Weather />
      <Footer />
    </div>
  );
}
