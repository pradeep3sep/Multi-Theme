export function validateData(input: string, pattern: RegExp): boolean {
    return pattern.test(input);
}