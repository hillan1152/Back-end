
exports.up = function(knex) {
  return knex.schema.createTable('workouts_exercises', tbl => {
      tbl.increments();

      tbl.int('reps');
      tbl.int('sets');

      tbl.integer('workout_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('workouts')
        .onUpdate('CASCADE');

      tbl.integer('exercise_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('exercises')
        .onUpdate('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('workouts_exercises');
};