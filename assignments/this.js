/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window - If you invoke a function that uses the 'this' keyword but doesn't follow any of the other principles, it automatically references the window object. 
* 2. Implicit - essentially means 'this' references whatever is left of the dot when the function is invoked. This is the most common use of 'this.' You replace the 'this' with the obj it references when you want to invoke.
* 3. Explicit - use of 'this' with the use of .call, .apply, or .bind -- These explicitly state what 'this' points to by putting the .this reference first as a parameter in an invocation.
* 4. New - when a function is invoked with the new keyword - the 'this' keyword is bound to that function. Can be used to make objects using the same template. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

var saySomething = function() {
    console.log(this.something);
}

saySomething();

// Principle 2

// code example for Implicit Binding

const breakEgg = function(obj) {
    obj.break = function () {
        console.log(this.action);
        };
    };

const brokenEgg = {
    action: "Smashed to pieces",
    taco: "Oh no"
};

breakEgg(brokenEgg);
brokenEgg.break();

// Principle 3

// code example for New Binding

const Animal = function(size, name, ecosystem){

    this.size = size;
    this.name = name;
    this.ecosystem = ecosystem;
};

const Zebra = new Animal("Large", "Zebra", "Safari");
console.log(Zebra);

// Principle 4

// code example for Explicit Binding

const sayaName = function(obj1) {
     console.log ("My name is " + this.name );
};

const Michael = {
    name: "Michael",
    sex: "Male"
};

sayaName.call(Michael);