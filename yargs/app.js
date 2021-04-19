const yargs = require("yargs");
console.log(process.argv);
const params = yargs.argv;
console.log(params);
if (params.person) {
  console.log("Hello ", params.person);
} else {
  console.log("What are you typing?");
}
// console.log(yargs.argv.person);

// console.log(`Good Morning ${yargs.argv.person}`);
