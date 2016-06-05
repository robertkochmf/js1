/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc..
 * and the variables printed to the console.
 * (i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of image source filenames.
 * Use "image1.png", "image2.png", and "image3.png" as the array values.
 */

var imageFileName = ["image1.png", "image2.png" ,"image3.png"]
console.log(imageFileName)

/**
 * Question 2
 * Using the array from Question 1, store the first element of the array
 * in variable q2.
 */

var q2 = imageFileName[0]
console.log(q2)

/**
 * Question 3
 * Get the length of the first array (number of elements in the array)
 * and store it in variable q3
 */

var q3 = imageFileName.length
console.log(q3)

/**
 * Question 4
 * Using the array from Question 1, store the last element of the array
 * in variable q4. Hint: How can we get the number of elements in the array?
 */

var q4 = imageFileName[q3-1]
console.log(q4)


// ____________________________________________________________________________

/**
 * Arrays + Iteration
 */

/**
 * Question 5
 * Create an array of numbers using 1, 2, 3, and 4 as values.
 * Use a for loop, a forEach function or a map function to increase
 * each value by 1. You can either store each new value back in the original
 * array, or in a new array -- your choice. The end result should be
 * an array of numbers with values 2, 3, 4, and 5.
 */

var numbers = [1,2,3,4]
var newNumbers = []
console.log(numbers)
numbers.forEach(function(number){
  newNumbers.push(number+1)
})
console.log(newNumbers)


/**
 * Question 6
 * Using the array from Question 5, find the average of the numbers in the array
 * (average = sum of all numbers/number of numbers). Store the average in q6.
 */

var numbersTotal = 0
 numbers.forEach(function(number){
   numbersTotal += number
 })
console.log(numbersTotal)
var average = numbersTotal/numbers.length
console.log(average)

/**
 * Question 7
 * List out the ratings that each age in the ages is allowed to watch.
 */

var ages = [1, 23, 8, 12, 16]
var ratings = ['G', 'PG', 'M', 'MA']
var minAgeForRating = [0, 9, 12, 15]
