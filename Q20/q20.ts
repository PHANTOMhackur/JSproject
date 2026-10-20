const totalMinutes: number = 135;
const hours: number = Math.floor(totalMinutes / 60);
const remainingMinutes: number = totalMinutes % 60;

console.log(totalMinutes + " minutes = " + hours + " hours and " + remainingMinutes + " minutes");

export {};
