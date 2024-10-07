export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('teams').del()

  // Inserts seed entries
  await knex('teams').insert([
    { id: 1, team_name: "Test Team", idea_1: 'Cheese', idea_2: 'Factory' },
  ])
}

