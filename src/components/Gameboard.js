import React, { useEffect, useState } from 'react';
import gameboardFactory from '../factories/gameboardFactory';
import shipFactory from '../factories/shipFactory';
import './Gameboard.css';
import _ from 'lodash';

const GameBoard = ({ player }) => {
    const [board, setBoard] = useState({});

    useEffect(() => {
        // generate the 5 ships
        const ships = [];
        for (let i = 1; i < 6; i++) {
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

    return (
        <div>
            {_.isEmpty(board) ? null : (
                <div>
                    <h3>{player.playerInfo.name}</h3>
                    <div className="gameboard-grid-container">
                        {board.boardInfo.board.map((square, index) => {
                            return (
                                <div
                                    key={index}
                                    id={`${player.playerInfo.name}-${index}`}
                                    className={`${
                                        square.ship !== false ? 'ship' : ''
                                    } grid-square`}
                                ></div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default GameBoard;
