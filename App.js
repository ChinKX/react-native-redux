import React, { Component } from "react";
import {
  StyleSheet
} from "react-native";
import { createStore } from 'redux';
import CounterApp from './src/CounterApp';
import { Provider } from 'react-redux';
/**
 * Store - holds our state - THERE IS ONLY ONE STATE
 * Action - State can be modified using actions - SIMPLE OBJECTS (determine what to do)
 * Dispatcher - Action needs to be sent by someone - known as dispatching an action (trigger)
 * Reducer - receives the action and modifies the state to give us a new state (processor)
 *  - pure functions (should return same result when same params are used does not depend on
 *    any outside variable or network data to ensure consistent state)
 *  - only mandatory argument is the 'type' 
 * Subscriber - listens for state change to update the ui  
 */
const initialState = {
  counter: 0
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return { counter: state.counter + 1 };
    case 'DECREASE_COUNTER':
      return { counter: state.counter - 1 };
  }
  return state;
}

const store = createStore(reducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}

export default App

// export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});