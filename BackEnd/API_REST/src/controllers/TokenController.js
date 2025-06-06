import jwt from 'jsonwebtoken';
import User from '../models/User.js';



class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;
    if (!email || !password) {
      return res.status(401).json({ error: 'Credenciais invalidas' });
    }

    const user = await User.findOne({ where: { email } });
        if (!user) {
      return res.status(401).json({ error: 'Usuario não existe' });
    }
    if(!(await user.passwordIsValid(password))) {
      return res.status(401).json({ error: 'Senha invalida' });
    }


    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
   return res.json({ token , user: {
      id: user.id,
      nome: user.nome,
      email: user.email,
    } });
  }
}


export default new TokenController();
