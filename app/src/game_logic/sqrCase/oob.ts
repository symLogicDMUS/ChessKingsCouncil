export function outOfBounds(x: number, y: number): boolean {
    /*return true if (x, y) is out of bounds, else false**/
    return x < 1 || x > 8 || y < 1 || y > 8;
}