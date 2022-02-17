const Info = ({ data }) => {
    return ( 
        <div className="team-info">
            <p>Nation: { data.area.name }</p>
            <p>Founded: { data.founded }</p>
            <p>Colours: { data.clubColors }</p>
            <p>Stadium: { data.venue }</p>
            <p>Address: { data.address }</p>

        </div>
     );
}
 
export default Info;