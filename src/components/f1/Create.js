import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [name, setName] = useState('');
    const [team, setTeam] = useState('');
    const [number, setNumber] = useState("0");
    const [nation, setNation] = useState('France');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();                                                 //prevents page refreshing when button is clicked
        const driver = { name, team, nation, number};

        setIsLoading(true)

        fetch('http://localhost:8000/drivers', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},                  //says we're sending JSON
            body: JSON.stringify(driver)                                    //converts the driver object into JSON
        }).then(() => {
            setIsLoading(false)
            // history.go();
            history.push('/formula1/drivers')
        })
    }

    return ( 
        <div className="create">
            <h2>Add a new Driver</h2>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input 
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <label>Team</label>
                <input 
                    type="text"
                    required
                    value={team}
                    onChange={(e) => setTeam(e.target.value)}
                />
                <br />
                <label>Nationality</label>
                <select
                    value={nation}
                    onChange={(e) => setNation(e.target.value)}
                >
                    <option value="Germany">Germany</option>
                    <option value="Great Britain">Great Britain</option>
                    <option value="China">China</option>
                    <option value="Japan">Japan</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Finland">Finland</option>
                    <option value="Canada">Canada</option>
                    <option value="Russia">Russia</option>
                    <option value="France">France</option>
                    <option value="Spain">Spain</option>
                </select>   
                <br />
                <label>Number</label>
                    <input 
                        type="text"
                        required
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                {!isLoading && <button>Add Driver</button>}
                {isLoading && <button disabled>Adding Driver...</button>}
            </form>
        </div>
     );
}
 
export default Create;