import React, { useState, useEffect } from 'react';
import Gameboard from '../components/Gameboard';
import WinnerBanner from '../components/WinnerBanner';
import playerFactory from '../factories/playerFactory';
import _ from 'lodash';

function GameContianer() {
    const [player1, setPlayer1] = useState({});
    const [player2, setPlayer2] = useState({});
    const [p1Turn, setP1Turn] = useState(null);
    const [winner, setWinner] = useState(false);

    useEffect(() => {
        setPlayer1(playerFactory('You'));
        setPlayer2(playerFactory('Computer'));
        setP1Turn(false);
    }, []);

    function gameLoop(checkWinner, curPlayer) {
        if (checkWinner) {
            setP1Turn(!p1Turn);
        } else {
            // winner is going to be opposite player of winning board
            curPlayer === 'Computer' ? setWinner(player1) : setWinner(player2);
        }
    }

    return (
        <div>
            {winner ? <WinnerBanner player={winner} /> : null}
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

export default GameContianer;
