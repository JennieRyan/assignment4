//COMM644
//Assignment 4

/*====================================================================
Practice with JavaScript OOP Concepts (20 points)
Within a new web page, create the following applications. Remember to comment out every application once you’ve finished with that step. Be sure to place all of your JavaScript code within an external script file:
1.	Create a namespace called Animal. Then, define two sub classes from the namespace, one called Cat and another called Dog. 
2.	Abandon the use of namespaces and start over. Now, create two classes, one called Cat and another called Dog. The Cat class should be created using literal notation and the Dog class should be created using constructor notation.
3.	Create a new instance of the Dog class.
4.	Start over and now create a new class using constructor notation called Animal. When a new instance of the Animal class is created, the message “The Animal has been created” should be displayed in the console window.
5.	Now, change the above code so that it accepts a parameter and that value is what should be displayed in the console window. The message should be passed as an argument into the constructor at the moment that the Animal class is instantiated.
6.	Start over and now create a new class using constructor notation called Animal. Define five properties within your class including type, breed, color, height, and length. These properties will be set in the constructor so you’ll need to pass in parameters into the function’s constructor, set the properties, and then pass in the actual arguments during the object’s instantiation. 
7.	Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.
8.	Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.
9.	Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”
10.	Create your own String method called findWords() that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of times that word was found in the paragraph.
====================================================================*/

/*====================================================================
//STEP 1

var ANIMAL = ANIMAL || {};

ANIMAL.Dog = function () {
    "use strict";
};

ANIMAL.Cat = function () {
    "use strict";
};
====================================================================*/
/*====================================================================
// STEP 2

var Cat = {};

function Dog() {
    "use strict";
    this.breed = "Chihuahua";
}
====================================================================*/

/*====================================================================

//STEP 3

var Cat = {};

function Dog() {
    "use strict";
    this.breed = "Chihuahua";
}
var Dog = new Dog();
====================================================================*/

/*====================================================================
//STEP 4
function Animal() {
    "use strict";
    window.console.log("The Animal has been created");
}
var Animal = new Animal();

====================================================================*/

/*====================================================================
//5.	Now, change the above code so that it accepts a parameter and that value is what should be displayed in the console window. The message should be passed as an argument into the constructor at the moment that the Animal class is instantiated.

function Animal(breed) {
    "use strict";
    this.breed = breed;
    window.console.log("The Animal has been created and it is a " + this.breed);
}
var Animal = new Animal("Chihuahua");
====================================================================*/

/*====================================================================
//STEP 6 
function Animal(type, breed, color, height, length) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
    window.console.log("The " + this.type + " has been created and it is a " + this.breed  + ". It's color is " + this.color + ". It's height is "  + this.height + " inches, and it's length is " + this.length + "inches.");
}
var Animal = new Animal("dog", "Chihuahua", "brown", "6", "10");

====================================================================*/

/*====================================================================

//STEP 7

function Animal(type, breed, color, height, length) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
}
var dog = new Animal();
for (traits in dog) {
    window.console.log(traits);
}
====================================================================*/
/*====================================================================

//STEP 8
function Animal(type, breed, color, height, length) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
    this.speak = function () {
        if (this.type === "cat") {
            return "The " + this.color + " cat is meowing!";
        } else if (this.type === "dog") {
            return "The " + this.color + " dog is barking!";
        } else {
            return "";
        }
    };
}

var cat = new Animal("cat", "tabby", "orange", "4\" in", "7\" in");
window.console.log(cat.speak());

var dog = new Animal("dog", "pit bull", "grey", "20\" in", "36\" in");
window.console.log(dog.speak());

====================================================================*/
//STEP 9
/*====================================================================

function Animal(type, breed, color, height, length) {
    "use strict";
    var type = type;
    var breed = breed;
    var color = color;
    var height = height;
    var length = length;
    var checkType = function () {
        if (type === "dog") {
            return 'dog';
        } else {
            return 'cat';
        }
    };
    this.speak = function () {
        return checkType();
    };
}


var cat = new Animal("cat", "tabby", "orange", "4\" in", "7\" in");

var dog = new Animal("dog", "pit bull", "grey", "20\" in", "36\" in");

window.console.log("The " + cat.speak() + " has made a noise!");
window.console.log("The " + dog.speak() + " has made a noise!");

====================================================================*/

/*====================================================================
=====================================Create your own String method called findWords() that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of times that word was found in the paragraph.


var i;
String.prototype.piper = function () {
    "use strict";
    var wordsArray = '';
	for (i = 0; i < this.length; i++) {
		wordsArray = this.match(/piper/gi);
	}
	return wordsArray.length;
};
var paragraph = 'Peter Piper picked a peck of pickled peppers<br />A peck of pickled peppers Peter Piper picked<br />If Peter Piper picked a peck of pickled peppers<br />Where’s the peck of pickled peppers Peter Piper picked<br />';
window.console.log(paragraph.piper());

====================================================================*/

/*====================================================================
//The Recipe Card (15 points)	


function Recipe(title, servings, ingredients) {
    "use strict";
    var title = title;
    var servings = servings;
    var ingredients = ingredients;
    var i;
    this.recipeList = function () {
        window.console.log(title + "\nServes: " + servings + "\nIngredients: ");
        for (i = 0; i < ingredients.length; i++) {
			window.console.log("- " + ingredients[i]);
        }
    };
}
var guacamole = new Recipe("Guacamole", 4, ["3 Avocados", "1 Lime", "1 Teaspoon Salt", "1/2 Cup Onion", "3 Tablespoons Cilantro", "2 Diced Tomatoes", "1 Teaspoon Garlic", "1 Pinch Ground Pepper"]);
guacamole.recipeList();
====================================================================*/

/*====================================================================
//The Reading List (15 points)


var Book = function (title, author, alreadyRead) {
    "use strict";
    this.title = title;
    this.author = author;
    this.alreadyRead = alreadyRead;
    this.log = function () {
        window.console.log('"' + this.title + '" by "' + this.author + '"');
    };
};
var book1 = new Book("Peaky Blinders", "Stephen Knight", false);
var book2 = new Book("The Dark Tower", "Stephen King", true);
var book3 = new Book("HTML & CSS", "Jon Duckett", false);
var book4 = new Book("Javascript", "Jon Duckett", false);
var book5 = new Book("Harry Potter", "J.K. Rowling", true);
var bookCollection = [book1, book2, book3, book4, book5];
var i;
for (i in bookCollection) {
    if (bookCollection[i].alreadyRead === true) {
        window.console.log('You\'ve already read "' + bookCollection[i].title + '" by ' + bookCollection[i].author);
    } else if (bookCollection[i].alreadyRead === false) {
        window.console.log('You still need to read "' + bookCollection[i].title + '" by ' + bookCollection[i].author);
    }
}

====================================================================*/
