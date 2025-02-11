function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: string | number): number {
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  if(isNaN(numB)) {
    throw new Error("Invalid input: b must be a number or a parsable string");
  }
  return a + numB;
}

let result1 = add(1, 2); // Correct: 3
let result2 = addSafe(1, "2"); // Correct: 3
let result3 = addSafe(1, "abc"); // Throws Error

console.log(result1);
console.log(result2);
console.log(result3); 