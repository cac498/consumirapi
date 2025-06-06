const { default: AlunoController } = require("../../controllers/AlunoController");
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.changeColumn(
    'alunos',
    'email',
    {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    }
  ),

  down: () => { },
};
