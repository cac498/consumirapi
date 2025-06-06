const bcryptjs = require('bcryptjs');
module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'Lucas',
        email: 'Lucas@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
            {
        nome: 'Gabriel',
        email: 'Gabriel@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
            {
        nome: 'Eduardo',
        email: 'Eduardo@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),
  down: () => {},
};
