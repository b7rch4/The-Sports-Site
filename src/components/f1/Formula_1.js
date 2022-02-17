import MiniNav from "../Navigation/MiniNav";
import useFetch from "../useFetch";
import Headlines from "../Headlines";

const Formula1 = () => {
    const { data, isLoading, error } = useFetch(`https://newsapi.org/v2/top-headlines?country=gb&category=sports&q=formula&pageSize=20&apiKey=${process.env.REACT_APP_NEWS_KEY}`)


    return (
        <div className="content">
            <MiniNav links={[{name: 'F1 Home', route: "/formula1"}, {name: "Drivers Standings", route: "/formula1/drivers-standings"}, {name: "Constructors Standings", route:"/formula1/constructors-standings"}, {name: "Drivers", route:"/formula1/drivers"}]}/>
            <h1>F1</h1>
            <br />
            <h2>Latest Headlines</h2>
            { isLoading && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { data && <Headlines headlines={data} /> }
        </div>
    )
}

export default Formula1;