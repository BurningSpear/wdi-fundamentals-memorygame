var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);

exports.myDateTime = function () {
  return Date();
};

let totalLaps = 0;

while (totalLaps < 10) {
   console.log('Swim Another lap!');
   totalLaps += 1;
}

const x = 10;

for (let i = 0; i <= x; i += 2) {
   console.log('HELLO');
}

const students = ["Mark", "Melissa", "Noopur", "Olga", "Vivek"];

// Loop over the array of students
for (let i = 0; i < students.length; i += 1) {
   // Greet each student by name
   console.log("Hello " + students[i]);
}// Loop over the array of students
for (var i = 0; i < students.length; i += 1) {
   // Greet each student by name
   console.log("Hello " + students[i]);
}


for (var i = 1; i <= 100; i++) {
  switch (true) {
    case (i % 3 === 0 && i % 5 === 0):
      console.log('FizzBuzz');
      break;
 
    case (i % 3 === 0):
      console.log('Fizz');
      break;
 
    case (i % 5 === 0):
      console.log('Buzz');
      break;
 
    default:
      console.log(i);
  }
}


function sellSnacks("Hot dogs! Get your hot dogs!") {
	console.log(sellSnacks);
};

sellSnacks();