
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: "testyMcTesty1",
          password: "password12345",
          departments: "admin"
        },
        {
          username: "testyMcTesty2",
          password: "password12345",
          departments: "admin"
        },
        {
          username: "testyMcTesty3",
          password: "password12345",
          departments: "management"
        },
        {
          username: "testyMcTesty4",
          password: "password12345",
          departments: "support"
        },
        {
          username: "testyMcTesty5",
          password: "password12345",
          departments: "support"
        },
      ]);
    });
};
