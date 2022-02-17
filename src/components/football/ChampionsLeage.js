import useFootball from '../useFootball';
import Ucl from './UCL'

import MiniNav from '../Navigation/MiniNav';

const ChampionsLeague = ({url}) => {
    const { data, isLoading, error } = useFootball(url)
    
    return ( 
        <div>
            <MiniNav links={[{name: 'Football Home', route: "/football"}, {name: "Premier League", route: "/football/premier-league"}, {name: "Bundesliga", route:"/football/bundesliga"}, {name: "Serie A", route:"/football/serie-a"}, {name: "LaLiga", route: "/football/la-liga"}, {name: "Champions League", route: "/football/ucl"}]}/>
            { isLoading && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { data && <Ucl standings={data}/> }
        </div>
     );
}
 
export default ChampionsLeague;