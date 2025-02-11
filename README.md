# TypeScript Type Error in Addition Function

This repository demonstrates a common type error in TypeScript that occurs when incorrect data types are passed to a function.

## Bug Description

The function `add` is defined to accept two numbers and return their sum. However, in the example usage, the second argument passed to `add` is a string ("2"), causing a type error.

## Bug Reproduction

1. Clone this repository.
2. Compile the TypeScript code using the command `tsc bug.ts`.
3. Observe the compiler error indicating a type mismatch.

## Solution

The solution involves ensuring that only the correct types are passed to the function. This can be done by type checking and casting the arguments.

## Solution Code

The `bugSolution.ts` file contains the corrected version of the code, where the function handles potential type mismatches effectively.