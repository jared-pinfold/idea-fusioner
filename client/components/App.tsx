import { useQuery } from '@tanstack/react-query'
import { getIdeas } from '../apis/ideas.ts'
import { Idea } from '../../models/ideas.ts'

function App() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['ideas'],
    queryFn: getIdeas,
  })
  

  if (isError) return <p>The Idea Fusioner is malfunctioning!</p>
  if (isLoading) return <p>Hold your horses pls.</p>
  if (data) return (
    <ul>
      {data.map((idea:Idea) => <li key={idea.id}>{idea.idea}</li>)}
    </ul>
  )
}

export default App
