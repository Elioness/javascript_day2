# 🧙 Week 1 - Javascript Exercise

(This is a markdown .MD file, if you are reading this in vs-code, right click the file and select `Open Preview`)

#### Rules for this exercise

- You are allowed to consult the Reader, previous exercises and search on the internet
- You are not allowed to ask your colleagues for help
- You are not allowed to share this file with anyone besides the teachers

#### Duration

- This exercise ends at 17.30h

#### How to make and submit your homework

- Create a directory called `end-of-day-exercises`
- Create a `characters.json` file and copy the contents of the provided file.
- Once you finish or the deadline time is reached:
  - open [gist](https://gist.github.com/)
  - copy/paste all your code there
  - click `Create secret gist`
  - fill in [THIS FORM](https://docs.google.com/forms/d/1s8olD191eWZek6LePfOGal0PIhw1Td4Aj5l40wrdUUw/edit)

## Learning goals & some tips

For transparency and clarity, these are the learning goals we will be testing:

- Writing Javascript (using variables, functions, return values, parameters)
- Working with arrays and objects
- Using array methods (.find, .filter, .map)

**TIP: Read the assignment carefully!** It is easy to accidentally deviate from an assignment, resulting in a frustrating experience. Taking the time to read the exercise can save you time and effort.

**TIP: Don't get stuck!** If you feel stuck, try taking a small walk, continuing on to a next step, or talking out loud about the problem you're facing (programmers call this "rubber-ducking"). Everybody can get stuck, but don't let it stop you. You are also allowed to ask for help if you're really stuck, just try to avoid it.

**TIP: Break problems up into smaller problems!** Before writing code make yourself a 'to-do list' or 'battleplan'. Use `console.log()` to help you with debugging!

### ❗ Javascript

Create a file called `index.js` and import the `characters.json` file using `require`.

**A** Select the **4th** character of your characters array and console.log it.

**B** use an array method to locate the character object with id `78` and console.log it.

**C** Console.log an array with only the characters that have `blood: "Half-blood"`.

**BONUS**:

**D** Console.log an array that contains only the `quotes` of each character (so strings, not object)

**E** Console.log an array with all characters that are not "Human".

**F** Console.log an array of all characters whose name **_includes_** "agr" [**Tip here**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

The `const` in this section should look something like this:

```js
const characters = require('./characters.json'); // ONLY IMPORT THIS ONCE

// Exercise-Z (fake)
const charNames = characters.map((char) => char.name); //for example
console.log(charNames); // array with only character names.
```