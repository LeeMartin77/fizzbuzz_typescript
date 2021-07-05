const THREE_STRING = "Fizz";
const FIVE_STRING = "Buzz";

export function fizz_buzz(input_number: number): string | number {
    let divisible_by_three = input_number % 3 === 0;
    let divisible_by_five = input_number % 5 === 0;

    if(divisible_by_three && divisible_by_five){
        return THREE_STRING + FIVE_STRING;
    }
    if(divisible_by_three) {
        return THREE_STRING;
    }
    if(divisible_by_five) {
        return FIVE_STRING;
    }
    return input_number;
}