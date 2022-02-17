import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navigation/Navbar'
import Home from './components/Home/Home'
import Create from "./components/f1/Create";
import Football from "./components/football/Football";
import DriverDetails from "./components/f1/DriverDetails";
import NotFound from "./components/NotFound";
import Formula1 from "./components/f1/Formula_1";
import DriversTable from "./components/f1/DriversTable";
import ConstructorsTable from "./components/f1/ConstructorsTable";
import Drivers from './components/f1/Drivers'
import League from "./components/football/League";
import Team from "./components/football/Team";
import TeamInfo from "./components/football/TeamInfo";
import TeamFixtures from './components/football/TeamFixtures'
import TeamResults from "./components/football/TeamResults";
import Nfl from "./components/nfl/Nfl";
import ChampionsLeague from "./components/football/ChampionsLeage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/formula1/drivers/create">
              <Create />
            </Route>
            <Route exact path="/formula1">
              <Formula1 />
            </Route>
            <Route exact path="/formula1/drivers-standings">
              <DriversTable />
            </Route>  
            <Route exact path="/formula1/constructors-standings">
              <ConstructorsTable />
            </Route>
            <Route exact path="/formula1/drivers">
              <Drivers />
            </Route>
            <Route path="/formula1/drivers/:id">
              <DriverDetails />
            </Route>

            <Route exact path="/football">
              <Football />
            </Route>
            <Route exact path="/football/premier-league">
              <League url="https://api.football-data.org/v2/competitions/PL/standings"/>
            </Route>
            <Route exact path="/football/bundesliga">
              <League url="https://api.football-data.org/v2/competitions/BL1/standings"/>
            </Route>
            <Route exact path="/football/serie-a">
             <League url="https://api.football-data.org/v2/competitions/SA/standings"/>
            </Route>
            <Route exact path="/football/la-liga">
             <League url="https://api.football-data.org/v2/competitions/PD/standings"/>
            </Route>
            <Route exact path="/football/ucl">
             <ChampionsLeague url="https://api.football-data.org/v2/competitions/CL/standings"/>
            </Route>

            <Route exact path="/football/teams/:id">
              <Team />
            </Route>
            <Route exact path="/football/teams/:id/info">
              <TeamInfo />
            </Route>
            <Route exact path="/football/teams/:id/fixtures">
              <TeamFixtures />
            </Route>
            <Route exact path="/football/teams/:id/results">
              <TeamResults />
            </Route>

            <Route exact path="/nfl">
              <Nfl />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;
