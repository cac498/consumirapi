import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
      type: Sequelize.STRING,
      defaultValue: '',
      validate: {
        len: {
          args: [3, 255],
          msg: 'O nome deve ter entre 3 e 255 caracteres',
        },
      }
    },
      sobrenome:  {
      type: Sequelize.STRING,
      defaultValue: '',
      validate: {
        len: {
          args: [3, 255],
          msg: 'O Sobrenome deve ter entre 3 e 255 caracteres',
        },
      }
    },
      email:  {
      type: Sequelize.STRING,
      defaultValue: '',
      unique: {
        msg: 'E-mail já cadastrado',
      },
      validate: {
        isEmail: {
          msg: 'E-mail inválido',
        },
      }
    },
      idade:  {
      type: Sequelize.INTEGER,
      defaultValue: '',
      validate: {
        isInt: {
          msg: 'Idade deve ser um número inteiro',
        },
      }
    },
      peso:  {
      type: Sequelize.FLOAT,
      defaultValue: '',
      validate: {
        isFloat: {
          msg: 'Peso deve ser um número',
        },
      }
    },
      altura:  {
      type: Sequelize.FLOAT,
      defaultValue: '',
      validate: {
        isFloat: {
          msg: 'Altura deve ser um número',
        },
      }
    },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }


}
