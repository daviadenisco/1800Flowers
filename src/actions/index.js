export const SET_STACK = 'SET_STACK';

export function setStack(stack) {
  // const action = {
  //   type: 'SET_STACK',
  //   stack: stack
  // };

  // return action;

  return {
    type: SET_STACK,
    stack: stack
  };
};
