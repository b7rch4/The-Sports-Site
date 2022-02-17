const constructorsGenerator = (standings) => {
    const constructorsStandings = standings.MRData.StandingsTable.StandingsLists[0].ConstructorStandings 

    return constructorsStandings.map((constructor) => (
        <tr key={constructor.Constructor.constructorId}>
            <td>{constructor.position}</td>
            <td>{constructor.Constructor.name}</td>
            <td>{constructor.Constructor.nationality}</td>
            <td>{constructor.wins}</td>
            <td>{constructor.points}</td>
        </tr>
    ))
}

export default constructorsGenerator