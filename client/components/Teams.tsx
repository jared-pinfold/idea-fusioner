import { useQuery } from '@tanstack/react-query'
import { Team } from '../../models/models.ts'
import { getTeams } from '../apis/teams.ts'

export default function Teams() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['teams'],
    queryFn: getTeams,
  })
  if (isError) return <p>The Idea Fusioner is malfunctioning!</p>
  if (isLoading) return <p>Hold your horses pls.</p>
  if (data)
    return (
      <>
        <h2>Here are the participating teams and their ideas:</h2>
        {data.map((team: Team) => (
          <div className='team' key={`team-${team.id}`}>
            <p>
              <b>Team: </b>
              {team.teamName}
            </p>
            <p>
              <b>Idea 1: </b>
              {team.idea1}
            </p>
            <p>
              <b>Idea 2: </b>
              {team.idea2}
            </p>
          </div>
        ))}
      </>
    )
}
