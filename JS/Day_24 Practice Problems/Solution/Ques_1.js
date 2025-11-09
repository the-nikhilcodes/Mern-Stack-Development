// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let players = ["shubh", "anajali", "Shivani", "Shivangi", "Annapurna", "Shubham", "Krishnanendu", "Ravindranathan", "Shivesh", "kaif", "Emanuel"];

let teams = [];

for (const player of players) {
    if (player.length < 6) {
        teams.push("Lions");
    } else if (player.length < 8) {
        teams.push("Tigers");
    } else if (player.length < 12) {
        teams.push("Eagles");
    } else {
        teams.push("Dragons");
    }
}

console.log(teams);
