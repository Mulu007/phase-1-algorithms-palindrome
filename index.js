function isPalindrome(word) {
  // Write your algorithm here
  let len = word.length;
  let mid = Math.floor(len/2)

  for (let i = 0; i < mid; i++) { 
    if (word[i] !== word[len - 1 -i]) {
      return false;
    }
  }
  return true;
}

// }


/* 
  Add your pseudocode here
  start
  if the letters of the split word match match retun true 
     else return false
  stop
*/

/*
  Add written explanation of your solution here
  iteration starts from the first letter of the word to the middle letter splitting the letter into two.
  The code then checks each letter startinf from the beginning letter with the last letter.
  If the letters match then the code return true.
  If the letters do not match the code return false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
