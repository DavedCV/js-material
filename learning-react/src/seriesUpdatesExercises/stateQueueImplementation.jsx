/*
Your task is to implement the getFinalState function so that it returns the 
correct result for each of those cases. If you implement it correctly, all four 
tests should pass.

You will receive two arguments: baseState is the initial state (like 0), and the 
queue is an array which contains a mix of numbers (like 5) and updater 
functions (like n => n + 1) in the order they were added.

Your task is to return the final state, just like the tables on this page show!
*/

function getFinalState(baseState, queue) {
  let finalState = baseState;

  // TODO: do something with the queue...
  queue.forEach((update) => {
    if (typeof update === "function") finalState = update(finalState);
    else finalState = update;
  });

  return finalState;
}
