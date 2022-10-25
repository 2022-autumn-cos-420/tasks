/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const firstnum: number = numbers[0];
    const lastnum: number = numbers[numbers.length - 1];
    let bookEndnumbers = [firstnum, lastnum];

    if (numbers.length === 0) {
        bookEndnumbers = [];
    }
    return bookEndnumbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triplednums = numbers.map((num: number): number => num * 3);
    return triplednums;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const convertedIntegers = numbers.map((convert: string): number =>
        isNaN(Number(convert)) === false ? Number(convert) : 0
    );

    return convertedIntegers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const convertedStrings = amounts.map((fixed: string): number =>
        fixed[0] === "$" ? Number(fixed.substring(1)) : Number(fixed)
    );

    const fixedStrings = convertedStrings.map((num: number): number =>
        isNaN(num) === false ? num : 0
    );
    return fixedStrings;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const firstPass = messages.map((fixed: string): string =>
        fixed[fixed.length - 1] === "!" ? fixed.toUpperCase() : fixed
    );
    const secondPass = firstPass.filter(
        (fixed: string): boolean => fixed[fixed.length - 1] !== "?"
    );
    return secondPass;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const fixedWords = words.filter((word: string): boolean => word.length < 4);
    return fixedWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const redGreenBlue = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    return redGreenBlue;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const addedNumbers = addends.join("+");
    const sum = addends.reduce(
        (currentSum: number, num: number) => currentSum + num,
        0
    );
    let EquationString = sum.toString().concat("=", addedNumbers);
    if (sum === 0 || isNaN(sum)) {
        console.log("Test");
        EquationString = EquationString.concat("0");
        return EquationString;
    }
    return EquationString;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    return [];
}
