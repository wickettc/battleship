import React from 'react';

const Controls = ({ setRestart, isGame, setIsGame, setWinner }) => {
    return (
        <div>
            <button
                onClick={() => {
                    setIsGame(false);
                    setRestart(true);
                    setWinner(false);
                }}
            >
                {isGame ? 'Restart' : 'Shuffle'}
            </button>
        </div>
    );
};

export default Controls;
