"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
      type: _sequelize2.default.STRING,
      defaultValue: '',
      validate: {
        len: {
          args: [3, 255],
          msg: 'O nome deve ter entre 3 e 255 caracteres',
        },
      }
    },
      sobrenome:  {
      type: _sequelize2.default.STRING,
      defaultValue: '',
      validate: {
        len: {
          args: [3, 255],
          msg: 'O Sobrenome deve ter entre 3 e 255 caracteres',
        },
      }
    },
      email:  {
      type: _sequelize2.default.STRING,
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
      type: _sequelize2.default.INTEGER,
      defaultValue: '',
      validate: {
        isInt: {
          msg: 'Idade deve ser um número inteiro',
        },
      }
    },
      peso:  {
      type: _sequelize2.default.FLOAT,
      defaultValue: '',
      validate: {
        isFloat: {
          msg: 'Peso deve ser um número',
        },
      }
    },
      altura:  {
      type: _sequelize2.default.FLOAT,
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


} exports.default = Aluno;
