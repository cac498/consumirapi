"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserControllerjs = require('../controllers/UserController.js'); var _UserControllerjs2 = _interopRequireDefault(_UserControllerjs);
var _loginRequiredjs = require('../middlewares/loginRequired.js'); var _loginRequiredjs2 = _interopRequireDefault(_loginRequiredjs);
const router = new (0, _express.Router)();
// nao deveria existir, falha de segurança
// router.get('/', userController.index);
// router.get('/:id',  userController.show);


router.post('/', _loginRequiredjs2.default, _UserControllerjs2.default.store);
router.delete('/', _loginRequiredjs2.default, _UserControllerjs2.default.delete);
router.put('/', _loginRequiredjs2.default, _UserControllerjs2.default.update);
exports. default = router;


// index -> lista todos os usuarios --> GET
// store/create -> cria um novo usuario --> POST
// delete -> deleta um usuario --> DELETE
// show -> mostra um usuario --> GET
// update -> atualiza um usuario --> PATCH OU PUT
