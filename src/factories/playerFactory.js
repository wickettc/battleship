const playerFactory = (name) => {
    const playerInfo = {
        name,
        pastShots: [],
    };

    const getRandom = (num) => {
        return Math.floor(Math.random() * num);
    };

    const AI = (lastShot) => {
        if (lastShot.hit) {
            const figureNext = (lastShot) => {
                let ranNum = getRandom(4);
                let nextMove;
                switch (ranNum) {
                    case 0:
                        nextMove = lastShot.location + 1;
                        break;
                    case 1:
                        nextMove = lastShot.location - 1;
                        break;
                    case 2:
                        nextMove = lastShot.location + 10;
                        break;
                    case 3:
                        nextMove = lastShot.location - 10;
                        break;
                    default:
                        console.log('impossible');
                }
                return nextMove;
            };
            let nextMove = figureNext(lastShot);
            while (
                playerInfo.pastShots.includes(nextMove) ||
                nextMove > 99 ||
                nextMove < 0
            ) {
                nextMove = figureNext(lastShot);
            }
            console.log(nextMove);
            playerInfo.pastShots.push(nextMove);
            return nextMove;
        } else {
            let ranMove = getRandom(100);
            while (playerInfo.pastShots.includes(ranMove)) {
                ranMove = getRandom(100);
            }
            playerInfo.pastShots.push(ranMove);
            return ranMove;
        }
    };

    return {
        playerInfo,
        AI,
    };
};

export default playerFactory;
