// Nathan Hansen
// freeCodeCamp Algorithm challenges


// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.
function reverseString(str) {
    var stringArray = str.split('');
    stringArray = stringArray.reverse();
    var reverseStr = stringArray.join('');
  
    return reverseStr;
}


// Factorialize a Number
// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
function factorialize(num) {
    if (num > 0) {
      for (i = num - 1; i > 0; i--) {
        num *= i;
      }
      return num;
    }
    else if (num == 1 || num == 0) {
      return 1;
    }
    else {
      return -1
    }
  }


// Check for Palindromes
// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Note:
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
function palindrome(str) {
    // Need to modify the string to get rid of uppercase letters, spaces and symbols
    // Using regular expression and the replace function to get rid of those nasty characters
    str = str.toLowerCase();
    str = str.replace(/\s+/g, '');
    str = str.replace(/\W/g, '');
    str = str.replace(/_/g, '');
    
    // Next need to reverse the string
    var stringArray = str.split('');
    stringArray = stringArray.reverse();
    var reverseStr = stringArray.join('');
       
    // Do the final check for palindrome.
    if (reverseStr == str) {
      return true;
    }
    else {
      return false;
    }
  }

// Find the longest word in a string
// Return the length of the longest word in the provided sentence.
// Your response should be a number.
function findLongestWord(str) {
  
  // The split function creates and array of strings based on the entered criteria.
  var wordArray = str.split(" ");
  
  // Create a variable to track the length of the largest word.
  var wordLength = 0;
  
  // The for loops goes through all the words in the array and checks to see if they are longer than the previous.
  for (i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > wordLength) {
      wordLength = wordArray[i].length;
    }
  }

  // Return the lenght of the longest word.
  return wordLength;
}


// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
function titleCase(str) {
  // Step 1. Lowercase the string
  str = str.toLowerCase();
  // str = "I'm a little tea pot".toLowerCase();
  // str = "i'm a little tea pot";
  
  // Step 2. Split the string into an array of strings
  str = str.split(' ');
  // str = "i'm a little tea pot".split(' ');
  // str = ["i'm", "a", "little", "tea", "pot"];
  
  // Step 3. Create the FOR loop
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  /* Here str.length = 5
    1st iteration: str[0] = str[0].charAt(0).toUpperCase() + str[0].slice(1);
                   str[0] = "i'm".charAt(0).toUpperCase()  + "i'm".slice(1);
                   str[0] = "I"                            + "'m";
                   str[0] = "I'm";
    2nd iteration: str[1] = str[1].charAt(0).toUpperCase() + str[1].slice(1);
                   str[1] = "a".charAt(0).toUpperCase()    + "a".slice(1);
                   str[1] = "A"                            + "";
                   str[1] = "A";
    3rd iteration: str[2] = str[2].charAt(0).toUpperCase()   + str[2].slice(1);
                   str[2] = "little".charAt(0).toUpperCase() + "little".slice(1);
                   str[2] = "L"                              + "ittle";
                   str[2] = "Little";
    4th iteration: str[3] = str[3].charAt(0).toUpperCase() + str[3].slice(1);
                   str[3] = "tea".charAt(0).toUpperCase()  + "tea".slice(1);
                   str[3] = "T"                            + "ea";
                   str[3] = "Tea";
    5th iteration: str[4] = str[4].charAt(0).toUpperCase() + str[4].slice(1);
                   str[4] = "pot".charAt(0).toUpperCase() + "pot".slice(1);
                   str[4] = "P"                           + "ot";
                   str[4] = "Pot";                                                         
    End of the FOR Loop*/
  }
  
  // Step 4. Return the output
  return str.join(' '); // ["I'm", "A", "Little", "Tea", "Pot"].join(' ') => "I'm A Little Tea Pot"
}


// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
function largestOfFour(arr) {
  // Need to create a variable to store the counter
  var largestNumbers = [];
  
  // The for loop goes through the array
  for (i = 0; i < arr.length; i++) {
    
    // Sort the subarray from highest to lowest
    arr[i] = arr[i].sort(function(a, b){return b-a;});
    
    // Store the highest number in the subarray in temperorary variable, then push that number into our counter array
    var num = arr[i][0];
    largestNumbers.push(num);
  } 
  
  // Return the array of highest numbers!
  return largestNumbers;
}


// Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).
// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
function confirmEnding(str, target) {
  
  // We can do this with a simple if/else statement
  // Use the substring method to pull out the end of the string and check it against the target
  if (str.substring(str.length - target.length, str.length) == target) {
    return true;
  }
  else {
    return false;
  }
}


// Repeat a string repeat a string
// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
function repeatStringNumTimes(str, num) {

  // Check to make sure num is positive. If not, return false
  if (num < 1) {
    return "";
  }
  // Otherwise, we need to create the repeated string. Use the concat() method.
  else {
    var tempString = "";
    for (i = 0; i < num; i++) {
      
      tempString = tempString.concat(str);
    }
    return tempString;
  }
}


// Truncate a string
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
// Note that inserting the three dots to the end will add to the string length.
// However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.
function truncateString(str, num) {
  if (num <=3) {
    str = str.slice(0, num);
    str = str.concat("...");
  }
  else if (num < str.length-3) {
    str = str.slice(0, num-3);
    str = str.concat("..."); 
  }
  return str;
}


// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
  // Need to create an array to store our chunks
  var newArray = [];
  
  // The for loop runs through the original array
  for (i = 0; i < arr.length; i += size) {
    //We slice the array using the size provided. Slice is nice in that if the last chunck is smaller than size, it won't goof up.
    newArray.push(arr.slice(i, i+size));
  }
  return newArray;
}


// Slasher Flick
// Return the remaining elements of an array after chopping off n elements from the head.
// The head means the beginning of the array, or the zeroth index.

// Solution 1
function slasher(arr, howMany) {
  // remove the head
  arr.splice(0, howMany);
  // return the remaining or the tail
  return arr;
}

// Solution 2
function slasher(arr, howMany) {
  // The splice function returns what is deleted. In this case, everything after index howMany.
  return arr.splice(howMany);
}


// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
// The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.

function mutation(arr) {
  // Let's make sure we don't have uppercase characters tripping us up.
  var array1 = arr[0].toLowerCase();
  // Let's split the string we are checking into an array of characters.
  var array2 = arr[1].toLowerCase().split('');
  
  // Let's use a for loop to check and see if each character is in the other string. If not, return false.
  for (i = 0; i < array2.length; i++) {
    var check = array1.indexOf(array2[i]);
    if (check == -1) {
      return false;
    }
  }
    
  return true;
}


// Falsy Bouncer
// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
function bouncer(arr) {
  // The Boolean function returns false if any of the values are 'falsy'.
  return arr.filter(Boolean);
}


// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
// Remove all elements from the initial array that are of the same value as these arguments.

// Solution 1:
function destroyer(arr) {
  // Create an array from the arguments passed to the function
  var args = Array.prototype.slice.call(arguments);
  
  // We will use two for loops
  // The first gor through array passed to the function
  // The second goes through the arguments and gets rid of the arguments passed to the function
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }

  // We use filter to get rid of any empty cells
  return arr.filter(Boolean);
}

// Solution 2:
function destroyer(arr) {
  // Create an array called args from the arugments after the array passed to the function. 
  var args = Array.from(arguments).slice(1);
  
  // Use the filter function with a function to get rid of any of the aruments we want destroyed.
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}


// Where do I belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
  // Since sort works on strings and not numbers, create a number sorting function.
  function compareNumbers(a, b) {return a - b;}
  
  // Next let's sort the array.
  arr = arr.sort(compareNumbers);
  
  // Finally, we will use a loop to find the index where the number should go.
  for (i = 0; i < arr.length; i++) {
    // If the number at i is larger than or equal to the number, that's the index where it should go.
    if (arr[i] >= num) {
      return i;
    }
  }
  // If we get through the whole array, then the number is bigger than the rest and needs to be put at the end.
  return arr.length;
}


// Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


function rot13(str) { // LBH QVQ VG!
  // Let's turn the string into an array
  var stringArray = str.split('');
  
  //Use a for loop and a switch statement to convert
  for (i = 0; i< stringArray.length; i++) {
    switch(stringArray[i]) {
      case 'A':
        stringArray[i] = 'N';
        break;
      case 'B':
        stringArray[i] = 'O';
        break;
      case 'C':
        stringArray[i] = 'P';
        break;
      case 'D':
        stringArray[i] = 'Q';
        break;
      case 'E':
        stringArray[i] = 'R';
        break;
      case 'F':
        stringArray[i] = 'S';
        break;
      case 'G':
        stringArray[i] = 'T';
        break;
      case 'H':
        stringArray[i] = 'U';
        break;
      case 'I':
        stringArray[i] = 'V';
        break;
      case 'J':
        stringArray[i] = 'W';
        break;
      case 'K':
        stringArray[i] = 'X';
        break;
      case 'L':
        stringArray[i] = 'Y';
        break;
      case 'M':
        stringArray[i] = 'Z';
        break;
      case 'N':
        stringArray[i] = 'A';
        break;
      case 'O':
        stringArray[i] = 'B';
        break;
      case 'P':
        stringArray[i] = 'C';
        break;
      case 'Q':
        stringArray[i] = 'D';
        break;          
      case 'R':
        stringArray[i] = 'E';
        break;
      case 'S':
        stringArray[i] = 'F';
        break;
      case 'T':
        stringArray[i] = 'G';
        break;
      case 'U':
        stringArray[i] = 'H';
        break;
      case 'V':
        stringArray[i] = 'I';
        break;
      case 'W':
        stringArray[i] = 'J';
        break;
      case 'X':
        stringArray[i] = 'K';
        break;
      case 'Y':
        stringArray[i] = 'L';
        break;
      case 'Z':
        stringArray[i] = 'M';
        break;
      case ' ': 
        break;
      case '.':
        break;
      case '?':
        break;
      case '!':
        break;
    }
  }
  
  // Neet to convert our array back into a string and return it.
  str = stringArray.join('');
  return str;
}

// Solution 2:
function rot13(str) {
  // Split str into a character array
  return str.split('')
  // Iterate over each character in the array
    .map.call(str, function(char) {
      // Convert char to a character code
      x = char.charCodeAt(0);
      // Checks if character lies between A-Z
      if (x < 65 || x > 90) {
        return String.fromCharCode(x);  // Return un-converted character
      }
      //N = ASCII 78, if the character code is less than 78, shift forward 13 places
      else if (x < 78) {
        return String.fromCharCode(x + 13);
      }
      // Otherwise shift the character 13 places backward
      return String.fromCharCode(x - 13);
    }).join('');  // Rejoin the array into a string
}

// Solution 3:
// Solution with Regular expression and Array of ASCII character codes
function rot13(str) {
  var rotCharArray = [];
  var regEx = /[A-Z]/ ;
  str = str.split("");
  for (var x in str) {
    if (regEx.test(str[x])) {
      // A more general approach
      // possible because of modular arithmetic
      // and cyclic nature of rot13 transform
      rotCharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65);
    } else {
      rotCharArray.push(str[x].charCodeAt());
    }
  }
  str = String.fromCharCode.apply(String, rotCharArray);
  return str;
}

