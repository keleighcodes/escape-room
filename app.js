const readline = require("readline-sync")

const userName = readline.question("Enter username.");
console.log(userName + " just woke up in a dark, cold room with only one door. There is a strange hole in the wall to their left.");

let trapOptions = readline.question("They call for help, but it appears that " + userName + " is trapped. What should they do? Press ENTER for options.");
    functions=["Open the door.", "Put hand in hole.", "Look for a key."],
    index = readline.keyInSelect(functions)
    console.log(functions[index])
let foundKey = false 

while (foundKey === false){
    switch(functions[index]){
         case "Open the door.":
            functions[index] === 1;
            if (foundKey === true){
            console.log(userName + "Escaped! Good for them.")
            } else console.log ("The door is locked. Maybe " + userName + " should look for a key.")
            break; 

        case "Put hand in hole.":
            functions[index] === 2;
            console.log("After a burst of excruciating pain, " + userName + " dies.")
            break;

        case "Look for a key.": 
            functions[index] === 3;
            console.log(userName + " feels the ground around them and finds a key! Maybe it opens the door.");
            foundKey = true;
            let useKey = readline.question("Should " + userName + " try to use the key?")
            keys = ["Yes", "No"]
            userLeave = readline.keyInSelect(keys)
            console.log(keys[userLeave])
            
            if(keys[userLeave]===1){
                console.log(userName + " escaped!")
            } else {"For some reason, " + userName + " decides not to use the key. They remain in the room."}

    }

}


      



 



