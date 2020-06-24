
import React from 'react';
import TodoApp from './src/TodoApp';
import store from './src/store';
import { Provider } from 'react-redux';

/**
 * Redux:
 * 2 types of components
 *  => Presentational component (not aware of redux a.k.a dumb component)
 *  => Container component (aware of redux - connect to redux a.k.a smart component)
 */

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
};

export default App;