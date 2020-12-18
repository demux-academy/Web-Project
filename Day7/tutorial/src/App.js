import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Wallet from "./Components/Wallet";
import Cart from "./Components/Cart";
import "./App.css"
const item=[
  {name: 'Omelette', price: 2},
  {name: 'Nuggets', price: 5},
  {name: 'Burger', price: 10},
  {name: 'Pizza', price: 20}
]
function App() {
  return (
    <div className="App">
      <Wallet name="Akshay"/>
      <Cart items={item}/>
    </div>
  );
}

export default App;
