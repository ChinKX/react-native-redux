const logger = ({ getState, dispatch }) => next => action => {
    // action is the action dispatched
    console.log(action)
    next(action)
    console.log(action)
} 

export default logger