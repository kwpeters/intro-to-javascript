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
appendSection('NaN');

appendLine('NaN is the result of invalid operations:');
appendExpression('0/0');

appendLine('NaN is toxic:');
appendExpression('(NaN + 5) * 2 + 14');

appendLine('NaN is not equal to anyting, including NaN:');
appendExpression('Boolean(NaN === 5)');
appendExpression('Boolean(NaN === NaN)');
appendExpression('Boolean(NaN == NaN)');

// The type of NaN is number.
appendLine('The type of NaN is "number":');
appendExpression('typeof NaN');


//------------------------------------------------------------------------------
// 16:39
clear();
appendSection('Number()');

appendLine('Number() can be used to convert a string into a number:');
appendExpression('Number("100")');

appendLine('Number() returns NaN if it has a problem:');
appendExpression('Number("Hello")');

appendLine('ParseInt() is similar, but also allows you to specify a radix:');
appendSection('parseInt(value, radix)');
appendExpression('parseInt("08")');
appendExpression('parseInt("20", 16)');
appendExpression('parseInt("0x20", 16)');

//------------------------------------------------------------------------------
// 17:12
clear();
appendSection('Math Object');

appendExpression('Math.abs(+10)');
appendExpression('Math.abs(-10)');
appendExpression('Math.floor(1)');
appendExpression('Math.floor(1.8)');
appendExpression('Math.max(1.1, 2.2, 3.3, 4.4, 5.5)');
appendExpression('Math.random()');
appendExpression('Math.round(1.4)');
appendExpression('Math.round(1.5)');


//------------------------------------------------------------------------------
// 20:33
clear();
appendSection('undefined');

appendLine('undefined means "what you are asking for does not exist."');

appendLine('undefined is the default value of uninitialized variables:');
var myUndefined;
appendLine(myUndefined);

appendLine('myUndefined is now set to 5:');
myUndefined = 5;
appendLine(myUndefined);

appendLine('myUndefined is now set back to undefined (debatable whether this should be allowed):');
myUndefined = undefined;
appendLine(myUndefined);

appendSection('null');

appendLine('null means "what you are asking for exists, but has no value."');
var value = null;
appendLine(value);
value = 5;
appendLine(value);
value = null;
appendLine(value);

//------------------------------------------------------------------------------
// 20:11
clear();
appendSection('Falsy Values');
appendExpression('Boolean(false)');
appendExpression('Boolean(null)');
appendExpression('Boolean(undefined)');
appendExpression('Boolean("")');
appendExpression('Boolean(0)');
appendExpression('Boolean(NaN)');

appendSection('Truthy Values');
appendExpression('Boolean("false")');
appendExpression('Boolean("0")');


//------------------------------------------------------------------------------
// 22:55
clear();
appendSection('Objects are Hashtables');

// Note this object literal syntax:
//     - wrapped in {}
//     - keys can be identifiers or strings (can contain spaces)
//     - : separates names and their values
//     - , separates pairs
var fred = {
    firstName:  'Fred',
    lastName:   'Flintstone'
};

appendLine('Values can be retrieved using subscript syntax or object "dot" notation:');
appendLine('fred["firstName"] = ' + fred["firstName"]);
appendLine('fred["lastName"] = ' + fred["lastName"]);
appendLine('fred.firstName = ' + fred.firstName);
appendLine('fred.lastName = ' + fred.lastName);


//------------------------------------------------------------------------------
// 23:26
clear();
appendSection('Loosley Typed');

// There is no type associated with the parameters or return value.
// Note:  This kind of operator overloading in a loosely typed language is a
//        mistake.  You would not write anything like this in practice.
function plusOperator(a, b) {
    return a + b;
}

appendLine('plusOperator("Fred", "Flintstone") = ' + plusOperator("Fred ", "Flintstone"));
appendLine('plusOperator(2, 3) = ' + plusOperator(2, 3));

//------------------------------------------------------------------------------
// 28:20
clear();
appendSection('Equality Operators');

appendLine('== coerces to the same type then compares the values:');
appendExpression('5 == 5');
appendExpression('"5" == 5');

appendLine('=== compares both the type (without coercion) and value:');
appendExpression('5 === 5');
appendExpression('"5" === 5');


//------------------------------------------------------------------------------
// 45:20
clear();
appendSection('Object Augmentation');

var barney = {
    firstName: 'Barney',
    lastName:  'Rubble'
};
appendObject('barney', barney);

// When you need more properties, there is no need to create another class.
// Just add the property to the hashtable!!!
barney.pet = 'Hoppy the hopparoo';
appendObject('barney', barney);

appendSection('Property Deletion');

delete barney.lastName;
appendObject('barney', barney);


//------------------------------------------------------------------------------
// xx:xx
clear();
appendSection('Linkage/Inheritance');
