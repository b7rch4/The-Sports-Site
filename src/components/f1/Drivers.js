import useFetch from '../useFetch';
import DriverList from './DriverList';
import MiniNav from '../Navigation/MiniNav';

const Home = () => {
    const {data, isLoading, error} = useFetch('http://localhost:8000/drivers');

    return ( 
        <div className="home">
            <MiniNav links={[{name: 'F1 Home', route: "/formula1"}, {name: "Drivers Standings", route: "/formula1/drivers-standings"}, {name: "Constructors Standings", route:"/formula1/constructors-standings"}, {name: "Drivers", route:"/formula1/drivers"}]}/>
            {error && <div>{ error }</div>}
            {isLoading && <div>Loading...</div>}
            {data && <DriverList drivers={data} />}
        </div>
     );
}
 
export default Home;