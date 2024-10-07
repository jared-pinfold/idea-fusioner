import connection from './connection.ts'
import { Team, TeamData } from '../../models/models.ts'

export async function getAllTeams(db = connection): Promise<Team[]> {
  return db('teams').select(
    'id',
    'team_name as teamName',
    'idea_1 as idea1',
    'idea_2 as idea2',
  )
}

export async function deleteTeam(id: number, db = connection) {
  return db('teams').where({ id }).delete()
}

export async function deleteAllTeams(db = connection) {
  return db('teams').delete()
}

export async function addTeam(teamData: TeamData, db = connection) {
  console.log(teamData)
  const { teamName, idea1, idea2 } = teamData
  const hi = {
    team_name: teamName,
    idea_1: idea1,
    idea_2: idea2,
  }
  return db('teams').insert(hi)
}
