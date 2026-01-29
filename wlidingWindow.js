var maxSlidingWindow = function (arr, k) {
  let res = [];
  let deque = [];
  let i = (j = 0);

  while (j < arr.length) {
    while (deque.length > 0 && arr[deque[deque.length - 1]] < arr[j]) {
      deque.pop();
    }

    deque.push(j);

    if (j - i + 1 < k) {
      j++;
    } else {
      res.push(arr[deque[0]]);

      if (deque[0] === i) {
        deque.shift();
      }

      i++;
      j++;
    }
  }

  return res;
};

let arr = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;
console.log(maxSlidingWindow(arr, k));
// [3, 3, 5, 5, 6, 7]
