import { useParams } from "react-router-dom"
import useFootball from "../useFootball"
import Fixtures from "./Fixtures"
import TeamHeader from './TeamHeader'
import MiniNav from "../Navigation/MiniNav"

const TeamFixtures = () => {
    const param = useParams()
    const { data, isLoading, error } = useFootball(`https://api.football-data.org/v2/teams/${param.id}/matches`)
    return (
        <div>
            <MiniNav links={[{name: 'Football Home', route: "/football"}, {name: "Premier League", route: "/football/premier-league"}, {name: "Bundesliga", route:"/football/bundesliga"}, {name: "Serie A", route:"/football/serie-a"}, {name: "LaLiga", route: "/football/la-liga"}, {name: "Champions League", route: "/football/ucl"}]}/>
            { isLoading && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { data && <TeamHeader /> }
            { data && <Fixtures data={data}/> }
        </div>
    )
}
 
export default TeamFixtures;