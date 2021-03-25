calculateScore = (player) => {
    let result;

    if (player.position === 'QB') {
        result = (player.stats.passing.yards / 25) + (player.stats.passing.touchdowns * 6) + (player.stats.passing.interceptions * -3) +
            (player.stats.rushing.yards / 10) + (player.stats.rushing.touchdowns * 6) + (player.stats.rushing.fumbles * -3);
    } else if (player.position === 'RB') {
        result = (player.stats.rushing.yards / 10) + (player.stats.rushing.touchdowns * 6) + (player.stats.rushing.fumbles * -3) +
            (player.stats.receiving.receptions) + (player.stats.receiving.yards / 10) + (player.stats.receiving.touchdowns * 6) +
            (player.stats.receiving.fumbles * -3) + (player.stats.return.kickreturn.yards / 15) + (player.stats.return.kickreturn.touchdowns * 6) +
            (player.stats.return.kickreturn.fumbles * -3) + (player.stats.return.puntreturn.yards / 15) + (player.stats.return.puntreturn.touchdowns * 6) +
            (player.stats.return.puntreturn.fumbles * -3)
    } else if (player.position === 'WR') {
        result = (player.stats.rushing.yards / 10) + (player.stats.rushing.touchdowns * 6) + (player.stats.rushing.fumbles * -3) +
            (player.stats.receiving.receptions) + (player.stats.receiving.yards / 10) + (player.stats.receiving.touchdowns * 6) +
            (player.stats.receiving.fumbles * -3) + (player.stats.return.kickreturn.yards / 15) + (player.stats.return.kickreturn.touchdowns * 6) +
            (player.stats.return.kickreturn.fumbles * -3) + (player.stats.return.puntreturn.yards / 15) + (player.stats.return.puntreturn.touchdowns * 6) +
            (player.stats.return.puntreturn.fumbles * -3)
    } else if (player.position === 'TE') {
        result = 
    } else {
        result = 0;
    }
    return result;
}

module.exports = calculateScore