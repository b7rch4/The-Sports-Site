import trimGroups from "./trimGroups"
import tableGenerator from "./tableGenerator"

const Ucl = ({standings}) => {
    const groups = standings.standings
    const trimmedGroups = trimGroups(groups)
    console.log(trimmedGroups)

    return ( 
        <div>
                <h2>{standings.competition.name}</h2>
                <h3>Group Stage</h3>
                { trimmedGroups.map((group, index) => (
                    <div className="ucl-groups">
                    <h2>{ group.group.replace("_", " ") }</h2>
                    <table className="standings" key={index}>
                    <thead>
                        <tr>
                            <th>Pos</th>
                            <th id="team">Team</th>
                            <th>Played</th>
                            <th>Wins</th>
                            <th>Draws</th>
                            <th>Losses</th>
                            <th>GF</th>
                            <th>GA</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableGenerator(group.table)}
                    </tbody>
                </table>
                </div>
                )) }
                
            </div>
     );
}
 
export default Ucl;