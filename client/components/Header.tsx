import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <h1>Idea Fusioner</h1>
      <nav>
        <Link to="/">Create a new team</Link>
        <Link to="/teams">View teams List</Link>
      </nav>
    </header>
  )
}
