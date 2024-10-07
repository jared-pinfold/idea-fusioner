import { Router } from 'express'

import * as db from '../db/teams.ts'
import { deleteIdea } from '../db/ideas.ts'

const router = Router()

router.get('/', async (_req, res) => {
  try {
    const ideas = await db.getAllTeams()

    res.json(ideas.reverse())
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/', async (req, res) => {
  const {teamData, ids} = req.body
  try {
    await db.addTeam(teamData)
    await deleteIdea(ids[0])
    await deleteIdea(ids[1])
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.delete('/:id', async (req, res) => {
  const id = +req.params.id
  try {
    await db.deleteTeam(id)
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.delete('/admin/deleteAll', async (_req, res) => {
  try {
    await db.deleteAllTeams()
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
