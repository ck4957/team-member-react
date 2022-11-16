import { useState } from "react";

const GroupedTeamMembers = ({ employees, selelctedTeam, setTeam}) => {

    console.log(employees)
    const [groupedEmployees, setGroupedData] = useState(groupedTeamMember());

    function groupedTeamMember() {
        let teams = [];

        let teamNames = ['TeamA', 'TeamB', 'TeamC', 'TeamD'];
        teamNames.forEach(team => {
            let members = employees.filter(employee => employee.teamName === team);
            let tempTeam = { team: team, members: members, collapsed: selelctedTeam === team}
            teams.push(tempTeam);
        })
        return teams;
    }

    function handleTeamClick(event) {
    let transformedGroupData = groupedEmployees.map(groupedData => groupedData.team === event.currentTarget.id
        ? { ...groupedData, collapsed: !groupedData.collapsed} : groupedData );

    setGroupedData(transformedGroupData);
    setTeam(event.currentTarget.id);
    }

    return (
        <main className="container">
            {
                groupedEmployees.map(item => {
                    return (
                        <div key={item.team} className="card mt-2" style={{cursor: "pointer"}}>
                            <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
                                Team Name: {item.team}
                            </h4>
                            <div id={"collapse_" + item.team}
                                 className={item.collapsed ? "collapse" : ""}>
                                <hr/>
                                {
                                    item.members.map(member => {
                                        return (
                                            <div className="mt-2">
                                                <h5 className="card-title mt-2">
                                                    <span className="text-dark">Full Name: {member.fullName}</span>
                                                </h5>
                                                <p>Designation: {member.designation}</p>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </main>
    )
}

export default GroupedTeamMembers;
