import { useParams } from "react-router-dom"
import useFootball from "../useFootball"
import Info from './Info'
import TeamHeader from "./TeamHeader"
import MiniNav from "../Navigation/MiniNav"

const TeamInfo = () => {
    const param = useParams()
    const { data, isLoading, error } = useFootball(`https://api.football-data.org/v2/teams/${param.id}`)

    return (
        <div>
            <MiniNav links={[{name: 'Football Home', route: "/football"}, {name: "Premier League", route: "/football/premier-league"}, {name: "Bundesliga", route:"/football/bundesliga"}, {name: "Serie A", route:"/football/serie-a"}, {name: "LaLiga", route: "/football/la-liga"}, {name: "Champions League", route: "/football/ucl"}]}/>
            { isLoading && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { data && <TeamHeader /> }
            { data && <Info data={data}/> }
        </div>
    )
}
 
export default TeamInfo;