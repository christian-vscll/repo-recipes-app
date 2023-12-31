import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import Provider from '../../context/Provider';

const renderWithRouter = (
  component, // componente a ser renderizado
  {

    // rota inicial da nossa aplicação
    initialEntries = ['/'],

    // caso você passe um history por parâmetro ele será utilizado
    // caso contrário vai chamar a função createMemotryHistory e criar um novo
    history = createMemoryHistory({ initialEntries }),
  } = {},
) => ({ // arrow function que retorna um objeto

  // spread do retorno do render { getByTestId, getByRole, etc }
  ...render(
    <Provider>
      <Router history={ history }>
        {component}
      </Router>
    </Provider>,
  ),

  // history usado acima
  history,
});

// resultado dessa função:
// renderiza o componente no teste
// retorna um objeto contendo { history, getByTestId, getByRole, etc }

export default renderWithRouter;
