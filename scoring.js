calculateScore = (player) => {
    let passing = player.stats.passing
    let rushing = player.stats.rushing
    let receiving = this.stats.receiving
    let returnKick = this.stats.return.kickreturn
    let returnPunt = this.stats.return.puntreturn
    let fieldgoals = this.stats.fieldgoals
    let xp = this.stats.xp

    if (player.position === 'QB') {
        return (passing.yards / 25) + (passing.touchdowns * 6) + (passing.interceptions * -3) + (rushing.yards / 10) + (rushing.touchdowns * 6) + (rushing.fumbles * -3)
    } else if (player.position === 'RB') {

    } else if (player.position === 'WR') {

    } else if (player.position === 'TE') {

    }
    return 0;
}

module.exports = calculateScore