import TeamMemberCard from "./TeamMemberCard";

const TeamMembers = ({employees, handleEmployeeCardCLick, selectedTeam}) => {
    return (
        employees.map(employee => (
            <TeamMemberCard employee={employee}
                            handleEmployeeCardClic={handleEmployeeCardCLick}
                            selectedTeam={selectedTeam}/>
        ))
    )
}
export default TeamMembers;
