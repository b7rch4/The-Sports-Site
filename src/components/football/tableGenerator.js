import { Link } from "react-router-dom";

const tableGenerator = (standings) => {
        return (standings.map((team) => (
            <tr key={team.team.id}>
                <td>{team.position}</td>
                <td> <Link className="teamLinks" to={`/football/teams/${team.team.id}`}> {team.team.name.replace('FC', '')} </Link> </td>
                <td>{team.playedGames}</td>
                <td>{team.won}</td>
                <td>{team.draw}</td>
                <td>{team.lost}</td>
                <td>{team.goalsFor}</td>
                <td>{team.goalsAgainst}</td>
                <td>{team.points}</td>
            </tr>
        )))
}
 
export default tableGenerator;