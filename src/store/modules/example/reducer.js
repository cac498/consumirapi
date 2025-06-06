import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'BOTÃO_CLICADO_SUCESS': {
      console.log('Sucesso');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }
    case 'BOTÃO_CLICADO_FAILURE': {
      console.log('Deu Error =/');
      return state;
    }
    case 'BOTÃO_CLICADO_REQUEST': {
      console.log('Estou fazendo a requisição');
      return state;
    }

    default: {
      return state;
    }
  }
}
