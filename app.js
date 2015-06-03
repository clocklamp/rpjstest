/*
 Rapid Prototyping with JS is a JavaScript and Node.js book that will teach you how to build mobile and web apps fast. — Read more at
 http://rapidprototypingwithjs.com.
 */

$(document).ready(function () {
    var parseApplicationId = "1WTHasp725LZCcxqYfqiDUTP3kZi0mNtJJmeMnjv";
    var parseJavaScriptKey = "4zhQdi7aBhVo2xuYwkZ3iP49UbdGxFWnSk7IFzB5";
    //change parseApplicationId and parseJavaScriptKey to values from Parse.com application dashboard
    Parse.initialize(parseApplicationId, parseJavaScriptKey);
    var Test = Parse.Object.extend("Test");
    var test = new Test();
    test.save({
        name: "Qingsheng",
        text: "Zhang"}, {
        success: function (object) {
            console.log("Parse.com object is saved: " + object);
            //alternatively you could use alert("Parse.com object is saved");
        },
        error: function (object) {
            console.log("Error! Parse.com object is not saved: " + object);
        }
    });
})