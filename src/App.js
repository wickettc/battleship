import React, { useState } from 'react';
import './App.css';
import GameContianer from './components/GameContainer';
import Controls from './components/Controls';

function App() {
    const [restart, setRestart] = useState(false);
    const [isGame, setIsGame] = useState(false);
    const [showControls, setShowControls] = useState(false);

    return (
        <div className="App">
            <h1>BattleShip!</h1>
            {showControls ? (
                <Controls
                    isGame={isGame}
                    setIsGame={setIsGame}
                    setRestart={setRestart}
                />
            ) : null}
            <GameContianer
                restart={restart}
                setRestart={setRestart}
                isGame={isGame}
                setIsGame={setIsGame}
                setShowControls={setShowControls}
            />
        </div>
    );
}

export default App;
