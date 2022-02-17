import constructorsGenerator from "./constructorsGenerator";

const ConstructorsStandings = ({standings}) => {
    return ( 
        <div>
                <h3>Constructors Standings</h3> 
                <table id="formula1">
                    <thead>
                        <tr>
                            <th>Pos</th>
                            <th>Team</th>
                            <th>Nationality</th>
                            <th>Wins</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {constructorsGenerator(standings)}
                    </tbody>
                </table>
            </div>
     );
}
 
export default ConstructorsStandings;