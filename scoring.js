calculateScore = (player) => {
    let passing = player.stats.passing
    let rushing = player.stats.rushing
    let receiving = player.stats.receiving
    let kickReturn = player.stats.return.kickreturn
    let puntReturn = player.stats.return.puntreturn
    let fieldgoals = player.stats.fieldgoals
    let xp = player.stats.xp

    if (player.position === 'QB') {
        return (passing.yards / 25) + (passing.touchdowns * 6) + (passing.interceptions * -3) +
            (rushing.yards / 10) + (rushing.touchdowns * 6) + (rushing.fumbles * -3)
    } else if (player.position === 'RB') {
        return (rushing.yards / 10) + (rushing.touchdowns * 6) + (rushing.fumbles * -3) +
            (receiving.receptions) + (receiving.yards / 10) + (receiving.touchdowns * 6) +
            (receiving.fumbles * -3) + (kickReturn)
    } else if (player.position === 'WR') {

    } else if (player.position === 'TE') {

    }
    return 0;
}

module.exports = calculateScore