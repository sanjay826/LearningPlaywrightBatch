# String Interview Questions and Answers

## 1. What is a String in JavaScript?
**Answer:** A String is a sequence of characters used to represent text. In testing, strings are everywhere: URLs, selectors, assertions, responses, messages, and log parsing.

```javascript
const str = "Hello World";
console.log(typeof str); // "string"
```

## 2. What is the length property of a string?
**Answer:** The length property returns the number of characters in a string.

```javascript
const str = "JavaScript";
console.log(str.length); // 10
```

## 3. How do you access characters in a string by index?
**Answer:** Use bracket notation or the `charAt()` method to retrieve a character at a specific position.

```javascript
const str = "Hello";
console.log(str[0]); // "H"
console.log(str.charAt(1)); // "e"
```

## 4. What do the charAt() and charCodeAt() methods do?
**Answer:** `charAt()` returns the character at a specified index; `charCodeAt()` returns the Unicode value of that character.

```javascript
const str = "ABC";
console.log(str.charAt(0)); // "A"
console.log(str.charCodeAt(0)); // 65
```

## 5. How do you check if a string contains a substring?
**Answer:** Use the `includes()` method, which checks if a string contains a substring and returns a boolean value.

```javascript
const str = "Hello World";
console.log(str.includes("World")); // true
console.log(str.includes("xyz")); // false
```

## 6. How do you check if a string starts or ends with a specific substring?
**Answer:** Use the `startsWith()` and `endsWith()` methods to check if a string begins or ends with a specified substring.

```javascript
const str = "Hello World";
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("World")); // true
```

## 7. What does the indexOf() method do?
**Answer:** The `indexOf()` method returns the first index of a substring, or -1 if not found.

```javascript
const str = "Hello World";
console.log(str.indexOf("o")); // 4
console.log(str.indexOf("xyz")); // -1
```

## 8. How do you extract a portion of a string using slice()?
**Answer:** The `slice()` method extracts a portion of a string without modifying the original. It supports negative indices.

```javascript
const str = "Hello World";
console.log(str.slice(0, 5)); // "Hello"
console.log(str.slice(6)); // "World"
console.log(str.slice(-5)); // "World"
```

## 9. What is the difference between slice() and substring()?
**Answer:** `substring()` is similar to `slice()`, but it does not accept negative indices.

```javascript
const str = "Hello World";
console.log(str.substring(0, 5)); // "Hello"
console.log(str.substring(6, 11)); // "World"
```

## 10. What does the at() method do?
**Answer:** The `at()` method returns the character at a specified index, supporting negative indices.

```javascript
const str = "Hello";
console.log(str.at(0)); // "H"
console.log(str.at(-1)); // "o"
```

## 11. How do you convert a string to uppercase or lowercase?
**Answer:** Use the `toUpperCase()` and `toLowerCase()` methods to convert the entire string to uppercase or lowercase.

```javascript
const str = "Hello World";
console.log(str.toUpperCase()); // "HELLO WORLD"
console.log(str.toLowerCase()); // "hello world"
```

## 12. How do you trim whitespace from a string?
**Answer:** Use the `trim()` method to remove whitespace from both ends. Variants include `trimStart()` (left) and `trimEnd()` (right).

```javascript
const str = "  Hello  ";
console.log(str.trim()); // "Hello"
console.log(str.trimStart()); // "Hello  "
console.log(str.trimEnd()); // "  Hello"
```

## 13. How do you replace substrings in a string?
**Answer:** Use `replace()` to replace the first occurrence or `replaceAll()` to replace all occurrences of a substring with a new value.

```javascript
const str = "Hello Hello";
console.log(str.replace("Hello", "Hi")); // "Hi Hello"
console.log(str.replaceAll("Hello", "Hi")); // "Hi Hi"
```

## 14. How do you split a string into an array and join array elements into a string?
**Answer:** Use `split()` to split a string into an array using a delimiter, and `join()` to join array elements into a string.

```javascript
const str = "a,b,c";
const arr = str.split(","); // ["a", "b", "c"]
console.log(arr.join("-")); // "a-b-c"
```

## 15. How do you convert other data types to strings?
**Answer:** Use `String()`, `toString()`, or template literals to convert other data types to strings.

```javascript
console.log(String(123)); // "123"
console.log(String(true)); // "true"
console.log((456).toString()); // "456"
console.log(`${789}`); // "789"
```

## 16. How do you concatenate strings?
**Answer:** Combine multiple strings using the `+` operator or the `concat()` method.

```javascript
const str1 = "Hello";
const str2 = "World";
console.log(str1 + " " + str2); // "Hello World"
console.log(str1.concat(" ", str2)); // "Hello World"
```

## 17. Why are strings immutable in JavaScript?
**Answer:** Strings cannot be modified; string methods return new strings instead of altering the original.

```javascript
const str = "hello";
str[0] = "H"; // doesn't work
console.log(str); // "hello"
```

## 18. How do you repeat a string?
**Answer:** Use the `repeat()` method to return a new string with the original string repeated a specified number of times.

```javascript
console.log("abc".repeat(3)); // "abcabcabc"
```

## 19. How do you pad a string?
**Answer:** Use `padStart()` and `padEnd()` to pad a string to a specified length with a fill string from the start or end.

```javascript
console.log("5".padStart(3, "0")); // "005"
console.log("5".padEnd(3, "0")); // "500"
```

## 20. How do you reverse a string in JavaScript?
**Answer:** You can reverse a string by splitting it into an array, reversing the array, and joining it back.

```javascript
const str = "Hello";
const reversed = str.split('').reverse().join('');
console.log(reversed); // "olleH"
```

## 21. How do you check if a string is a palindrome?
**Answer:** A palindrome reads the same forwards and backwards. You can check by comparing the string with its reverse.

```javascript
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
```

## 22. What is the difference between slice(), substring(), and substr()?
**Answer:** 
- `slice(start, end)`: Extracts from start to end (not including end), supports negative indices.
- `substring(start, end)`: Similar to slice, but swaps arguments if start > end and doesn't support negatives.
- `substr(start, length)`: Extracts from start with a specified length (deprecated in favor of slice/substring).

```javascript
const str = "Hello World";
console.log(str.slice(0, 5)); // "Hello"
console.log(str.substring(0, 5)); // "Hello"
console.log(str.substr(0, 5)); // "Hello"
```

## 23. How do you count the number of occurrences of a character in a string?
**Answer:** You can use a loop or regular expressions to count occurrences.

```javascript
function countOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) count++;
  }
  return count;
}
console.log(countOccurrences("hello", "l")); // 2
```

## 24. What are template literals and how do they differ from regular strings?
**Answer:** Template literals use backticks (`) and allow embedded expressions with ${}. They can span multiple lines and include interpolation.

```javascript
const name = "World";
const greeting = `Hello ${name}!`;
console.log(greeting); // "Hello World!"
```

## 25. How do you perform case-insensitive string comparison?
**Answer:** Convert both strings to the same case before comparing.

```javascript
const str1 = "Hello";
const str2 = "hello";
console.log(str1.toLowerCase() === str2.toLowerCase()); // true
```

## 26. How do you remove all whitespace from a string?
**Answer:** Use `replace()` with a regular expression to remove all spaces.

```javascript
const str = "  Hello   World  ";
const noSpaces = str.replace(/\s/g, '');
console.log(noSpaces); // "HelloWorld"
```

## 27. What is the search() method and how does it differ from indexOf()?
**Answer:** `search()` returns the index of the first match of a regular expression, or -1 if not found. Unlike `indexOf()`, it accepts regex.

```javascript
const str = "Hello World";
console.log(str.search(/o/)); // 4
console.log(str.indexOf("o")); // 4
```

## 28. How do you extract a substring using regular expressions?
**Answer:** Use the `match()` method to find matches based on a regex pattern.

```javascript
const str = "The price is $100";
const match = str.match(/\$(\d+)/);
console.log(match[1]); // "100"
```
