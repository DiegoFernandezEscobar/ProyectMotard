import './App.css';
import ItemList from './Components/ItemListContainer/ItemList/ItemList';
import Navbar from './Components/Navbar/Navbar';
import Slider from './Components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <ItemList/>
    </div>
  );
}

export default App;
