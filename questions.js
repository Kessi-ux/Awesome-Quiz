//creating an array and passing the number, questions, options, and answers
let questions = [
        {
          "numb": 1,
          "question": "How do you call a function named 'myFunction'?",
          "answer": "myFunction()",
          "options": ["call function myFunction()", "call myFunction()", "myFunction()", "Call.myFunction()"]
        }
         ,
          {
            "numb": 2,
            "question": "Inside which HTML element do we put the JavaScript?",
            "answer": "<script>",
            "options": ["<javascript>", "<script>", "<js>", "<code>"]
          },
          {
            "numb": 3,
            "question": "How do you create a function in JavaScript?",
            "answer": "function myFunction()",
            "options": ["function myFunction()", "function:myFunction()", "function = myFunction()", "myFunction()"]
          },
          {
            "numb": 4,
            "question": "What is the correct syntax for referring to an external script called 'script.js'?",
            "answer": "<script src='script.js'>",
            "options": [
                      "<script src='script.js'>", 
                      "<script href='script.js'>", 
                      "<script ref='script.js'>", 
                      "<script name='script.js'>"
            ]
          },
          {
            "numb": 5,
            "question": "How to write an IF statement in JavaScript?",
            "answer": "if (i == 5)",
            "options": ["if i = 5 then", "if i == 5 then", "if (i == 5)", "if i = 5"]
          },
          {
            "numb": 6,
            "question": "How does a WHILE loop start?",
            "answer": "while (i <= 10)",
            "options": ["while (i <= 10; i++)", "while (i <= 10)", "while i = 1 to 10", "while (i++ <= 10)"]
          },
          {
            "numb": 7,
            "question": "How does a FOR loop start?",
            "answer": "for (i = 0; i <= 5; i++)",
            "options": ["for i = 1 to 5", "for (i = 0; i <= 5)", "for (i = 0; i <= 5; i++)", "for (i <= 5; i++)"]
          },
          {
            "numb": 8,
            "question": "How can you add a comment in JavaScript?",
            "answer": "// This is a comment",
            "options": ["<!-- This is a comment -->", "// This is a comment", "' This is a comment", "/* This is a comment */"]
          },
          {
            "numb": 9,
            "question": "What is the correct way to write a JavaScript array?",
            "answer": "var colors = ['red', 'green', 'blue']",
            "options": ["var colors = (1:'red', 2:'green', 3:'blue')", "var colors = ['red', 'green', 'blue']", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", "var colors = 'red', 'green', 'blue'"]
          },
          {
            "numb": 10,
            "question": "How do you find the number with the highest value of x and y?",
            "answer": "Math.max(x, y)",
            "options": ["ceil(x, y)", "Math.max(x, y)", "Math.ceil(x, y)", "top(x, y)"]
          },
          {
            "numb": 11,
            "question": "What is the correct way to write a JavaScript object?",
            "answer": "var person = {firstName: 'John', lastName: 'Doe'}",
            "options": ["var person = {firstName: 'John', lastName: 'Doe'}", "var person = (firstName: 'John', lastName: 'Doe')", "var person = 'firstName: 'John', lastName: 'Doe''", "var person = {firstName = 'John', lastName = 'Doe'}"]
          },
          {
            "numb": 12,
            "question": "Which operator is used to assign a value to a variable?",
            "answer": "=",
            "options": ["*", "x", "=", "-"]
          },
          {
            "numb": 13,
            "question": "What is the output of: console.log(typeof [])?",
            "answer": "object",
            "options": ["array", "object", "null", "undefined"]
          },
          {
            "numb": 14,
            "question": "What will the following code return: Boolean(10 > 9)?",
            "answer": "true",
            "options": ["true", "false", "NaN", "undefined"]
          },
          {
            "numb": 15,
            "question": "Which JavaScript method is used to access an HTML element by id?",
            "answer": "getElementById()",
            "options": ["getElementById()", "getElement(id)", "getElementByClass()", "getElementByName()"]
          },
          {
            "numb": 16,
            "question": "Which method is used to add an element at the end of an array?",
            "answer": "push()",
            "options": ["pop()", "push()", "shift()", "unshift()"]
          },
          {
            "numb": 17,
            "question": "How do you round the number 7.25 to the nearest integer?",
            "answer": "Math.round(7.25)",
            "options": ["Math.round(7.25)", "Math.rnd(7.25)", "Math.roundup(7.25)", "Math.ceil(7.25)"]
          },
          {
            "numb": 18,
            "question": "How do you declare a JavaScript variable?",
            "answer": "var carName;",
            "options": ["v carName;", "variable carName;", "var carName;", "carName = var;"]
          },
          {
            "numb": 19,
            "question": "Which event occurs when the user clicks on an HTML element?",
            "answer": "onclick",
            "options": ["onmouseclick", "onmouseover", "onchange", "onclick"]
          },
          {
            "numb": 20,
            "question": "Which operator is used to compare two values?",
            "answer": "==",
            "options": ["==", "=", "<>", "==="]
          },
          {
            "numb": 21,
            "question": "How do you write a conditional statement for executing some statements only if 'i' is equal to 5?",
            "answer": "if (i == 5)",
            "options": ["if i == 5 then", "if i = 5 then", "if (i == 5)", "if (i = 5)"]
          },
          {
            "numb": 22,
            "question": "How does a function return a value?",
            "answer": "return",
            "options": ["send", "return", "give", "None of the above"]
          },
          {
            "numb": 23,
            "question": "What is the correct way to write a string in JavaScript?",
            "answer": "'Hello World!'",
            "options": ["'Hello World!'", "Hello World!", "'Hello World!", "Hello 'World!'"]
          },
          {
            "numb": 24,
            "question": "Which of the following is NOT a JavaScript data type?",
            "answer": "float",
            "options": ["number", "string", "boolean", "float"]
          },
          {
            "numb": 25,
            "question": "How can you detect the client's browser name?",
            "answer": "navigator.appName",
            "options": ["client.navName", "browser.name", "navigator.appName", "browser.appName"]
          },
          {
            "numb": 26,
            "question": "Which method can be used to concatenate two arrays?",
            "answer": "concat()",
            "options": ["concat()", "combine()", "append()", "join()"]
          },
          {
            "numb": 27,
            "question": "Which method is used to remove the last element of an array?",
            "answer": "pop()",
            "options": ["pop()", "shift()", "remove()", "splice()"]
          },
          {
            "numb": 28,
            "question": "How can you create an array in JavaScript?",
            "answer": "var colors = ['red', 'green', 'blue']",
            "options": ["var colors = 'red', 'green', 'blue'", "var colors = (red, green, blue)", "var colors = ['red', 'green', 'blue']", "var colors = {red, green, blue}"]
          },
          {
            "numb": 29,
            "question": "Which method is used to remove the first element of an array?",
            "answer": "shift()",
            "options": ["shift()", "pop()", "remove()", "splice()"]
          },
          {
            "numb": 30,
            "question": "What does NaN stand for in JavaScript?",
            "answer": "Not-a-Number",
            "options": ["Not-a-Number", "Not-a-Null", "Number-as-Null", "Null-as-Number"]
          },
          {
            "numb": 31,
            "question": "Which method can be used to convert a string to lowercase letters?",
            "answer": "toLowerCase()",
            "options": ["lowercase()", "toLowerCase()", "toLower()", "lower()"]
          },
          {
            "numb": 32,
            "question": "Which method can be used to find the length of a string?",
            "answer": "length",
            "options": ["length", "size", "count", "index"]
          },
          {
            "numb": 33,
            "question": "How can you create a new object in JavaScript?",
            "answer": "var obj = new Object();",
            "options": ["var obj = new Object();", "var obj = new object();", "var obj = Object();", "var obj = new()"]
          },
          {
            "numb": 34,
            "question": "Which method is used to convert a JSON string into a JavaScript object?",
            "answer": "JSON.parse()",
            "options": ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.objectify()"]
          },
          {
            "numb": 35,
            "question": "Which keyword is used to define a variable in JavaScript?",
            "answer": "var",
            "options": ["let", "var", "const", "define"]
          },
          {
            "numb": 36,
            "question": "Which keyword is used to declare a constant in JavaScript?",
            "answer": "const",
            "options": ["var", "let", "constant", "const"]
          },
          {
            "numb": 37,
            "question": "Which method can be used to convert an object to a JSON string?",
            "answer": "JSON.stringify()",
            "options": ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.toString()"]
          },
          {
            "numb": 38,
            "question": "How do you write a JavaScript loop that runs while i is less than 10?",
            "answer": "while (i < 10)",
            "options": ["while (i < 10)", "while i < 10", "while i = 10", "while i <= 10"]
          },
          {
            "numb": 39,
            "question": "Which method can be used to add an element to the beginning of an array?",
            "answer": "unshift()",
            "options": ["unshift()", "shift()", "push()", "pop()"]
          },
          {
            "numb": 40,
            "question": "Which of the following is a ternary operator?",
            "answer": "?:",
            "options": ["?:", "??", "::", "??:"]
          },
          {
            "numb": 41,
            "question": "What does the 'this' keyword refer to in JavaScript?",
            "answer": "The current object",
            "options": ["The global object", "The current function", "The current object", "The DOM"]
          },
          {
            "numb": 42,
            "question": "Which method is used to stop an interval timer in JavaScript?",
            "answer": "clearInterval()",
            "options": ["clearInterval()", "clearTimer()", "stopInterval()", "clear()"]
          },
          {
            "numb": 43,
            "question": "Which of the following methods can be used to combine two or more arrays?",
            "answer": "concat()",
            "options": ["concat()", "join()", "merge()", "append()"]
          },
          {
            "numb": 44,
            "question": "Which of the following is NOT a JavaScript reserved word?",
            "answer": "undefined",
            "options": ["interface", "throws", "program", "undefined"]
          },
          {
            "numb": 45,
            "question": "Which of the following will write 'Hello World!' in an alert box?",
            "answer": "alert('Hello World!');",
            "options": ["alertBox('Hello World!');", "msg('Hello World!');", "msgBox('Hello World!');", "alert('Hello World!');"]
          },
          {
            "numb": 46,
            "question": "What will the following code output: console.log('1' + 1)?",
            "answer": "11",
            "options": ["2", "11", "NaN", "Error"]
          },
          {
            "numb": 47,
            "question": "Which keyword is used to check whether a given property is valid or not?",
            "answer": "in",
            "options": ["in", "is in", "exists", "exists in"]
          },
          {
            "numb": 48,
            "question": "Which of the following is the correct syntax for adding comments in JavaScript?",
            "answer": "// This is a comment",
            "options": ["<!-- This is a comment -->", "// This is a comment", "' This is a comment", "/* This is a comment */"]
          },
          {
            "numb": 49,
            "question": "Which method can be used to convert a number into a string?",
            "answer": "toString()",
            "options": ["toString()", "parseString()", "String()", "convert()"]
          },
          {
            "numb": 50,
            "question": "Which of the following is not a JavaScript framework?",
            "answer": "Python",
            "options": ["Angular", "Vue", "React", "Python"]
          }
]
  