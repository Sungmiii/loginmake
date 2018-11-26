
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, username: 'user1', password: '1234' },
        { id: 2, username: 'user2', password: '5678' },
        { id: 3, username: 'user3', password: '7878' }
      ]);
    });
};
