console.log('The port number for the environment is ' + process.env.PORT);
console.log('The port number supplied is ' + process.argv[2]);
var chosenPort = process.env.PORT | process.argv[2] | 3000;
console.log('Attempting to run on port ' + chosenPort);
require("./module")(chosenPort);

