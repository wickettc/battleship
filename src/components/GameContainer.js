import React, { useState, useEffect } from 'react';
import Gameboard from '../components/Gameboard';
import playerFactory from '../factories/playerFactory';
import PlayerForm from '../components/PlayerForm';

function GameContianer({
    restart,
    setRestart,
    isGame,
    setIsGame,
    setShowControls,
    setWinner,
}) {
    const [player1, setPlayer1] = useState({});
    const [player2, setPlayer2] = useState({});
    const [start, setStart] = useState(false);
    const [p1Turn, setP1Turn] = useState(null);

    // sets players on start of game and shows restart button
    useEffect(() => {
        setPlayer2(playerFactory('Computer'));
        setP1Turn(false);
        if (start) {
            setShowControls(true);
        }
    }, [start, setIsGame, setShowControls]);

    // resets AI past shots on restart of game
    useEffect(() => {
        if (restart) {
            player1.resetPastShots();
            setP1Turn(false);
        }
    }, [restart, player1]);

    function gameLoop(checkWinner, curPlayer) {
        if (checkWinner) {
            setP1Turn(!p1Turn);
        } else {
            // winner is going to be opposite player of winning board
            curPlayer === 'Computer' ? setWinner(player1) : setWinner(player2);
            // resets AI shots on win
            player1.resetPastShots();
            setP1Turn(false);
        }
    }

    return (
        <div>
            {!start ? (
                <PlayerForm setStart={setStart} setPlayer1={setPlayer1} />
            ) : (
                <div className="app-gameboard-container">
                    <Gameboard
                        player={player1}
                        yourTurn={p1Turn}
                        gameLoop={gameLoop}
                        start={start}
                        restart={restart}
                        setRestart={setRestart}
                        isGame={isGame}
                        setIsGame={setIsGame}
                    />
                    <Gameboard
                        player={player2}
                        yourTurn={!p1Turn}
                        gameLoop={gameLoop}
                        start={start}
                        restart={restart}
                        setRestart={setRestart}
                        isGame={isGame}
                        setIsGame={setIsGame}
                    />
                </div>
            )}
        </div>
    );
}

export default GameContianer;
