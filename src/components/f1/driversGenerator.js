const driversGenerator = (standings) => {
	const driverStandings = standings.MRData.StandingsTable.StandingsLists[0].DriverStandings  

	return driverStandings.map((driver) => (
			<tr key={driver.Driver.permanentNumber}>
				<td>{driver.position}</td>
				<td>{driver.Driver.givenName}  {driver.Driver.familyName}</td>
				<td>{driver.Driver.nationality}</td>
				<td>{driver.Constructors[0].name}</td>
				<td>{driver.wins}</td>
				<td>{driver.points}</td>
			</tr>
    ))
}

export default driversGenerator