let person = { name: "", score: 0 }

person.name = prompt("name?")
person.score = prompt("score?")

localStorage.setItem("people", JSON.stringify(person))

console.log(localStorage);

let tempest = []
let myParser = (localStorage.getItem("people"))

myParser = JSON.parse(myParser)
console.log(myParser);

person.name = prompt("name?")
person.score = prompt("score?")

tempest.push(myParser)
tempest.push(person)

if (localStorage.people == undefined) {

    console.log("empty");
}

