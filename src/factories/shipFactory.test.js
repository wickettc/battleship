import shipFactory from './shipFactory';

let firstShip = shipFactory(5);

test('create ship with length of 5', () => {
    expect(firstShip.length).toBe(5);
});

firstShip.hit(0);

// test('ship hit function', () => {
//     expect(firstShip.hitLocations).toEqual([
//         'X',
//         undefined,
//         undefined,
//         undefined,
//         undefined,
//     ]);
// });

firstShip.hit(4);

test('ship hit function again', () => {
    expect(firstShip.hitLocations).toEqual([
        'X',
        undefined,
        undefined,
        undefined,
        'X',
    ]);
});
