import playerFactory from './playerFactory';

const p1 = playerFactory('player 1');

test('AI smart next move in play < 0', () => {
    expect(p1.AI({ hit: true, location: 0 })).toBeGreaterThan(0);
});

test('AI smart next move < 99', () => {
    expect(p1.AI({ hit: true, location: 99 })).toBeLessThan(99);
});
