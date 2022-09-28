import React, { useState } from 'react';
import propTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [recipeDetail, setRecipeDetail] = useState();
  const [recomendations, setRecomendations] = useState();

  const contextValue = {
    recipeDetail,
    setRecipeDetail,
    recomendations,
    setRecomendations,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

Provider.defaultProps = { children: {} };
Provider.propTypes = {
  children: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
    propTypes.array,
    propTypes.object,
  ]),
};

export default Provider;
