//Strings
let text=" I am Shirley";
console.log(text.length);

console.log(text[2]);
console.log(text.charAt(2));

p=text.charAt(2);
console.log(p);

console.log(text.slice(5, ));
console.log(text.slice(2,4).toUpperCase());
console.log(text.slice(-2, ))
console.log(text.substring(2,4));
console.log(text.substring(4,2));
console.log(text.slice(4,2 ))

console.log(text.toUpperCase());

let text2="Bilha";
console.log(text + " " + "Bilha");
console.log(text.concat(" ", text2));

console.log(text.trim());
console.log(text.repeat(2));
console.log(text.replace("a","i"));

console.log(text.split("|")) 

console.log(text.indexOf("a"));
console.log(text.lastIndexOf("am"));

console.log(text.search("Shi"));

console.log(text.includes("Shi"));

let tex = "Hello world, welcome to the universe.";
console.log(tex.startsWith("world", 5));
console.log(tex.startsWith("world", 6));

let d= `He's often called "Johnny"`;
console.log(d);

let str="hello";
let reversed = str.split("").reverse().join("");
console.log(reversed);
   
