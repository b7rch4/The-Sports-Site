const fixtures = (match) => {
    if (new Date(match.utcDate) > (new Date()) ) {
        return true
    }
}

const fixturesFilter = (matches) => {
    const filteredMatches = matches.filter(fixtures)

    return filteredMatches
}

export default fixturesFilter