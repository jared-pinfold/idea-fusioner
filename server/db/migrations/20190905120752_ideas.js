export async function up(knex) {
  return knex.schema.createTable('ideas', (table) => {
    table.increments('id')
    table.string('idea')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('ideas')
}
