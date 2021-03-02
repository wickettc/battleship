import React, { useEffect, useState } from 'react';
import gameboardFactory from '../factories/gameboardFactory';
import './Gameboard.css';
import _ from 'lodash';

const GameBoard = () => {
    const [board, setBoard] = useState({});

    useEffect(() => {
        const gameboard = gameboardFactory();
        setBoard(gameboard);
        console.log(gameboard);
    }, []);

    return (
        <div>
            <div className="gameboard-grid-container">
                {_.isEmpty(board)
                    ? null
                    : board.boardInfo.board.map((square, index) => {
                          return (
                              <div key={index} className="grid-square"></div>
                          );
                      })}
            </div>
        </div>
    );
};

export default GameBoard;
