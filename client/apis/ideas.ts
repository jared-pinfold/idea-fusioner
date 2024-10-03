import request from 'superagent'
import { Idea } from '../../models/ideas'

const rootUrl = '/api/v1'

export function getIdeas(): Promise<Idea[]> {
  return request.get(rootUrl + '/ideas').then((res) => {
    return res.body
  })
}

export function delIdea(id: number) {
  return request.get(rootUrl + '/ideas/' + id).then((res) => {
    return res.body
  })
}
