const playerFactory = (name) => {
    const playerInfo = {
        name,
        pastShots: [],
    };

    const AI = () => {
        function getRandom() {
            return Math.floor(Math.random() * 100);
        }
        let ranMove = getRandom();
        while (playerInfo.pastShots.includes(ranMove)) {
            ranMove = getRandom();
        }
        playerInfo.pastShots.push(ranMove);
        return ranMove;
    };

    return {
        playerInfo,
        AI,
    };
};

export default playerFactory;
