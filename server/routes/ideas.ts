import { Router } from 'express'

import * as db from '../db/ideas.ts'

const router = Router()

router.get('/', async (_req, res) => {
  try {
    const ideas = await db.getAllIdeas()

    res.json(ideas)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.delete('/:id', async (req, res) => {
  const id = +req.params.id
  try {
    await db.deleteIdea(id)
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
