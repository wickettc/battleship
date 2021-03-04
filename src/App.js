import React, { useState, useEffect } from 'react';
import './App.css';
import Gameboard from './components/Gameboard';
import WinnerBanner from './components/WinnerBanner';
// import shipFactory from './factories/shipFactory';
import playerFactory from './factories/playerFactory';
// import gameboardFactory from './factories/gameboardFactory';
import _ from 'lodash';

function App() {
    const [player1, setPlayer1] = useState({});
    const [player2, setPlayer2] = useState({});
    const [p1Turn, setP1Turn] = useState(null);
    const [winner, setWinner] = useState(false);

    useEffect(() => {
        setPlayer1(playerFactory('chase'));
        setPlayer2(playerFactory('computer'));
        setP1Turn(false);
    }, []);

    function gameLoop(checkWinner, curPlayer) {
        if (checkWinner) {
            setP1Turn(!p1Turn);
        } else {
            // winner is going to be opposite player of winning board
            curPlayer === 'computer' ? setWinner(player1) : setWinner(player2);
        }
    }

    return (
        <div className="App">
            {winner ? <WinnerBanner player={winner} /> : <h1>BattleShip!</h1>}
            {_.isEmpty(player1) && _.isEmpty(player2) ? null : (
                <div className="app-gameboard-container">
                    <Gameboard
                        player={player1}
                        yourTurn={p1Turn}
                        gameLoop={gameLoop}
                    />
                    <Gameboard
                        player={player2}
                        yourTurn={!p1Turn}
                        gameLoop={gameLoop}
                    />
                </div>
            )}
        </div>
    );
}

export default App;
