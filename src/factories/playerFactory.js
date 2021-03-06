const playerFactory = (name) => {
    const playerInfo = {
        name,
        pastShots: [],
    };

    const getRandomNum = (num) => {
        return Math.floor(Math.random() * num);
    };

    const playRandomMove = () => {
        let ranMove = getRandomNum(100);
        while (playerInfo.pastShots.includes(ranMove)) {
            ranMove = getRandomNum(100);
        }
        playerInfo.pastShots.push(ranMove);
        return ranMove;
    };

    const resetPastShots = () => {
        playerInfo.pastShots.length = 0;
    };

    const AI = (lastShot) => {
        // make AI shoot at adjacent squares if last shot was a hit
        if (lastShot.hit) {
            const figureNext = (lastShot) => {
                let ranNum = getRandomNum(4);
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
            let timeOut = 0;
            let whileTrue = true;

            while (
                playerInfo.pastShots.includes(nextMove) ||
                nextMove > 99 ||
                nextMove < 0
            ) {
                nextMove = figureNext(lastShot);
                timeOut++;
                if (timeOut === 50) {
                    whileTrue = false;
                    break;
                }
            }
            timeOut = 0;
            if (!whileTrue) {
                return playRandomMove();
            } else {
                playerInfo.pastShots.push(nextMove);
                return nextMove;
            }
        } else {
            return playRandomMove();
        }
    };

    return {
        playerInfo,
        AI,
        resetPastShots,
    };
};

export default playerFactory;
