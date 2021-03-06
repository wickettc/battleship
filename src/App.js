import React, { useState } from 'react';
import './App.css';
import GameContianer from './components/GameContainer';
import WinnerBanner from './components/WinnerBanner';
import Controls from './components/Controls';

function App() {
    const [restart, setRestart] = useState(false);
    const [isGame, setIsGame] = useState(false);
    const [showControls, setShowControls] = useState(false);
    const [winner, setWinner] = useState(false);

    return (
        <div className="App">
            {winner ? <WinnerBanner player={winner} /> : <h1>BATTLESHIP</h1>}
            {showControls ? (
                <Controls
                    isGame={isGame}
                    setIsGame={setIsGame}
                    setRestart={setRestart}
                    setWinner={setWinner}
                />
            ) : null}

            <GameContianer
                restart={restart}
                setRestart={setRestart}
                isGame={isGame}
                setIsGame={setIsGame}
                setShowControls={setShowControls}
                setWinner={setWinner}
            />
        </div>
    );
}

export default App;
