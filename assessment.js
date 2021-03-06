
// #1 Create a variable called hello and assign it the string 'goodbye'
var hello = 'goodbye';


// #2 Use the variable iLove to create a new variable called iLoveCode that is assigned the string "I love code"
var iLove = 'I love';
var iLoveCode = iLove +' code';
// #3  Make an object called bob and give it the following properties
// bob has a height of 6ft (string)
// bob has an age of 24 (Number)
// bob has hair, that has style spikey, and color brown (object)
// bob is not presidentOfTheUnitedStates (boolean)
// bob likes apples, bananas, and cherries (array of strings)
var bob = {
    height: '6ft',
    age: 24,
    hair: {style: 'spikey', color: 'brown'},
    presidentOfTheUnitedStates: false,
    likes: ['apples', 'bananas', 'cherries']
}

// #4 Change my shirt color to pink using dot notation
var myShirt = {
	type: 'polo',
	color: 'red'
};
myShirt.color = 'pink';

// Change my shirt type to spandex using square bracket notation
var myOtherShirt = {
	type: 'polo',
	color: 'red'
};
myOtherShirt['type'] = 'spandex';

// #5 Create an object that tracks a count of animals in a zoo.  Call it 'zoo'
// The key should be the animal name(string) and the value should be how many there are.
// Our zoo has 8 monkeys, 4 giraffes and 2 elephants

var zoo = {
  "monkeys": 8,
  "giraffes": 4,
  "elephants": 2
}

// #6 Loop through this object and change all keys that start with the letter s to have a value of 's'

//var snake = {
//	sliters: 'sideways',
//	eats: 'rodents',
//	says: 'ssss',
//	smells: 'heat',
//	runs: 'legless'
//};
//
//for(var key in snake){
//  if(snake[key].charAt(0) === 's'){
//    snake[key] = 's';
//  }
//  
//}
var snake = {
	sliters: 'sideways',
	eats: 'rodents',
	says: 'ssss',
	smells: 'heat',
	runs: 'legless'
};

for(var key in snake){
  if(snake[key].charAt(0) === 's'){
    snake[key] = 's';
  }
  if(snake[key].charAt(0) === 'h'){
    snake[key] = 's';
  }
}

//#7 Create an array of strings that are the 7 primary colors in the rainbow - red, orange, yellow, green, blue, indigo, violet (lower-case). Call your array rainbowColors
var rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// #8 Using this array do the following
var heroes = ['superman', 'batman', 'flash'];
// add 'wonderwoman' to the end
heroes.push('wonderwoman');
// remove 'superman' and store him in a variable called firstHero
firstHero = heroes.slice(0,1)[0];
// add 'spongebob' to the start of the array
heroes.unshift('spongebob');
// remove 'flash' from the array and store him in a variable called secondHero
secondHero = heroes.splice(3,1)[0];
// leave batman in the array but put a copy of him on a variable called thirdHero
var thirdHero = heroes[2];


// #9 Write a function called addItem that takes in an array, an item, and adds the item to
// the array.
var addItem = function(arr, item){
  arr.push(item);
  return arr;
}
// #10 Write a function called removeItem that takes in an array of strings, and a string.

// Removes all instances of that string from the array. And return the modified array.
// The order of the array should not be changed
var removeItem = function(arr,str){
  var answer = [];
  for(var x = 0; x<arr.length; x++){
    if(arr[x] !== str){
      answer.push(arr[x]);
    }
  }return answer;
}

// #11 Write a function  called doubleTheFun that takes 1 parameter. It should double numbers, and
// repeats strings. example 4->8, 2.5->5, 'Awesome'->'AwesomeAwesome'


function doubleTheFun(param) {
  
    if(parseInt(param)+6){
    return param * 2;
  }
  else{
    return param + param;
  }
}
// #12 Write function getValueOfProperty that takes in an object, and the name of a property on the object
// return the value from the object that corresponds to the property

var getValueOfProperty = function(obj, name){
      if(obj.hasOwnProperty(name)) {
          var value = obj[name];
      }
  return value;
}
// #13 Write a function called makeChatMessage that takes in a message and author as parameters
// and returns an object with a message, author, and timestamp, that is
// the current time as a Date object
var makeChatMessage = function(message, author){
    var date = new Date();
    var obj = {
    message: message,
    author: author,
    timestamp: date
    }
    return obj;
}


// #14 Create a function called coderTest that takes in an object that is a person. It looks to see if the person’s name is Jeremy and then changes the person object to have a property called lovesCode with a value of 10.  If their name is Brack set lovesCode to 0.  
function coderTest(person){
  if(person.name === 'Jeremy'){
    person.lovesCode = 10;
  }
  else if(person.name === 'Brack'){
    person.lovesCode = 0;
  }
  else{
    person.lovesCode = 5;
  }
    return person;
}

// #15 Create a function called outside that takes in a temperature (number), a humidity(number), and a cloudiness(number), in that order. Using the following to return the correct values
/*
    temperature over 80 and humidity over 40 - return "I'm all sweat"
    temperature under 40 and cloudiness over 60 - return "I have icecicles"
    temperature over 80 and humidity under 40 and cloudiness under 20 - return "I'm literally in the desert"
    temperature over 80 or humidity over 50 or cloudiness over 50 - return "Hmm, probably not"
    Otherwise - return "I love outside"
*/
var outside = function(temperature, humidity, cloudiness){
  if(temperature > 80 && humidity > 40){
    return "I'm all sweat";
  }
  if(temperature < 40 && cloudiness > 60){
    return "I have icecicles";
  }
  if(temperature > 80 && humidity < 40 && cloudiness < 20){
    return "I'm literally in the desert";
  }
  if(temperature > 80 || humidity > 50 || cloudiness > 50){
    return "Hmm, probably not";
  }
  else{
    return "I love outside";
  }
}


// #16 Create a function called callerBack that takes in a function (holla) and a string parameter(back) and invokes it(holla) with the argument string(back) + ' back'."
// example - If I call you with 'Give it' you should invoke holla with 'Give it back'

var callerBack = function(holla,back){
 return holla(back+ ' back');
}