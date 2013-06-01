//
// Some helper methods that will be used in this interactive demo.
//

function log(text) {
    $('#content').append(text + '<br>');
}

function clear() {
    $('#content').replaceWith('<div id="content"></div>');
}


function createSection(heading) {
    $('#content').append('<h2 class="section">' + heading + '</h2>');
}

function logExpression(expression) {
    log(expression + ' is ' + eval(expression));
}

function logObject(name, theObject) {
    log(name + ':');
    for (var key in theObject) {
        if (theObject.hasOwnProperty(key)) {
            $('#content').append('&nbsp;&nbsp;&nbsp;&nbsp;' + key + ': ' + theObject[key] + '<br>');
        }
        
    }
}

function objToString(name, theObject) {
    var result = name + ':\n';
    for (var key in theObject) {
        if (theObject.hasOwnProperty(key)) {
            result = result + '    ' + key + ': ' + theObject[key] + '\n';
        }
    }

    return result;ß
}
