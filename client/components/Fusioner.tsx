import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getIdeas } from '../apis/ideas.ts'
import { Idea } from '../../models/models.ts'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { addTeam } from '../apis/teams.ts'

export default function Fusioner() {
  const [disabled, setDisabled] = useState(false)
  const { team } = useParams()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { data, isError, isLoading } = useQuery({
    queryKey: ['ideas'],
    queryFn: getIdeas,
  })

  function handleRedraw() {
    setDisabled(true)
    queryClient.invalidateQueries({ queryKey: ['ideas'] })
  }

  async function handleSubmit() {
    const teamName = team || ''
    const idea1 = (data as Idea[])[0].idea
    const idea2 = (data as Idea[])[1].idea
    await addTeam({teamName, idea1, idea2}, [(data as Idea[])[0].id, (data as Idea[])[1].id])
    navigate('/teams')
  }

  if (isError) return <p>The Idea Fusioner is malfunctioning!</p>
  if (isLoading) return <p>Hold your horses pls.</p>
  if (data)
    return (
      <>
        <h2>Welcome to the hackathon, {team}!</h2>
        <h3>Here are your random ideas:</h3>
        <ul>
          {data.map((idea: Idea) => (
            <li key={idea.id}>{idea.idea}</li>
          ))}
        </ul>
        <button disabled={disabled} onClick={handleRedraw}>
          Redraw ideas
        </button>
        <button onClick={handleSubmit}>{`Lock 'em in`}</button>
      </>
    )
}
