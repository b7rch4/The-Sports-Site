import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import MiniNav from "../Navigation/MiniNav";

const DriverDetails = () => {
    const { id } = useParams();
    const { data: driver, error, isLoading } = useFetch('http://localhost:8000/drivers/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/drivers/' + driver.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/formula1/drivers')
        })
    }

    return ( 
        <div className="driver-details">
            <MiniNav links={[{name: 'F1 Home', route: "/formula1"}, {name: "Drivers Standings", route: "/formula1/drivers-standings"}, {name: "Constructors Standings", route:"/formula1/constructors-standings"}, {name: "Drivers", route:"/formula1/drivers"}]}/>
            { isLoading && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { driver && 
                <article className="content">
                    <h2>{ driver.name } - {driver.number}</h2>
                    <p>{ driver.nation }</p>
                    <p>{ driver.team }</p>
                    <br />
                    <p>Championships: { driver.championships }</p>
                    <p>Grands Prix: { driver.grandsprix }</p>
                    <p>Wins: { driver.wins }</p>
                    <p>Podiums: { driver.podiums }</p>
                    <p>Pole Positions: { driver.poles }</p>
                    <p>Best Finish: { driver.bestfinish }</p>
                    <br />
                    <button className="create-button" onClick={handleClick}>Delete Driver</button>
                </article> 
            }
        </div>
     );
}
 
export default DriverDetails;