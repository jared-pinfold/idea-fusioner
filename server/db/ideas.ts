import connection from './connection.ts'
import { Idea } from '../../models/ideas.ts'

export async function getAllIdeas(db = connection): Promise<Idea[]> {
  return db('ideas').select()
}

export async function deleteIdea(id: number, db = connection) {
  return db('ideas').where({id}).delete()
}
