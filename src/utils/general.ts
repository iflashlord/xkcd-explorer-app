/**
 * get random between two numbers / number min and max included 
 * @param min 
 * @param max 
 */
export function randomFromInterval(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
} 