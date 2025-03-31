// Arrays

//adding an element to the array
let activities=["eat", "sleep"];
activities.push("exercise");
console.log(activities);


activities.pop([1]);
console.log(activities);

activities.push("dance","play","pray")
console.log(activities);

console.log(activities[1]);

activities.unshift("work");
console.log(activities);

activities[1]="cook";
console.log(activities);

let str="hello";
let reversed = str.split("").reverse().join("");
console.log(reversed);