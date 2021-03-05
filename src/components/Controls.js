import React from 'react';

const Controls = ({ setRestart, isGame, setIsGame }) => {
    return (
        <div>
            <button
                onClick={() => {
                    setIsGame(false);
                    setRestart(true);
                }}
            >
                {isGame ? 'Restart' : 'Shuffle'}
            </button>
        </div>
    );
};

export default Controls;
