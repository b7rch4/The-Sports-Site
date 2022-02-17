import Headlines from "../Headlines";
import MiniNav from "../Navigation/MiniNav";
import useFetch from "../useFetch";

const Football = () => {
    const { data, isLoading, error } = useFetch(`https://newsapi.org/v2/top-headlines?country=gb&category=sports&q=football&pageSize=20&apiKey=${process.env.REACT_APP_NEWS_KEY}`)

    return (
        <div>
            <MiniNav links={[{name: 'Football Home', route: "/football"}, {name: "Premier League", route: "/football/premier-league"}, {name: "Bundesliga", route:"/football/bundesliga"}, {name: "Serie A", route:"/football/serie-a"}, {name: "LaLiga", route: "/football/la-liga"}, {name: "Champions League", route: "/football/ucl"}]}/>
            <h1>Football</h1>
            <br />
            <h2>Latest Headlines</h2>
            { isLoading && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { data && <Headlines headlines={data} /> }
        </div>
    )
    
}
 
export default Football;