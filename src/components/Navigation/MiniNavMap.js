import { Link } from "react-router-dom";

const MiniNavMap = (links) => {
    return ( 
        links.map((link, index) => (
            <Link to={link.route} key={index}>{link.name}</Link>
        ))
     );
}
 
export default MiniNavMap;