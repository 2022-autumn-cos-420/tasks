import { isValidPasword } from "./passwordchecker";

describe("Testing password validity", () => {
    test("Is password long enough", () => {
        expect(isValidPasword("ShortPass")).toEqual(false);
    });

    test("Does password start with number", () => {
        expect(isValidPasword("1LongEnoughPassword!")).toEqual(false);
    });

    test("Does password start with special character", () => {
        expect(isValidPasword("!SpecialCharacter!")).toEqual(false);
    });

    test("Does password meet requirements", () => {
        expect(isValidPasword("Semi-SecurePassword4")).toEqual(true);
    });
});
