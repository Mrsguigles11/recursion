// Iterative solution

function fibs(n) {
  let array = [];

  for (let i = 0; i < n; i++) {
    if (array.length === 0) {
      array.push(0);
    } else if (array.length === 1) {
      array.push(1);
    } else {
      const fibNo = array[i - 2] + array[i - 1];
      array.push(fibNo);
    }
  }

  return array;
}

//   Recursive solution

function fibonacci(n) {
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

function fibsRec(n) {
  let array = [];

  if (n === 0) {
    return [];
  } else {
    array.push(fibonacci(n - 1));
    return fibsRec(n - 1).concat(array);
  }
}
