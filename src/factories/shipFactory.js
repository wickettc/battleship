const shipFactory = (id, shipLength, isVertical) => {
    const hitLocations = Array(shipLength);

    const hit = (position) => {
        hitLocations[position] = 'X';
    };

    const isSunk = () => {
        for (let i = 0; i < hitLocations.length; i++) {
            if (hitLocations[i] !== 'X') return false;
        }
        return true;}
    return { id, shipLength, isVertical, hit, hitLocations, isSunk };
    };


export default shipFactory;
