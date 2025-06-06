import {Router} from 'express';
import userController from '../controllers/UserController.js';
import loginRequired from '../middlewares/loginRequired.js';
const router = new Router();
// nao deveria existir, falha de segurança
// router.get('/', userController.index);
// router.get('/:id',  userController.show);


router.post('/', loginRequired, userController.store);
router.delete('/', loginRequired, userController.delete);
router.put('/', loginRequired, userController.update);
export default router;


// index -> lista todos os usuarios --> GET
// store/create -> cria um novo usuario --> POST
// delete -> deleta um usuario --> DELETE
// show -> mostra um usuario --> GET
// update -> atualiza um usuario --> PATCH OU PUT
