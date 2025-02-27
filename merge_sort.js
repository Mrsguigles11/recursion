function merge(leftSide, rightSide) {
  let sortedArray = [];

  if (leftSide.length === 0) {
    return rightSide;
  } else if (rightSide.length === 0) {
    return leftSide;
  }

  if (leftSide[0] < rightSide[0] || leftSide[0] === rightSide[0]) {
    sortedArray.push(leftSide[0]);
    leftSide.shift();
    return sortedArray.concat(merge(leftSide, rightSide));
  } else if (rightSide[0] < leftSide[0]) {
    sortedArray.push(rightSide[0]);
    rightSide.shift();
    return sortedArray.concat(merge(leftSide, rightSide));
  }
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  const a = 1;
  const b = array.length;

  if (a < b) {
    const middle = b / 2;
    const leftSide = mergeSort(array.slice(0, middle));
    const rightSide = mergeSort(array.slice(middle, array.length));
    return merge(leftSide, rightSide);
  }
}
