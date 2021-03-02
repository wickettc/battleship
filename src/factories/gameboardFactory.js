// import shipFactory from './shipFactory';
import _ from 'lodash';

const gameboardFactory = (coords) => {
    const boardInfo = {
        board: [],
        shipsLeft: true,
    };

    const initBoard = () => {
        for (let i = 0; i < 100; i++) {
            boardInfo.board.push({ ship: false, beenHit: false });
        }
    };

    if (_.isEmpty(boardInfo.board)) {
        initBoard();
    }

    const allShipsSunk = () => {
        for (let square of boardInfo.board) {
            if (square.ship !== false) {
                if (square.beenHit === false) {
                    console.log('ships are left');
                    boardInfo.shipsLeft = true;
                    return;
                }
            }
        }
        console.log('all ships are sunk');
        boardInfo.shipsLeft = false;
        // return false;
    };

    const receiveHit = (coords) => {
        boardInfo.board[coords].beenHit = true;
        allShipsSunk();
        // return allShipsSunk() ? (shipsLeft = true) : (shipsLeft = false);
    };

    const placeShip = (shipID, startCoord, shipLength, isVertical) => {
        if (isVertical) {
            for (let i = 0; i < shipLength; i++) {
                boardInfo.board[startCoord + i * 10].ship = shipID;
            }
        } else {
            for (let i = 0; i < shipLength; i++) {
                boardInfo.board[startCoord + i].ship = shipID;
            }
        }
    };

    return { boardInfo, receiveHit, placeShip };
};

export default gameboardFactory;
