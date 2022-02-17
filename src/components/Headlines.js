const Headlines = ({headlines}) => {
    return (
        <div>
            {headlines.articles.map((article, index) => 
                <div className="headlines" key={index}>
                <h2>{article.title}</h2>
                </div>
            )}
        </div>
    );
}
 
export default Headlines;