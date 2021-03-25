calculateScore = (player) => {
    let result;

    if (player.position === 'QB') {
        let passing = player.stats.passing;
        let rushing = player.stats.rushing;

        result = (passing.yards / 25) +
            (passing.touchdowns * 6) +
            (passing.interceptions * -3) +
            (rushing.yards / 10) +
            (rushing.touchdowns * 6) +
            (rushing.fumbles * -3)

    } else if (player.position === 'RB') {
        let rushing = player.stats.rushing;
        let receiving = player.stats.receiving;
        let kickReturn = player.stats.return.kickreturn;
        let puntReturn = player.stats.return.puntreturn;

        result = (rushing.yards / 10) +
            (rushing.touchdowns * 6) +
            (rushing.fumbles * -3) +
            (receiving.receptions) +
            (receiving.yards / 10) +
            (receiving.touchdowns * 6) +
            (receiving.fumbles * -3) +
            (kickReturn.yards / 15) +
            (kickReturn.touchdowns * 6) +
            (kickReturn.fumbles * -3) +
            (puntReturn.yards / 15) +
            (puntReturn.touchdowns * 6) +
            (puntReturn.fumbles * -3)

    } else if (player.position === 'WR') {
        let rushing = player.stats.rushing;
        let receiving = player.stats.receiving;
        let kickReturn = player.stats.return.kickreturn;
        let puntReturn = player.stats.return.puntreturn;

        result = (rushing.yards / 10) +
            (rushing.touchdowns * 6) +
            (rushing.fumbles * -3) +
            (receiving.receptions) +
            (receiving.yards / 10) +
            (receiving.touchdowns * 6) +
            (receiving.fumbles * -3) +
            (kickReturn.yards / 15) +
            (kickReturn.touchdowns * 6) +
            (kickReturn.fumbles * -3) +
            (puntReturn.yards / 15) +
            (puntReturn.touchdowns * 6) +
            (puntReturn.fumbles * -3)

    } else if (player.position === 'TE') {
        let receiving = player.stats.receiving;

        result = (receiving.receptions) +
            (receiving.yards / 10) +
            (receiving.touchdowns * 6) +
            (receiving.fumbles * -3)

    } else {
        result = 0;
    }

    return result;
}

module.exports = calculateScore