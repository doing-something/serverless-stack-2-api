export function calculateCost(storage) {
    const rate = stoage <= 10 ? 4 : storage <= 100 ? 2 : 1;

    return rate * storage * 10;
}
