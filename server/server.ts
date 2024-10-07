import express from 'express'
import * as Path from 'node:path'

import ideas from './routes/ideas.ts'
import teams from './routes/teams.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/ideas', ideas)
server.use('/api/v1/teams', teams)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (_req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
