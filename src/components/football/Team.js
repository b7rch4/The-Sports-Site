import MiniNav from "../Navigation/MiniNav";
import useFootball from "../useFootball";
import TeamHeader from "./TeamHeader";
import { useParams } from "react-router-dom";
import TeamNews from "./TeamNews";

const Team = () => {
    const param = useParams()
    const { data, isLoading, error } = useFootball(`https://api.football-data.org/v2/teams/${param.id}`)

    return (
        <div>
            <MiniNav links={[{name: 'Football Home', route: "/football"}, {name: "Premier League", route: "/football/premier-league"}, {name: "Bundesliga", route:"/football/bundesliga"}, {name: "Serie A", route:"/football/serie-a"}, {name: "LaLiga", route: "/football/la-liga"}, {name: "Champions League", route: "/football/ucl"}]}/>
            { isLoading && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { data && <TeamHeader id={param.id} data={data} /> }
            { data && <TeamNews name={data.shortName}/>}
        </div>
    )
}
 
export default Team;