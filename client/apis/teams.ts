import request from 'superagent'
import { Team, TeamData } from '../../models/models'

const rootUrl = '/api/v1'

export function getTeams(): Promise<Team[]> {
  return request.get(rootUrl + '/teams').then((res) => res.body)
}

export function delTeam(id: number) {
  return request.get(rootUrl + '/teams/' + id).then((res) => res.body)
}

export function addTeam(teamData: TeamData, ids: number[]) {
  return request
    .post(rootUrl + '/teams')
    .send({teamData, ids})
    .then((res) => res.body)
}

