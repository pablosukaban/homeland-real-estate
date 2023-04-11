export function convertFootToMeter(surface: string): string {
    const num = surface.split(' ')[0];
    const converted = Math.floor(parseInt(num) / 10.764);

    return `${converted} кв. м.`;
}
