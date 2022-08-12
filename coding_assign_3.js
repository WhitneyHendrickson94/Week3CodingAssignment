// Assignment Question 1. Array ages[]
var ages = [3, 9, 23, 64, 2, 8, 28, 93];

//Assignment Question 1a. Subtract first element of ages[] from last element
console.log(((ages[ages.length - 1]) - ages[0]));

//Assignment Questiom 1b. Add new age to ages[] and rerun the previous opertaion to adjust the difference.
ages.push(28);
console.log(((ages[ages.length - 1]) - ages[0]));

//Assignment Question 1c. Find the average of ages[] using a loop
var sum = 0;
for(var number of ages){
    sum += number;
}
average = sum / ages.length;

console.log(average);

//Assignment Question 2 - Create an names[] array
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//Assignment Question 2a. - Use loop to calculate average of letters per name in names[]
sumOfLetters = 0;

for (element of names) {
    element.length;
    sumOfLetters += element.length;
}
averageOfLetters = sumOfLetters / names.length;
console.log(averageOfLetters);

//Assignment Question 2b. - Concatenate all names from names[] together. 
let list = ' ';
for (i=0; i < names.length; i++){
    list = list.concat(names[i]);
    if(i < names.length - 1) { 
        list = list.concat(' ');
    }
}
console.log(list);

//Assignment Question 5 - Create nameLengths[] Array from using the length of names in names[]
nameLengths = names.map(function(element){
    return element.length;
});
console.log(nameLengths);

//Assignment Question 6 - Calculate the sum of all elements in nameLengths[] using a loop. 
sumOfLengths = 0;
for (number of nameLengths) {
    sumOfLengths += number;
}
console.log(sumOfLengths);

//Assignment Question 7 - Create a function that prints a chosen "word" "n" number of times in a row with no spaces
function repeatWord(word,n){
    console.log(word.repeat(n));
};
    //Demonstrating functionatlity of repeatWord Function
repeatWord("cat", 6);

//Assignment Question 8 - Creat a unction with that take parameters of firstName and lastName and prints them as "FirstName LastName". 
function printFullName(firstName,lastName){
    console.log (firstName + " " + lastName);
}
    //Demonstrating Functionality of printFullName
printFullName("Whitney","Hendrickson");

//Assignment Question 9 - Create a function to evaluate if the sum of an array of numbers is greater than 100 is true. 
//Array === 112 so should return "true"
var array1 = [18, 20, 25, 7, 23, 8, 11];
sumOfArray1 = 0;
function compareToOneHundred(){
for (var number of array1){
   sumOfArray1 += number;
}
console.log(sumOfArray1 > 100);
}
compareToOneHundred();

//Assignment Question 10 - Create a function that determine the average of an array of numbers. 
var array2 = [80, 74, 93, 98, 100, 73, 72, 88, 94, 95];
function findAverageOfArray2(){
    var sumOfArray2 = 0;
    for (var number of array2){
        sumOfArray2 += number;
    }
    averageOfArray2 = sumOfArray2 / array2.length;
    console.log(averageOfArray2);
}
findAverageOfArray2();

//Assignment Question 11 - Function that takes 2 arrays of Numbers and returns 'true' if average of first array is greater than average of 2nd array
var array3 = [8, 6, 5, 7, 9];
var array4 = [2, 4, 5, 0, 3];

function compareArrayAverage(){
    var sumOfArray3 = 0;
    var sumOfArray4 = 0;
    for(var number of array3){
        (sumOfArray3 += number);
    }
        averageOfArray3 = sumOfArray3 / array3.length;
    for(var number of array4){
        (sumOfArray4 += number);
    }
    averageOfArray4 = sumOfArray4 / array4.length;
        console.log(averageOfArray3 > averageOfArray4);
    }
compareArrayAverage();

//Assignment Question 12 - Determine whether willBuyDrink is true based on isHotOutside && moneyInPocket > $10.50
var isHotOutside = true;
var moneyInPocket = 2.50;
function willBuyDrink(isHotOutside,moneyInPocket){
    if((isHotOutside === true) && (moneyInPocket > 10.50)){
    console.log(true);
    }else{
        console.log(false);
    }
}
willBuyDrink();

//Assignment Question 13 - Custom Function
//Problem that Function will Solve: Determine if student has received their required amount of speech therapy minutes in a school year
//Functionality: Given the total minutes required for a student in a year and an array accumulating the total minutes a 
//child has received (adding minutes has they are serviced to a student) to date, the function will determine if required minutes are met
//and print out how many minutes are remaining for them to receive. 

//Set Variables - Total Student Required in a School for a student to reveive in speech therapy && array with current minutes to date
var totalMinutesRequired = 1400;
var currentMinutes = [20, 20, 20, 20, 20, 15, 10, 20];

//Create Function Label and Set Parameters
function determineRemainingMinutes(){
//Calculate the Sum of currentMinutes
var sumOfCurrentMinutes = 0;
for(var number of currentMinutes){
    (sumOfCurrentMinutes += number);
}
//Subtract sumOfCurrentMinutes from totalMinutesRequired to get totalMinutesRemaining
totalMinutesRemaining = (totalMinutesRequired - sumOfCurrentMinutes);

//Use conditional statements to determine an appropriate message given how many minutes are remaining.
//If there's more than 0 minutes, the childs needs to get more minutes of speech services
//If totalMinutesRemaining === 0, the child is done needing minutes
//If there is a negative number - the child has received more minutes than they needed.
if(totalMinutesRemaining > 0){
    console.log(totalMinutesRemaining + " more minutes are needed this year.");
}else if(totalMinutesRemaining === 0){
    console.log("They have met their yearly minutes!");
}
else{
    console.log("They received extra minutes!");
}
}
determineRemainingMinutes();

//Used determineReamainingMinutes function with a different totalMinutesRequired to adjust it 
//for a different student
var totalMinutesRequired = 1250;
var currentMinutes = [20, 20, 20, 20, 20, 15, 10, 20];
determineRemainingMinutes();

//Added more minutes to the amount of current minutes
currentMinutes.push(20,20,30);

//Changed totalMinutesRequired back to 1400 to change it to original student's amount, and
//determined new amount of minutes needed after adding more minutes above.
totalMinutesRequired = 1400;
determineRemainingMinutes();





 
