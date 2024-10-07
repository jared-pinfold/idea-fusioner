import request from 'superagent'
import { Idea } from '../../models/models'

const rootUrl = '/api/v1'

export function getIdeas(): Promise<Idea[]> {
  return request.get(rootUrl + '/ideas').then((res) => {
    return shuffleArray(res.body).slice(0, 2)
  })
}

export function delIdea(id: number) {
  return request.get(rootUrl + '/ideas/' + id).then((res) => res.body)
}

export function shuffleArray(arr: Idea[]) {
  const array = [...arr]
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}
