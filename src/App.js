import './App.css';
import GameBoard from './components/Gameboard';
// import shipFactory from './factories/shipFactory';
// import playerFactory from './factories/playerFactory';
// import gameboardFactory from './factories/gameboardFactory';

function App() {
    return (
        <div className="App">
            <h1>BattleShip!</h1>
            <div className="app-gameboard-container">
                <GameBoard />
            </div>
        </div>
    );
}

export default App;
