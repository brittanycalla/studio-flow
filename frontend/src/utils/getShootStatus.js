const getShootStatus = shoot => {
    if (shoot.shotList.length === 0) return 'To Do'
    let numCompleteShots = shoot.shotList.filter(shot => shot.completed === true).length
    if (numCompleteShots === 0 && new Date(shoot.endDate) > Date.now()) {
        return 'To Do'
    } else if (numCompleteShots === shoot.shotList.length) {
        return 'Completed'
    } else if (new Date(shoot.endDate) < Date.now()) {
        return 'Past Due'
    } else {
        return 'In Progress'
    }
}

export default getShootStatus