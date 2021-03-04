import React, { useEffect, useState } from 'react';
import gameboardFactory from '../factories/gameboardFactory';
import shipFactory from '../factories/shipFactory';
import './Gameboard.css';
import _ from 'lodash';

const GameBoard = ({ player, yourTurn, gameLoop }) => {
    const [board, setBoard] = useState({});

    useEffect(() => {
        // generate the 5 ships
        const ships = [];
        for (let i = 1; i < 6; i++) {
            // ships can only be placed horizontally for the time
            ships.push(shipFactory(i, i, false));
        }
        // init the gameboard
        const gameboard = gameboardFactory(player);
        // create array that keeps track of squares already placed
        const alreadyPlaced = [];
        // loop through array of generated ships
        for (let j = 0; j < ships.length; j++) {
            let ship = ships[j];
            function getRandom() {
                return Math.floor(Math.random() * 100);
            }
            let startCoord = getRandom();
            // squares that will be placed if ship is placed at current starting coord
            let willBePlaced = [];
            for (let i = 0; i < ship.shipLength; i++) {
                willBePlaced.push(startCoord + i);
            }
            // checks to make sure placement will be valid
            while (
                alreadyPlaced.some((item) => willBePlaced.includes(item)) ||
                (willBePlaced.includes(9) && willBePlaced.includes(10)) ||
                (willBePlaced.includes(19) && willBePlaced.includes(20)) ||
                (willBePlaced.includes(29) && willBePlaced.includes(30)) ||
                (willBePlaced.includes(39) && willBePlaced.includes(40)) ||
                (willBePlaced.includes(49) && willBePlaced.includes(50)) ||
                (willBePlaced.includes(59) && willBePlaced.includes(60)) ||
                (willBePlaced.includes(69) && willBePlaced.includes(70)) ||
                (willBePlaced.includes(79) && willBePlaced.includes(80)) ||
                (willBePlaced.includes(89) && willBePlaced.includes(90)) ||
                willBePlaced.some((item) => item > 99)
            ) {
                // restart the getRandom process if validation does not pass
                willBePlaced.length = 0;
                startCoord = getRandom();
                for (let i = 0; i < ship.shipLength; i++) {
                    willBePlaced.push(startCoord + i);
                }
            }
            gameboard.placeShip(ship, startCoord);
            // once placed adds placement squares to already placed arr
            alreadyPlaced.push(...willBePlaced);
            willBePlaced.length = 0;
        }
        setBoard(gameboard);
    }, [player]);

    useEffect(() => {
        if (!_.isEmpty(board)) {
            // runs computer AI selection if not the player
            if (
                board.boardInfo.owner.playerInfo.name !== 'Computer' &&
                yourTurn
            ) {
                // slight delay to give effect of real opponent
                setTimeout(() => {
                    board.receiveHit(board.boardInfo.owner.AI());
                    gameLoop(
                        board.boardInfo.shipsLeft,
                        board.boardInfo.owner.playerInfo.name
                    );
                }, 500);
            }
        }
    }, [yourTurn, board, gameLoop]);

    const handleHitClick = (e) => {
        let targetCoord = e.target.id.split('-')[1];
        // does not allow user to select square more than once
        if (!board.boardInfo.board[targetCoord].beenHit) {
            board.receiveHit(e.target.id.split('-')[1]);
            gameLoop(
                board.boardInfo.shipsLeft,
                board.boardInfo.owner.playerInfo.name
            );
        }
    };

    return (
        <div>
            {_.isEmpty(board) ? null : (
                <div>
                    <h3>{player.playerInfo.name}</h3>
                    <div className="gameboard-grid-container">
                        {board.boardInfo.board.map((square, index) => {
                            return (
                                <div
                                    onClick={(e) => {
                                        if (yourTurn) {
                                            handleHitClick(e);
                                        }
                                    }}
                                    key={index}
                                    id={`${player.playerInfo.name}-${index}`}
                                    className={`${
                                        square.ship !== false &&
                                        player.playerInfo.name !== 'Computer'
                                            ? 'ship'
                                            : ''
                                    } ${
                                        square.beenHit && square.ship
                                            ? 'hit'
                                            : ''
                                    } ${
                                        player.playerInfo.name === 'Computer'
                                            ? 'square-hover'
                                            : ''
                                    } grid-square`}
                                >
                                    {square.beenHit ? 'X' : ''}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default GameBoard;
