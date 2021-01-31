function solution(arr) {
  let maxDiff = -1;
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > min && maxDiff < arr[i] - min) {
      maxDiff = arr[i] - min;
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return maxDiff;
}

// console.log(solution([4,6,2,2,6,6,1]));
