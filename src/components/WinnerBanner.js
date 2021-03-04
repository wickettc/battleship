import React from 'react';
import './WinnerBanner.css';

const WinnerBanner = ({ player }) => {
    return (
        <div className="winner-banner">
            <h1>{player.playerInfo.name} Wins!!!</h1>
        </div>
    );
};

export default WinnerBanner;
