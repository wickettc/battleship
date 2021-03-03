// import shipFactory from './shipFactory';
import _ from 'lodash';

const gameboardFactory = (ownerName) => {
    const boardInfo = {
        board: [],
        shipsLeft: true,
        owner: ownerName,
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
    };

    const receiveHit = (coords) => {
        boardInfo.board[coords].beenHit = true;
        allShipsSunk();
    };

    const placeShip = (ship, startCoord) => {
        if (ship.isVertical) {
            for (let i = 0; i < ship.length; i++) {
                boardInfo.board[startCoord + i * 10].ship = ship.id;
            }
        } else {
            for (let i = 0; i < ship.length; i++) {
                boardInfo.board[startCoord + i].ship = ship.id;
            }
        }
    };

    return { boardInfo, receiveHit, placeShip };
};

export default gameboardFactory;
