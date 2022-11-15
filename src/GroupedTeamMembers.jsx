import { useState } from "react";

const GroupedTeamMembers = ({ employees, selelctedTeam, setTeam}) => {

    const [groupedEmployees, setGroupedData] = useState(groupedTeamMember());

    function groupedTeamMember() {

    }

    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8">
                    <h1>Grouped Team Members</h1>
                </div>
            </div>
        </main>
    )
}

export default GroupedTeamMembers;
