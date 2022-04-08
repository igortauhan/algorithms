function twoSum(numbers: number[], target: number): number[] {
  let indices: number[] = [];

  for (let i: number = 0; i < numbers.length; i++) {
    for (let j: number = 0; j < numbers.length; j++) {
      if (i == j) continue;

      if (numbers[i] + numbers[j] == target) {
        indices[0] = i;
        indices[1] = j;
      }
    }
  }

  return indices;
}

let numbers: number[] = [3, 2, 3];
let response = twoSum(numbers, 6);

response.forEach((value) => {
  console.log(value);
});
