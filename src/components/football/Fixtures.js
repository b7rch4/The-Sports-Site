import fixturesFilter from "./fixturesFilter";

const Fixtures = ({data}) => {
    const matches = fixturesFilter(data.matches)

    return ( 
        <div>
            <h1>Fixtures</h1>
            { matches.map((match, index) => (
                <div key={index} className="matches">
                    <p>{match.competition.name}</p>
                    <p className="score">{match.homeTeam.name} {match.score.fullTime.homeTeam}-{match.score.fullTime.awayTeam} {match.awayTeam.name}</p>
                    <p>{(new Date(match.utcDate)).toDateString()}</p>
                    <p>{(new Date(match.utcDate)).toLocaleTimeString()}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Fixtures;