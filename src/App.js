import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import Search from "./Search";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="container">
      <Search />
      <Footer />
    </div>
  );
}
