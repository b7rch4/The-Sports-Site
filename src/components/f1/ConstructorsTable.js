import MiniNav from "../Navigation/MiniNav";
import useFetch from "../useFetch";
import ConstructorsStandings from "./ConstructorsStandings";

const ConstructorsTable = () => {
    const { data: constructors, isLoading: constructorsLoading, error: constructorsError} = useFetch('http://ergast.com/api/f1/current/constructorStandings.json')

    return ( 
        <div>
            <MiniNav links={[{name: 'F1 Home', route: "/formula1"}, {name: "Drivers Standings", route: "/formula1/drivers-standings"}, {name: "Constructors Standings", route:"/formula1/constructors-standings"}, {name: "Drivers", route:"/formula1/drivers"}]}/>
            <h2>Formula 1</h2>
            <br />
            { constructorsError && <div>{constructorsError}</div>}
            { constructorsLoading && <div>Loading...</div>}
            <br />
            { constructors && <ConstructorsStandings standings={constructors}/>}
        </div>
    );
}
 
export default ConstructorsTable;