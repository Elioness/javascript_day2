const { concat } = require("../patients")
const characters = require("./characters.json")

//A Select the 4th Character in the characters array 

const fourthCharacter = characters[3]
//console.log(fourthCharacter)

//B Find id 78
const specificCharacterById = characters.find ((character) => {
    const id = 78;
    return id === character.id
})

//console.log(specificCharacterById)

//C Filter blood: "Half-blood"

const halfbloodCharacters = characters.filter((character) => character.blood === "Half-blood");
//console.log(halfbloodCharacters)

//D Array that only contains quotes in strings 

const characterQuotes = characters.map((character) => {
  const { quote } = character;
  const quotes = `${quote}`;
  return quotes;
});
//console.log(characterQuotes)

//E Array that are not human - there are no character that is not human 

const notHumanCharacters = characters.filter(
  (character) => character.blood === !"Half-blood"
);
// console.log(notHumanCharacters.length)
// console.log(characters.length)

//F Array of all characters with "agr"

const agrCharacters = characters.filter(function (character) {
  const agr = "agr"
  const {name } = character
return name.includes(agr);
});
console.log(agrCharacters)
