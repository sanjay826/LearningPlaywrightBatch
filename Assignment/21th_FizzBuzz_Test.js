/**
 *            FizzBuzz Test
 * Write a program that prints numbers from 1 to 100 . However for multiple of 3 print "Fizz" instead
 * of the number, and for multiple of 5 print "Buzz" for numbers that are multiple of both 3 and 5
 * print FizzBuzz
 *
 *
 */

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3) {
    console.log("Fizz");
  } else if (i % 5) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
