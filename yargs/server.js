const readline = require("readline");
const readline1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline1.question("What is your name? ", function (name) {
  readline1.question("What is your country?", function (country) {
    console.log(`${name} belongs to ${country}`);
    readline1.close();
  });
});
console.log("Hello");
readline1.on("close", function () {
  console.log("Bye Bye");
  process.exit(0);
});
