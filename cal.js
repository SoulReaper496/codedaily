function processEntries() {
    var value = prompt("enter the value", "");
    makeChange(value);
}

function makeChange(total) {
    var backupValue = total;
    var tens = parseInt(total / 10);
    total = total % 10;
    var fives = parseInt(total / 5);
    total = total % 5;
    var twos = parseInt(total / 2);
    total = total % 2;
    var ones = parseInt(total / 1);
    var tenDiv = document.createElement("div");
    var newContent = document.createTextNode('10 x' + tens + ' times=' + tens * 10);
    tenDiv.appendChild(newContent);
    var currentDiv = document.getElementById("div");
    document.body.insertBefore(tenDiv, currentDiv);

    var newDiv = document.createElement("div");
    var newContent = document.createTextNode('5 x' + fives + ' times=' + fives * 5);
    newDiv.appendChild(newContent);
    currentDiv = document.getElementById("div");
    document.body.insertBefore(newDiv, currentDiv);

    newDiv = document.createElement("div");
    newContent = document.createTextNode('2 x' + twos + ' times=' + twos * 2);
    newDiv.appendChild(newContent);
    var currentDiv = document.getElementById("div");
    document.body.insertBefore(newDiv, currentDiv);

    newDiv = document.createElement("div");
    newContent = document.createTextNode('1 x' + ones + ' times=' + ones * 1);
    newDiv.appendChild(newContent);
    currentDiv = document.getElementById("div");
    document.body.insertBefore(newDiv, currentDiv);

    newDiv = document.createElement("div");
    newContent = document.createTextNode('totally' + parseInt(backupValue));
    newDiv.appendChild(newContent);
    currentDiv = document.getElementById("div");
    document.body.insertBefore(newDiv, currentDiv);
}

document.addEventListener('DOMContentLoaded', function() {
    processEntries();

}, false);