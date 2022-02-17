import tableGenerator from "./tableGenerator";

const Table = ({standings}) => {
    return ( 
        <div class="table">
                <h2>{standings.competition.name}</h2>
                <h3>2021 Table</h3>
                <br />
                <table className="standings">
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
                        {tableGenerator(standings.standings[0].table)}
                    </tbody>
                </table>
            </div>
     );
}
 
export default Table;