import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Layout from './components/Layout'
import TeamForm from './components/TeamForm'
import Fusioner from './components/Fusioner'
import Teams from './components/Teams'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<TeamForm />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/:team" element={<Fusioner />} />
    </Route>,
  ),
)

export default router
