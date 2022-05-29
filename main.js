//entry point of my command line
let helpFunc =require("./commands/help")
let inputArr=process.argv.slice(2);
let command=inputArr[0];
let path=inputArr[1];
switch (command) {//organise
    case "tree":
        //call tree function
        break;
    case "organize":
        //call organize function
        console.log("ajhchj");
        break;
    case "help":
        //call help function
        helpFunc.help();
        break;
    default:
        console.log("command not recognized :/")
        break;
}