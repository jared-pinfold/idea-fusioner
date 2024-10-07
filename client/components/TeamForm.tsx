import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getTeams } from '../apis/teams'
import { useQuery } from '@tanstack/react-query'

export default function TeamForm() {
  const [form, setForm] = useState('')
  const [tryAgain, setTryAgain] = useState(false)
  const navigate = useNavigate()
  const { data, isError, isLoading } = useQuery({
    queryKey: ['teams'],
    queryFn: getTeams,
  })
  const teamNames = data?.map(team => team.teamName) || []
  function handleChange(event: React.ChangeEvent<HTMLInputElement> ) {
    setForm(event.target.value)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (teamNames.includes(form)) {
      setForm('')
      setTryAgain(true)
    } else {
      navigate('/' + form)
    }
  }

  if (isError) return <p>The Idea Fusioner is malfunctioning!</p>
  if (isLoading) return <p>Hold your horses pls.</p>
  if (data) return (
    <>
      <h2>Name your team:</h2>
      {tryAgain && <p className='alert'>That team name has been taken already</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor='team-name'>Team name: </label>
        <input 
          onChange={handleChange}
          type='text'
          name='team-name'
          value={form}/>
          <button>Submit</button>
      </form>
    </>
  )
}
