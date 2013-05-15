// JavaScript has a much maligned past.
//
//     - There were some mistakes made during its initial design that
//       have been carried forward in the name of backward compatibility.
//
//     - Its initial use was not for hard-core programming.
//         - It was often used to do hover effects on web pages and not much
//           more
//         - It got unfairly "type casted"
//         - Initially, performance was not that good
//
//     - Fortunately, companies such as Google, Yahoo, 37 Signals, etc. kept
//       pushing the envelope
//         - This is when the browser wars began
//         - Microsoft's non-conformance became a big problem
//         - As a result, performance is incredible today
//             - 100x perf increase from 2001 to 2009
//             - faster than Java, Python and PHP
//
//     - Developers wanted to start using it outside the browser
//         - Tired of using one language in the browser and another on the
//           server (Perl, PHP, Python, Ruby (Rails)).
//         - Node.js project
//             - Took Google's V8 JavaScript engine
//             - But this alone is not that useful
//             - Need something like the C standard library
//             - Married with libuv (asynchronous, high perf, non-blocking I/O)
//             - Node.js is like perl.exe, ruby.exe, python.exe
//             - Also includes a package manager to keep 3rd-party libraries
//               up to date
//                 - RubyGems (Ruby)
//                 - Nuget (.NET)
//         - Now developers can use JavaScript both in browser and in server
//             - Popular Express package for writing web servers
//
// Disclaimer:
//
// *  You are about to be introduced to a programming language with many bad
//    parts.
//        - You will hear many admitions of mistakes
//        - It's best to get these out in the open
//
// *  Try as hard as you can to not dismiss it, because
//        - its good parts are really good (they come towards the end)
//        - it is getting better very quickly
//        - it has an enormous community behind it
//        - It is available on every platform

//------------------------------------------------------------------------------
// 9:53
// He meant to say that Microsoft copied the design mistakes, not Sun
// Microsystems.


//------------------------------------------------------------------------------
// 10:51
// Key ideas:
//     * Load and go delivery (as text)
//     * Loose typing
//     * Objects as general containers
//     * Prototypal inheritance
//     * Lambda
//     * Linkage through global variables

//------------------------------------------------------------------------------
// 15:25
clear();
createSection('NaN');

log('NaN is the result of invalid operations:');
logExpression('0/0');

log('NaN is toxic:');
logExpression('(NaN + 5) * 2 + 14');

log('NaN is not equal to anyting, including NaN:');
logExpression('Boolean(NaN === 5)');
logExpression('Boolean(NaN === NaN)');
logExpression('Boolean(NaN == NaN)');

// The type of NaN is number.
log('The type of NaN is "number":');
logExpression('typeof NaN');


//------------------------------------------------------------------------------
// 16:39
clear();
createSection('Number()');

log('Number() can be used to convert a string into a number:');
logExpression('Number("100")');

log('Number() returns NaN if it has a problem:');
logExpression('Number("Hello")');

log('ParseInt() is similar, but also allows you to specify a radix:');
createSection('parseInt(value, radix)');
logExpression('parseInt("08")');
logExpression('parseInt("20", 16)');
logExpression('parseInt("0x20", 16)');

//------------------------------------------------------------------------------
// 17:12
clear();
createSection('Math Object');

logExpression('Math.abs(+10)');
logExpression('Math.abs(-10)');
logExpression('Math.floor(1)');
logExpression('Math.floor(1.8)');
logExpression('Math.max(1.1, 2.2, 3.3, 4.4, 5.5)');
logExpression('Math.random()');
logExpression('Math.round(1.4)');
logExpression('Math.round(1.5)');


//------------------------------------------------------------------------------
// 20:33
clear();
createSection('undefined');

log('undefined means "what you are asking for does not exist."');

log('undefined is the default value of uninitialized variables:');
var myUndefined;
log(myUndefined);

log('myUndefined is now set to 5:');
myUndefined = 5;
log(myUndefined);

log('myUndefined is now set back to undefined (debatable whether this should be allowed):');
myUndefined = undefined;
log(myUndefined);

createSection('null');

log('null means "what you are asking for exists, but has no value."');
var value = null;
log(value);
value = 5;
log(value);
value = null;
log(value);

//------------------------------------------------------------------------------
// 20:11
clear();
createSection('Falsy Values');
logExpression('Boolean(false)');
logExpression('Boolean(null)');
logExpression('Boolean(undefined)');
logExpression('Boolean("")');
logExpression('Boolean(0)');
logExpression('Boolean(NaN)');

createSection('Truthy Values');
logExpression('Boolean("false")');
logExpression('Boolean("0")');


//------------------------------------------------------------------------------
// 22:55
clear();
createSection('Objects are Hashtables/Maps/Dictionaries!!!');
log('(Objects are nothing more than containers of name-value pairs!)');

// Note this object literal syntax:
//     - wrapped in {}
//     - keys can be identifiers or strings (can contain spaces)
//     - : separates names and their values
//     - , separates pairs
var fred = {
    firstName:  'Fred',
    lastName:   'Flintstone'
};

log('Values can be retrieved using subscript syntax or object "dot" notation:');
log('fred["firstName"] = ' + fred["firstName"]);
log('fred["lastName"] = ' + fred["lastName"]);
log('fred.firstName = ' + fred.firstName);
log('fred.lastName = ' + fred.lastName);
log('The only time you must use subscript notation is when the key string contains a space.');

// This is an empty object.
var emptyObj = {};


//------------------------------------------------------------------------------
// 23:26
clear();
createSection('Loosley Typed');

// There is no type associated with variables, parameters or return values.
// Note:  This kind of operator overloading in a loosely typed language is a
//        mistake.  You would not write anything like this in practice.
function plusOperator(a, b) {
    return a + b;
}

log('plusOperator("Fred", "Flintstone") = ' + plusOperator("Fred ", "Flintstone"));
log('plusOperator(2, 3) = ' + plusOperator(2, 3));


//------------------------------------------------------------------------------
// 28:20
clear();
createSection('Equality Operators');

log('== coerces to the same type then compares the values:');
logExpression('5 == 5');
logExpression('"5" == 5');

log('=== compares both the type (without coercion) and value:');
logExpression('5 === 5');
logExpression('"5" === 5');

log('Just use === and !==.');


//------------------------------------------------------------------------------
// 42:00
clear();
createSection('"Maker" Functions');

// An example of a "maker" function.
function makePerson(firstName, lastName) {

    // Create an empty object.
    var thePerson = {};

    // Augment the object with its properties.
    thePerson.firstName = firstName;
    thePerson.lastName = lastName;

    return thePerson;
}

// Now, create some objects.
var fred = makePerson('Fred', 'Flintstone');
var barney = makePerson('Barney', 'Rubble');


//------------------------------------------------------------------------------
// 45:20
clear();
createSection('Object Augmentation');

var barney = {
    firstName: 'Barney',
    lastName:  'Rubble'
};
logObject('barney', barney);

// When you need more properties, there is no need to create another class.
// Just add the property to the hashtable!!!
barney.pet = 'Hoppy the hopparoo';
logObject('barney', barney);

createSection('Property Deletion');

delete barney.lastName;
logObject('barney', barney);


//------------------------------------------------------------------------------
// 47:43
clear();
createSection('Linkage/Prototypal Inheritance');

var base = {
    myInteger: 1,    
};

var derived = Object.create(base);
logObject('base', base);
logObject('derived', derived);


// When you ask derived for the myInteger property, it will not be found in
// derived, so it will follow the "secret link" to its prototype (base).  It
// will find a property named myInteger in base.  This is called "following
// the prototype chain."
log(derived.myInteger);

// The prototype chain does not come into play at all when assigning to
// properties.  The object referenced receives the property.
derived.myInteger = 17;
log(derived.myInteger);
log(base.myInteger);
logObject('base', base);
logObject('derived', derived);


//------------------------------------------------------------------------------
// 54:02
createSection('Property Deletion');

// Remove the myInteger property in derived.
delete derived.myInteger;
logObject('derived', derived);

// Now, when the myInteger property is asked for we will once again follow the
// prototype chain and find it in base.
log(derived.myInteger);


//------------------------------------------------------------------------------
// 1:07:45
clear();
createSection('Functions are Objects');

// Functions are objects.
// This means that...

// 1.  Functions can be used as values.
var speak = function () {
    return 'yabba dabba doo!';
};
log(speak());

// Because functions are values, they can be used anywhere a normal value
// can be used.  For example, they can be passed as a parameter to another
// function...
var doSomething = function(action) {
    var result = action();
    return result;
};
log(doSomething(speak));

// 2.  Functions are also containers of name/value pairs.
speak.priority = 5;
logObject('speak', speak);
log(speak());

// Scope:
// Functions can be nested.
// An inner function has access to the variables and parameters of
// functions that it is contained within.
// Closure:  When an inner function holds references to variables in an outer
// scope, that outer scope will continue to exist as long as it is referenced
// by the inner scope.

var ignition = {
    turnOn:  function () {log('Ignition on.' );},
    turnOff: function () {log('Ignition off.');}
};

var changeOil = function(ignition) {

    // Will close over the ignition variable in outer scope.    
    var stopEngine = function () {
        ignition.turnOff();
    };
    
    // Will close over the ignition variable in outer scope.
    var startEngine = function () {
        ignition.turnOn();
    };
    
    stopEngine();
    log('Changing the oil... Done.');
    startEngine();

};

changeOil(ignition);

//------------------------------------------------------------------------------
// 1:10:48
clear();
createSection('Method and Function Forms of Invocation');

function makeSiren(volume) {
    var theSiren = {};
    theSiren.volume = volume;
    theSiren.goOff = function () {
        if (this.volume < 33) {
            log('beep, beep, beep!');
        }
        else if (this.volume < 66) {
            log('honk, honk, honk!');
        }
        else {
            log('ahoooooga, ahooooooga, ahooooooga!');
        }
    };
    
    return theSiren;
}

var low  = makeSiren(15);
var med  = makeSiren(50);
var high = makeSiren(90);

// This is the method form of invocation.
// The "this" parameter is implied to be the object to the left of the . operator.
low.goOff();
med.goOff();
high.goOff();

// In the function form, "this" is bound to the global object, which is of no use.
// So you must create a closure around a local variable to get access to "this."
function makeSiren(volume) {
    var theSiren = {};
    theSiren.volume = volume;
    theSiren.goOff = function () {
        
        var self = this;
    
        // A nested helper function that closes over "self" in outer scope.
        // Some call this variable "that."
        var goOffImpl = function () {
            var sound;            
            if (self.volume < 33)      {sound = 'beep';}
            else if (self.volume < 66) {sound = 'honk';}
            else                       {sound = 'ahoooooga';}
        
            log(sound + ', ' + sound + ', ' + sound);
        };
    
        goOffImpl();
    };
    
    return theSiren;
}

var low  = makeSiren(15);
var med  = makeSiren(50);
var high = makeSiren(90);
low.goOff();
med.goOff();
high.goOff();


//------------------------------------------------------------------------------
// 1:10:48
clear();
createSection('Constructor Invocation');


var Animal = (function () {
    function Animal() {

        // Data members
        // todo:  Define data members.
        // this.name = 'Kevin';
    }

    // todo: If needed, set the prototype object.
    // Animal.prototype = myPrototype;

    // Member functions
    // todo:  Define methods.
    // Animal.prototype.myMethod = function () { };

    return Animal;
})();
