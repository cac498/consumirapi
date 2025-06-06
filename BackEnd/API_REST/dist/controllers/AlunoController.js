"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Alunojs = require('../models/Aluno.js'); var _Alunojs2 = _interopRequireDefault(_Alunojs);
var _Fotojs = require('../models/Foto.js'); var _Fotojs2 = _interopRequireDefault(_Fotojs);

class AlunoController {
  async index(req, res) {
    const alunos = await _Alunojs2.default.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [_Fotojs2.default, 'id', 'DESC']],
      include: {
        model: _Fotojs2.default,
        attributes: ['id','url','filename'],
      },
    });
    res.json(alunos);
  }

  async store(req, res) {
    try {
      const aluno = await _Alunojs2.default.create(req.body);
      return res.json(aluno);

    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }

  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ error: 'ID não informado' });
      }
      const aluno = await _Alunojs2.default.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [_Fotojs2.default, 'id', 'DESC']],
        include: {
          model: _Fotojs2.default,
          attributes: ['id','url','filename'],
        },
      });
      if (!aluno) {
        return res.status(404).json({ error: 'Aluno não encontrado' });
      }
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ error: 'ID não informado' });
      }
      const aluno = await _Alunojs2.default.findByPk(id);
      if (!aluno) {
        return res.status(404).json({ error: 'Aluno não encontrado' });
      }
      await aluno.destroy();
      return res.json({
        apagado: true,
        message: 'Aluno apagado com sucesso',
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ error: 'ID não informado' });
      }
      const aluno = await _Alunojs2.default.findByPk(id);
      if (!aluno) {
        return res.status(404).json({ error: 'Aluno não encontrado' });
      }

      const alunoAtualizado = await aluno.update(req.body);
      return res.json(alunoAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }

};


exports. default = new AlunoController();
