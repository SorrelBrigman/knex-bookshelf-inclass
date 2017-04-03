
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('battles').del()
    .then(function () {
      // Inserts seed entries
      return knex('battles').insert([
        {battle_location: 'Kings Landing', monster_id: 4, hero_id: 1},
        {battle_location: 'Winterfell', monster_id: 5, hero_id: 2},
        {battle_location: 'Hoth', monster_id: 6, hero_id: 3}
      ]);
    });
};
