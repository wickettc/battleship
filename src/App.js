import './App.css';
import Ship from './components/Ship';

function App() {
    return <div className="App">{console.log(Ship(5, [3, 2], false))}</div>;
}

export default App;
