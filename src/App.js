import "./App.css";
import Home from "./home/Home";
import { CartProvider } from "./context/CartContext";
function App() {
  return (
    <CartProvider>
      <div className="App">
        <Home />
      </div>
    </CartProvider>
  );
}

export default App;
