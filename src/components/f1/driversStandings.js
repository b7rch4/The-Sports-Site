import driversGenerator from "./driversGenerator";

const DriversStandings = ({standings}) => {
    return ( 
        <div>
                <h3>Drivers Standings</h3> 
                <table>
                    <thead>
                        <tr>
                            <th>Pos</th>
                            <th>Driver</th>
                            <th>Nationality</th>
                            <th>Team</th>
                            <th>Wins</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {driversGenerator(standings)}
                    </tbody>
                </table>
            </div>
     );
}
 
export default DriversStandings;