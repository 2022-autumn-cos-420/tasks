/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let newNums: number[] = [];
    if (numbers.length > 0) {
        newNums = [numbers[0], numbers[numbers.length - 1]];
    }

    return newNums;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    numbers = numbers.map((numbers: number): number => numbers * 3);
    return numbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const newNums: number[] = numbers.map((numbers: string): number =>
        isNaN(Number(numbers)) ? 0 : parseInt(numbers)
    );
    return newNums;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let newNums = amounts.map((amounts: string): number =>
        amounts.startsWith("$")
            ? parseFloat(amounts.substring(1))
            : parseFloat(amounts)
    );
    newNums = newNums.map((a: number): number => (isNaN(a) ? 0 : a));
    return newNums;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let newMsg: string[] = messages.map((x: string): string =>
        x.endsWith("!") ? x.toUpperCase() : x
    );
    newMsg = newMsg.filter((x: string) => !x.endsWith("?"));
    return newMsg;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    words = words.filter((x: string) => x.length < 4);
    return words.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length == 0) return true;
    const newColors = colors.filter(
        (x: string) => x === "red" || x === "blue" || x === "green"
    );
    return colors.length == newColors.length;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length == 0) return "0=0";
    let finalString = "";
    let sum = 0;
    addends.forEach((x: number) => {
        sum += x;
        finalString = finalString.concat(x.toString() + "+");
    });
    finalString = sum.toString().concat("=" + finalString.slice(0, -1));
    return finalString;
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
    let haveNeg = false;
    let sum = 0;
    let newValues = [...values];
    for (let i = 0; i < newValues.length; i++) {
        if (!haveNeg && newValues[i] < 0) {
            newValues.splice(i + 1, 0, sum);
            haveNeg = true;
        } else sum += newValues[i];
    }
    if (!haveNeg) newValues = [...newValues, sum];
    return newValues;
}
