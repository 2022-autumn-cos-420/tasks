export function isValidPasword(password: string): boolean {
    if (password.length <= 16) {
        return false;
    }
    if (/([0-9])/.test(password[0])) {
        return false;
    }
    if (/([a-z])/.test(password[0].toLowerCase()) === false) {
        return false;
    }
    if (/[^A-Za-z0-9]/.test(password[0]) === true) {
        return false;
    }

    if (password.length >= 16 === false) {
        return false;
    }

    if (/([a-z])/.test(password.toLowerCase()) === false) {
        return false;
    }

    if (/([0-9])/.test(password) === false) {
        return false;
    }

    if (/[^A-Za-z0-9]/.test(password) === false) {
        return false;
    }
    return true;
}
