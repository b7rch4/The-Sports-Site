import MiniNav from "../Navigation/MiniNav";
import useFetch from "../useFetch";
import DriversStandings from "./driversStandings";

const DriversTable = () => {
    const { data: drivers, isLoading: driversLoading, error: driversError } = useFetch('http://ergast.com/api/f1/current/driverStandings.json');

    return ( 
        <div>
            <MiniNav links={[{name: 'F1 Home', route: "/formula1"}, {name: "Drivers Standings", route: "/formula1/drivers-standings"}, {name: "Constructors Standings", route:"/formula1/constructors-standings"}, {name: "Drivers", route:"/formula1/drivers"}]}/>
            <h2>Formula 1</h2>
            <br />
            { driversError && <div>{driversError}</div>}
            { driversLoading && <div>Loading...</div>}
            <br />
            { drivers && <DriversStandings standings={drivers} />}
        </div>
    );
}
 
export default DriversTable;