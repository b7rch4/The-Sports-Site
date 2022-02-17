import MiniNavMap from "./MiniNavMap";

const MiniNav = ({links}) => {
    return ( 
        <nav className="mini-nav">
            {MiniNavMap(links)}
        </nav>
     );
}
 
export default MiniNav;