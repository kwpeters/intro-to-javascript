//
// Some helper methods that will be used in this interactive demo.
//

function appendLine(text) {
    $('#content').append(text + '<br>');
}


function appendHr() {
    $('#content').append('<hr>');
}

function clear() {
    $('#content').replaceWith('<div id="content"></div>');
}


function appendSection(heading) {
    $('#content').append('<h2 class="section">' + heading + '</h2>');
}

function appendExpression(expression) {
    appendLine(expression + ' is ' + eval(expression));
}

function appendObject(name, theObject) {
    appendLine(name + ':');
    for (var key in theObject) {
        if (theObject.hasOwnProperty(key)) {
            $('#content').append('&nbsp;&nbsp;&nbsp;&nbsp;' + key + ': ' + theObject[key] + '<br>');
        }
        
    }
}
