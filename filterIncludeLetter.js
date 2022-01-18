const wutangClanMembers = [
  "RZA",
  "GZA",
  "Inspectah Deck",
  "U-God",
  "Ghostface Killah",
  "Method Man",
  "Raekwon",
  "Masta Killa",
  "Cappadonna",
  "Ol' Dirty Bastard",
];

/* #1 Member with letter "a" in their names, in this case -1 is returned whenever an index inside an array does not have the string
I think I can also write the logic as member.indexOf("a") > 0 */ 

const letterAMembers = wutangClanMembers.filter((member) => {
    return member.indexOf("a") !== -1 || member.indexOf("A") > 0
})

//console.log(letterAMembers)

// #2 Member that includes the word Killa 

const memberWithKilla = wutangClanMembers.filter((member) => {
    const Killa = "Killa"
    return member.includes(Killa)
})

//console.log(memberWithKilla)

//#3 Member with Uppercas

const memberUppercase = wutangClanMembers.filter((member) => {
   return member === member.toUpperCase()
})

//console.log(memberUppercase)

//#4 Member with " " <- space in their names

const memberWithSpace = wutangClanMembers.filter((member) => {
    return member.includes(" ")
})

console.log(memberWithSpace)