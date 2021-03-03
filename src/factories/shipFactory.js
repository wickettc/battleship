const shipFactory = (id, length, isVertical) => {
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

    return { id, length, isVertical, hit, hitLocations, isSunk };
};

export default shipFactory;
