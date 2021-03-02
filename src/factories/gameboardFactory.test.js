import gameboardFactory from './gameboardFactory';

const firstBoard = gameboardFactory();
firstBoard.placeShip(1, 0, 5, false);

// test('place Ship function 0', () => {
//     expect(firstBoard.board[0]).toEqual({ ship: 1, beenHit: false });
// });

// test('place Ship function 1', () => {
//     expect(firstBoard.board[1]).toEqual({ ship: 1, beenHit: false });
// });

// test('place Ship function 2', () => {
//     expect(firstBoard.board[2]).toEqual({ ship: 1, beenHit: false });
// });

// test('place Ship function 3', () => {
//     expect(firstBoard.board[3]).toEqual({ ship: 1, beenHit: false });
// });

// test('place Ship function 4', () => {
//     expect(firstBoard.board[4]).toEqual({ ship: 1, beenHit: false });
// });

// test('place Ship function, no placement', () => {
//     expect(firstBoard.board[5]).toEqual({ ship: false, beenHit: false });
// });

firstBoard.receiveHit(0);
firstBoard.receiveHit(1);
firstBoard.receiveHit(2);
firstBoard.receiveHit(3);
firstBoard.receiveHit(4);

test('hits and shipsLeft work', () => {
    expect(firstBoard.boardInfo.shipsLeft).toBe(false);
});
