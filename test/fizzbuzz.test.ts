import { fizz_buzz } from '../src/fizzbuzz/fizzbuzz';

test('3 returns Fizz', () => {
    expect(fizz_buzz(3)).toBe("Fizz");
});

test('5 returns Buzz', () => {
    expect(fizz_buzz(5)).toBe("Buzz");
});

test('15 returns FizzBuzz', () => {
    expect(fizz_buzz(15)).toBe("FizzBuzz");
});

test('2 returns 2', () => {
    expect(fizz_buzz(2)).toBe(2);
});



const cases: [number, string | number][] = [
    [6, "Fizz"], 
    [4, 4], 
    [10, "Buzz"], 
    [30, "FizzBuzz"],
    [22, 22], 
    [53, 53], 
    [73, 73], 
    [97, 97], 
];

describe("Fuzzy Tests", () => {
  test.each(cases)(
    "given %p, returns %p",
    (input, expectedResult) => {
      const result = fizz_buzz(input);
      expect(result).toEqual(expectedResult);
    }
  );
});