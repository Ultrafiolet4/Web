//Exercise 1

let arr = ["Tom", "Sam", "Ray", "Bob"];
let [firstName,secondName,thirdName,fourthName] = arr;
console.log(firstName);
console.log(secondName);
console.log(fourthName); 

//Exercise 2

let data = {
	names: ["Sam", "Tom", "Ray", "Bob"],
	ages: [20, 24, 22, 26]
};
let {
	names: [nameOne, nameTwo, nameThree, nameFour],
	ages: [ageOne, ageTwo, ageThree, ageFour]
} = data;

console.log(nameTwo);
console.log(ageTwo);
console.log(nameFour);
console.log(ageFour);

//Exercise 3

function mul(...args) {
	args = args.filter(i => typeof i === "number");
	return args.length
	       ? args.reduce((i, j) => i * j)
	       : 0;
}

console.log(mul(2, "str", 4, 5, true));
console.log(mul(5, "str", 2, 2, true));
console.log(mul(null, "str", false, true));

//Exercise 4

function builderForMap(key, value) {
	let myMap = new Map();
	key.forEach((key, index) => myMap.set(key, value[index]));
	return myMap;
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = builderForMap(keys, values);
console.log(map.size);
console.log(map.get(2));
