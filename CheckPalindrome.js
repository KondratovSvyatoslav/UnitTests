/**
 * Created with JetBrains WebStorm.
 * User: svjatoslav.kondratov
 * Date: 10/15/15
 * Time: 5:08 PM
 * To change this template use File | Settings | File Templates.
 */

//check if input strign is a palindrome
function checkPalindrom(str) {
//replace all non letter characters and move all to lowercase
    //  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    str = str.toLowerCase();
    //check if input string is not zero sized
    if (str.length !== 0)
    //return answer if input string is a palindrome
        return str === str.split('').reverse().join('');
    else return false;
}
//write answer on the page
function printAnswer(answer) {
    debugger;
    if(document.getElementById('results'))
    document.getElementById('results').innerHTML = "";
    if (answer.length > 0) {
        var paragraph = document.createElement("p");
        paragraph.className = "resultTextPositive";
        var text = document.createTextNode("Following palindromes found:");
        paragraph.appendChild(text);
        document.getElementById('results').appendChild(paragraph);
        for (var i = 0; i < answer.length; i++) {
            var paragraph = document.createElement("p");
            if (i === 0)
                paragraph.className = "highlight";
            var text = document.createTextNode(answer[i]);
            paragraph.appendChild(text);
            document.getElementById('results').appendChild(paragraph);
        }
    }
    else {
        var paragraph = document.createElement("p");
        paragraph.className = "resultTextNegative";
        var text = document.createTextNode("There is no palindrome in entered string");
        paragraph.appendChild(text);
        document.getElementById('results').appendChild(paragraph);
    }
}
//create array of phrases from input string
function getMessageArray(string) {
    var messageArray = [];
    for (var i = 0; i < string.length; i++) {
        for (var j = 2; j <= string.length - i; j++) {
            messageArray.push(string.substr(i, j));
        }
    }
    return messageArray;
}
//find and sort palindrome from messageArray given
function findPalindrome(messageArray,callback) {
    var palindromeArray = [];
    for (var i = 0; i < messageArray.length; i++) {
        if (callback(messageArray[i]))
            palindromeArray.push(messageArray[i]);
    }
    palindromeArray=palindromeArray.sort(function(a, b){
        return b.length - a.length;
    });
    return palindromeArray;
}

