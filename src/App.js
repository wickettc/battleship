import React, { useState, useEffect } from 'react';
import './App.css';
import Gameboard from './components/Gameboard';
// import shipFactory from './factories/shipFactory';
import playerFactory from './factories/playerFactory';
// import gameboardFactory from './factories/gameboardFactory';
import _ from 'lodash';

function App() {
    const [player1, setPlayer1] = useState({});
    const [player2, setPlayer2] = useState({});
    const [p1Turn, setP1Turn] = useState(true);

    useEffect(() => {
        setPlayer1(playerFactory('chase'));
        setPlayer2(playerFactory('computer'));
    }, []);

    return (
        <div className="App">
            <h1>BattleShip!</h1>
            {_.isEmpty(player1) && _.isEmpty(player2) ? null : (
                <div className="app-gameboard-container">
                    <Gameboard player={player1} />
                    <Gameboard player={player2} />
                </div>
            )}
        </div>
    );
}

export default App;
