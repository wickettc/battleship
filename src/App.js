import React, { useState, useEffect } from 'react';
import './App.css';
import GameContianer from './components/GameContainer';
import Controls from './components/Controls';

function App() {
    return (
        <div className="App">
            <h1>BattleShip!</h1>
            <GameContianer />
            <Controls />
        </div>
    );
}

export default App;
