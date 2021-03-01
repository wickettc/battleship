const Ship = (length) => {
    const hitLocations = Array(length);

    const hit = (position) => {
        hitLocations[position] = 'X';
    };

    const isSunk = () => {
        for (let i = 0; i < hitLocations.length; i++) {
            if (hitLocations[i] !== 'X') return false;
        }
        return true;
    };

    return { length, hit, hitLocations, isSunk };
};

export default Ship;
