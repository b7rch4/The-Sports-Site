import { Link } from "react-router-dom";

const DriverList = ({drivers}) => {
    return ( 
        <div className="driver-list">
            <h3>Here's some F1 drivers: </h3>
            <br />
            <Link to="/formula1/drivers/create" className="create-button">Create a Driver</Link>
            {drivers.map((driver) => (
                 <div className="driver-info" key={driver.id}>
                     <Link to={ `/formula1/drivers/${driver.id}` }>
                        <div >
                            <h1>{driver.number} </h1><h3> {driver.name}</h3>
                        </div>
                        <p>{driver.team}</p>
                        <p>{driver.nation}</p>
                     </Link>
                 </div>
             ))}
        </div>
     );
}
 
export default DriverList;