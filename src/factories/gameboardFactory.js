// import shipFactory from './shipFactory';
import _ from 'lodash';

const gameboardFactory = (ownerName) => {
    const boardInfo = {
        board: [],
        shipsLeft: true,
        owner: ownerName,
        lastShot: {
            hit: false,
            location: false,
        },
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
        // loop through board
        for (let square of boardInfo.board) {
            // check if square contains a ship
            if (square.ship !== false) {
                // if it does check if square has been hit
                if (square.beenHit === false) {
                    // as long as one sqaure with a ship
                    // has not been hit there are still ships
                    boardInfo.shipsLeft = true;
                    return;
                }
            }
        }
        // all squares with a ship have been hit
        // there are no ships left
        boardInfo.shipsLeft = false;
    };

    const receiveHit = (coords) => {
        boardInfo.board[coords].beenHit = true;
        if (boardInfo.board[coords].ship !== false) {
            boardInfo.lastShot.hit = true;
            boardInfo.lastShot.location = coords;
        } else {
            boardInfo.lastShot.hit = false;
            boardInfo.lastShot.location = false;
        }
        allShipsSunk();
    };

    const placeShip = (ship, startCoord) => {
        if (ship.isVertical) {
            for (let i = 0; i < ship.shipLength; i++) {
                boardInfo.board[startCoord + i * 10].ship = ship.id;
            }
        } else {
            for (let i = 0; i < ship.shipLength; i++) {
                boardInfo.board[startCoord + i].ship = ship.id;
            }
        }
    };

    return { boardInfo, receiveHit, placeShip };
};

export default gameboardFactory;
