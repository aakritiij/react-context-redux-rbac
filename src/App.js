import Login from "./components/Login";
import ProductManager from "./components/ProductManager";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <div className="card">
        <Login />
        <hr />
        <ProductManager />
      </div>
    </div>
  );
}
