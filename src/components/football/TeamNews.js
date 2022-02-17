import Headlines from "../Headlines";
import useFetch from "../useFetch";

const TeamNews = ({name}) => {
    const { data, isLoading, error } = useFetch(`https://newsapi.org/v2/top-headlines?country=gb&category=sports&q=${name}&pageSize=20&apiKey=e65d438f3f924803b512f19fcd02e04a`)

    return (
        <div>
            { isLoading && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { data && <Headlines headlines={data}/> }
        </div>
    )
}
 
export default TeamNews;