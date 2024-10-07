export async function up(knex) {
  return knex.schema.createTable('teams', (table) => {
    table.increments('id')
    table.string('team_name')
    table.string('idea_1')
    table.string('idea_2')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('teams')
}
