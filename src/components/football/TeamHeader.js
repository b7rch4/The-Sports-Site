import MiniNav from "../Navigation/MiniNav";
import { useParams } from "react-router-dom";
import useFootball from "../useFootball";

const TeamHeader = () => {
    const param = useParams()
    const { data, isLoading, error } = useFootball(`https://api.football-data.org/v2/teams/${param.id}`)

    return ( 
        <div className="team-page">
            <div>
                { isLoading && <div>Loading...</div> }
                { error && <div>{ error }</div> }
                { data && <div>
                    <img src={data.crestUrl} alt="image could not be found" />
                    <h1>{data.name}</h1>
                    <MiniNav links={[{name: "Info", route: `/football/teams/${param.id}/info`}, {name: "Fixtures", route: `/football/teams/${param.id}/fixtures`}, {name: "Results", route: `/football/teams/${param.id}/results`}, {name: "Squad", route: "/football/teams/:id/squad"}]}/>
                </div> }
            </div>
            
        </div>
     );
}
 
export default TeamHeader;