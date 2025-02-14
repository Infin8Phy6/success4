const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for frontend connections
app.use(cors()); 
app.use(express.json()); // Middleware for parsing JSON requests

// Corrected CORS Headers Middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins, change * to specific domain if needed
  res.header("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE"); // Allowed HTTP methods
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization"); // Allowed headers
  next();
});

// Define the Question type
const questions = [
    {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Knowledge",
        "ytlink": "To be followed",
        "question": "What is the fundamental theorem of arithmetic?",
        "options": [
          "Every integer greater than 1 is either a prime number or can be factored into prime numbers.",
          "All prime numbers are divisible by 2.",
          "A prime number is always even.",
          "Any integer can be expressed as the sum of two squares."
        ],
        "correctAnswer": "Every integer greater than 1 is either a prime number or can be factored into prime numbers."
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Knowledge",
        "ytlink": "To be followed",
        "question": "What is the definition of a prime number?",
        "options": [
          "A number divisible by only 1 and itself.",
          "A number divisible by 2 only.",
          "A number greater than 2.",
          "A number that cannot be factored."
        ],
        "correctAnswer": "A number divisible by only 1 and itself."
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Knowledge",
        "ytlink": "To be followed",
        "question": "What is the sum of the first 10 prime numbers?",
        "options": [
          "129",
          "128",
          "130",
          "132"
        ],
        "correctAnswer": "129"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "If the sum of two numbers is divisible by 5, what is the possible remainder when dividing each number by 5?",
        "options": [
          "0, 0",
          "1, 4",
          "2, 3",
          "4, 1"
        ],
        "correctAnswer": "1, 4"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "Which of the following is a characteristic of a quadratic residue modulo a prime?",
        "options": [
          "It is always a multiple of 2.",
          "It can be represented as \( x^2 \) modulo p for some integer x.",
          "It is always even.",
          "It is always odd."
        ],
        "correctAnswer": "It can be represented as \( x^2 \) modulo p for some integer x."
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "What does Fermat’s Little Theorem state for a prime p and integer a?",
        "options": [
          "If a is divisible by p, then \( a^{p-1} \equiv 1 \mod p \).",
          "If a is not divisible by p, then \( a^{p-1} \equiv 1 \mod p \).",
          "If a is divisible by p, then \( a^{p} \equiv 0 \mod p \).",
          "If a is not divisible by p, then \( a^{p} \equiv 0 \mod p \)."
        ],
        "correctAnswer": "If a is not divisible by p, then \( a^{p-1} \equiv 1 \mod p \)."
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "How is the Chinese Remainder Theorem used in solving simultaneous modular equations?",
        "options": [
          "By simplifying equations to solve for the highest common factor.",
          "By finding a common modulus for all congruences.",
          "By reducing the system to a single modular equation.",
          "By transforming the system into a Diophantine equation."
        ],
        "correctAnswer": "By finding a common modulus for all congruences."
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Application",
        "ytlink": "To be followed",
        "question": "Find the greatest common divisor of 56 and 98 using Euclid’s algorithm.",
        "options": [
          "14",
          "7",
          "12",
          "28"
        ],
        "correctAnswer": "14"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Application",
        "ytlink": "To be followed",
        "question": "Solve for x: \( 7x \equiv 4 \mod 11 \).",
        "options": [
          "x = 8",
          "x = 9",
          "x = 3",
          "x = 5"
        ],
        "correctAnswer": "x = 8"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Application",
        "ytlink": "To be followed",
        "question": "What is the modular inverse of 3 modulo 7?",
        "options": [
          "5",
          "2",
          "3",
          "4"
        ],
        "correctAnswer": "5"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Analysis",
        "ytlink": "To be followed",
        "question": "Given the sequence of integers 2, 5, 8, 11, ... determine the common difference of the arithmetic progression.",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswer": "3"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Analysis",
        "ytlink": "To be followed",
        "question": "Analyze the prime factorization of 360. What is the highest power of 2 in its factorization?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswer": "3"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Evaluation",
        "ytlink": "To be followed",
        "question": "Evaluate the truth of the statement: The sum of the first n prime numbers is always prime.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "False"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Synthesis",
        "ytlink": "To be followed",
        "question": "Synthesize a solution to find the least common multiple of 15 and 20.",
        "options": [
          "60",
          "50",
          "75",
          "100"
        ],
        "correctAnswer": "60"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Creation",
        "ytlink": "To be followed",
        "question": "Create an example of a linear Diophantine equation with no solution.",
        "options": [
          "3x + 4y = 7",
          "2x + 4y = 8",
          "3x + 2y = 6",
          "5x + 5y = 10"
        ],
        "correctAnswer": "3x + 4y = 7"
      }
    ,
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Knowledge",
        "ytlink": "To be followed",
        "question": "What is the Euler's Totient Function for the number 12?",
        "options": [
          "4",
          "6",
          "8",
          "10"
        ],
        "correctAnswer": "4"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Knowledge",
        "ytlink": "To be followed",
        "question": "Which of the following is a property of a prime number?",
        "options": [
          "It is divisible by 1 and itself only.",
          "It is divisible by 1, 2, and itself.",
          "It is divisible by 1 and any other number.",
          "It is an odd number."
        ],
        "correctAnswer": "It is divisible by 1 and itself only."
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Knowledge",
        "ytlink": "To be followed",
        "question": "Which theorem states that every integer greater than 1 is either a prime or a product of primes?",
        "options": [
          "Fermat’s Little Theorem",
          "Euclid's Theorem",
          "Fundamental Theorem of Arithmetic",
          "Prime Number Theorem"
        ],
        "correctAnswer": "Fundamental Theorem of Arithmetic"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "What is the result of \( (2^3 + 4) \mod 5 \)?",
        "options": [
          "3",
          "2",
          "4",
          "1"
        ],
        "correctAnswer": "4"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "If \( 3x + 5 \equiv 7 \mod 11 \), what is the value of x?",
        "options": [
          "3",
          "1",
          "2",
          "4"
        ],
        "correctAnswer": "1"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "If \( p \) is a prime and \( a \) is an integer not divisible by \( p \), what does Fermat's Little Theorem state about \( a^{p-1} \mod p \)?",
        "options": [
          "It is always 1.",
          "It is always 0.",
          "It is equal to \( p-1 \).",
          "It is equal to \( a \mod p \)."
        ],
        "correctAnswer": "It is always 1."
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Application",
        "ytlink": "To be followed",
        "question": "Find the LCM of 18 and 24 using prime factorization.",
        "options": [
          "72",
          "36",
          "48",
          "60"
        ],
        "correctAnswer": "72"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Application",
        "ytlink": "To be followed",
        "question": "Using the Chinese Remainder Theorem, solve the system: \( x \equiv 1 \mod 3 \) and \( x \equiv 2 \mod 5 \).",
        "options": [
          "x = 11",
          "x = 8",
          "x = 9",
          "x = 7"
        ],
        "correctAnswer": "x = 8"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Application",
        "ytlink": "To be followed",
        "question": "Find the modular inverse of 7 modulo 13.",
        "options": [
          "7",
          "2",
          "5",
          "8"
        ],
        "correctAnswer": "2"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Analysis",
        "ytlink": "To be followed",
        "question": "Analyze the number 20. What is its prime factorization?",
        "options": [
          "2 x 2 x 5",
          "2 x 3 x 5",
          "2 x 2 x 2 x 5",
          "2 x 5"
        ],
        "correctAnswer": "2 x 2 x 5"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Analysis",
        "ytlink": "To be followed",
        "question": "Given the number 56, analyze its divisibility by 7 and determine if 56 is divisible by 7.",
        "options": [
          "Yes",
          "No"
        ],
        "correctAnswer": "Yes"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Evaluation",
        "ytlink": "To be followed",
        "question": "Evaluate whether the following statement is true: The number 97 is divisible by any number other than 1 and itself.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "False"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Synthesis",
        "ytlink": "To be followed",
        "question": "Synthesize the following expressions: \( 2^3 + 4 \mod 5 \) and \( 3^2 + 2 \mod 4 \). What is the final result?",
        "options": [
          "6",
          "7",
          "5",
          "3"
        ],
        "correctAnswer": "3"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Creation",
        "ytlink": "To be followed",
        "question": "Create an arithmetic progression where the first term is 2 and the common difference is 3. What is the 5th term?",
        "options": [
          "14",
          "15",
          "16",
          "17"
        ],
        "correctAnswer": "14"
      }
    ,
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Knowledge",
        "ytlink": "To be followed",
        "question": "What is the formula to calculate the area of a triangle?",
        "options": [
          "A = \frac{1}{2} \times b \times h",
          "A = b \times h",
          "A = \frac{b^2}{2}",
          "A = b + h"
        ],
        "correctAnswer": "A = \frac{1}{2} \times b \times h"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Knowledge",
        "ytlink": "To be followed",
        "question": "What is the value of \( 7! \) (7 factorial)?",
        "options": [
          "5040",
          "720",
          "120",
          "42"
        ],
        "correctAnswer": "5040"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Knowledge",
        "ytlink": "To be followed",
        "question": "Which of the following is the correct formula for the perimeter of a rectangle?",
        "options": [
          "P = 2l + 2w",
          "P = l + w",
          "P = l^2 + w^2",
          "P = lw"
        ],
        "correctAnswer": "P = 2l + 2w"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "If the sum of two numbers is 12 and their product is 35, what are the numbers?",
        "options": [
          "5 and 7",
          "6 and 6",
          "4 and 8",
          "3 and 9"
        ],
        "correctAnswer": "5 and 7"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "If \( f(x) = 3x + 4 \), what is the value of \( f(2) \)?",
        "options": [
          "10",
          "8",
          "6",
          "7"
        ],
        "correctAnswer": "10"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "What is the area of a circle with radius 5?",
        "options": [
          "25π",
          "5π",
          "10π",
          "20π"
        ],
        "correctAnswer": "25π"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Application",
        "ytlink": "To be followed",
        "question": "What is the volume of a cylinder with radius 4 and height 10?",
        "options": [
          "160π",
          "120π",
          "200π",
          "160"
        ],
        "correctAnswer": "160π"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Application",
        "ytlink": "To be followed",
        "question": "A bag contains 3 red balls, 2 green balls, and 5 blue balls. What is the probability of drawing a red ball?",
        "options": [
          "3/10",
          "1/5",
          "1/3",
          "3/5"
        ],
        "correctAnswer": "3/10"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Application",
        "ytlink": "To be followed",
        "question": "Simplify the expression: \( 2x + 3x - 5x \)",
        "options": [
          "0",
          "10x",
          "-5x",
          "4x"
        ],
        "correctAnswer": "0"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Analysis",
        "ytlink": "To be followed",
        "question": "What is the prime factorization of 56?",
        "options": [
          "2^3 x 7",
          "2^2 x 7",
          "2 x 3 x 7",
          "2^2 x 3"
        ],
        "correctAnswer": "2^3 x 7"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Analysis",
        "ytlink": "To be followed",
        "question": "Find the greatest common divisor (GCD) of 24 and 36.",
        "options": [
          "12",
          "6",
          "18",
          "24"
        ],
        "correctAnswer": "12"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Evaluation",
        "ytlink": "To be followed",
        "question": "Evaluate the expression \( \sqrt{81} + 9 \)",
        "options": [
          "18",
          "15",
          "12",
          "10"
        ],
        "correctAnswer": "18"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Synthesis",
        "ytlink": "To be followed",
        "question": "Synthesize the equation \( 5x + 3 = 23 \) and solve for x.",
        "options": [
          "x = 4",
          "x = 5",
          "x = 3",
          "x = 2"
        ],
        "correctAnswer": "x = 4"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Creation",
        "ytlink": "To be followed",
        "question": "Create a simple system of linear equations using the following conditions: the sum of two numbers is 10 and their difference is 4.",
        "options": [
          "x + y = 10, x - y = 4",
          "x + y = 10, x + y = 4",
          "x - y = 10, x + y = 4",
          "x + y = 4, x - y = 10"
        ],
        "correctAnswer": "x + y = 10, x - y = 4"
      }
    ,
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Knowledge",
        "ytlink": "To be followed",
        "question": "What is the formula for the area of a rectangle?",
        "options": [
          "A = l + w",
          "A = l \times w",
          "A = l^2 + w^2",
          "A = \frac{l}{w}"
        ],
        "correctAnswer": "A = l \times w"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Knowledge",
        "ytlink": "To be followed",
        "question": "Which of the following is the definition of a prime number?",
        "options": [
          "A number divisible by only 1 and itself",
          "A number divisible by 1, itself, and 2",
          "A number divisible by 2 and 3",
          "A number divisible by 3 and 5"
        ],
        "correctAnswer": "A number divisible by only 1 and itself"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Knowledge",
        "ytlink": "To be followed",
        "question": "What is the square root of 144?",
        "options": [
          "14",
          "12",
          "16",
          "10"
        ],
        "correctAnswer": "12"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "If the product of two numbers is 48 and one of the numbers is 6, what is the other number?",
        "options": [
          "8",
          "10",
          "12",
          "7"
        ],
        "correctAnswer": "8"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "Which of the following is the correct expression for the surface area of a cube with side length \( a \)?",
        "options": [
          "A = 6a^2",
          "A = 3a^2",
          "A = a^3",
          "A = 2a^3"
        ],
        "correctAnswer": "A = 6a^2"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "What is the area of a circle with radius 7?",
        "options": [
          "49π",
          "14π",
          "28π",
          "7π"
        ],
        "correctAnswer": "49π"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Application",
        "ytlink": "To be followed",
        "question": "A student scored 78%, 85%, 92%, and 88% on four exams. What is the average score?",
        "options": [
          "85.75%",
          "90%",
          "87.5%",
          "86%"
        ],
        "correctAnswer": "85.75%"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Application",
        "ytlink": "To be followed",
        "question": "If the perimeter of a square is 36, what is the area of the square?",
        "options": [
          "81",
          "9",
          "36",
          "18"
        ],
        "correctAnswer": "81"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Application",
        "ytlink": "To be followed",
        "question": "What is the volume of a cylinder with a radius of 3 units and a height of 5 units?",
        "options": [
          "45π",
          "15π",
          "25π",
          "30π"
        ],
        "correctAnswer": "45π"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Analysis",
        "ytlink": "To be followed",
        "question": "If \( 2x + 5 = 15 \), solve for x.",
        "options": [
          "x = 5",
          "x = 10",
          "x = 7",
          "x = 2"
        ],
        "correctAnswer": "x = 5"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Analysis",
        "ytlink": "To be followed",
        "question": "What is the value of the discriminant in the quadratic equation \( x^2 - 4x + 3 = 0 \)?",
        "options": [
          "16",
          "4",
          "0",
          "8"
        ],
        "correctAnswer": "4"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Evaluation",
        "ytlink": "To be followed",
        "question": "Evaluate the limit: \( \lim_{x \to 0} \frac{\sin x}{x} \)",
        "options": [
          "1",
          "0",
          "Infinity",
          "-1"
        ],
        "correctAnswer": "1"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Synthesis",
        "ytlink": "To be followed",
        "question": "Synthesize the following expression: \( 2x + 4 = 16 \) and solve for x.",
        "options": [
          "x = 6",
          "x = 8",
          "x = 10",
          "x = 4"
        ],
        "correctAnswer": "x = 6"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Creation",
        "ytlink": "To be followed",
        "question": "Create an equation for the area of a right triangle with base \( b \) and height \( h \).",
        "options": [
          "A = \frac{1}{2}bh",
          "A = bh",
          "A = b^2 + h^2",
          "A = b + h"
        ],
        "correctAnswer": "A = \frac{1}{2}bh"
      }
    ,
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Knowledge",
        "ytlink": "To be followed",
        "question": "What is the derivative of the function $f(x) = 3x^2 + 5x + 2$?",
        "options": [
          "6x + 5",
          "6x + 2",
          "5x + 2",
          "6x + 6"
        ],
        "correctAnswer": "6x + 5"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Knowledge",
        "ytlink": "To be followed",
        "question": "What is the solution to the equation $x^2 - 5x + 6 = 0$?",
        "options": [
          "x = 1, 6",
          "x = 2, 3",
          "x = 3, -2",
          "x = -1, -6"
        ],
        "correctAnswer": "x = 2, 3"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Knowledge",
        "ytlink": "To be followed",
        "question": "What is the sum of the first 10 positive integers?",
        "options": [
          "55",
          "50",
          "45",
          "60"
        ],
        "correctAnswer": "55"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "How do you find the slope of the line passing through the points (2, 4) and (6, 8)?",
        "options": [
          "Slope = 2",
          "Slope = 1",
          "Slope = 4",
          "Slope = 3"
        ],
        "correctAnswer": "Slope = 1"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "If the function $f(x) = 2x + 1$, what is $f(3)$?",
        "options": [
          "7",
          "6",
          "8",
          "9"
        ],
        "correctAnswer": "7"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "Which of the following is the solution to the system of equations: $x + y = 5$ and $x - y = 1$?",
        "options": [
          "x = 3, y = 2",
          "x = 4, y = 1",
          "x = 2, y = 3",
          "x = 1, y = 4"
        ],
        "correctAnswer": "x = 3, y = 2"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "Which of the following is a solution to the quadratic equation $x^2 - 6x + 9 = 0$?",
        "options": [
          "x = 3",
          "x = -3",
          "x = 6",
          "x = -6"
        ],
        "correctAnswer": "x = 3"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "What is the value of $x$ in the equation $2^{x} = 32$?",
        "options": [
          "x = 5",
          "x = 6",
          "x = 4",
          "x = 3"
        ],
        "correctAnswer": "x = 5"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Application",
        "ytlink": "To be followed",
        "question": "A rectangle has a length of 8 and a width of 5. What is its area?",
        "options": [
          "40",
          "35",
          "45",
          "50"
        ],
        "correctAnswer": "40"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Application",
        "ytlink": "To be followed",
        "question": "What is the volume of a cylinder with a radius of 3 and height of 10?",
        "options": [
          "90π",
          "30π",
          "45π",
          "60π"
        ],
        "correctAnswer": "90π"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Application",
        "ytlink": "To be followed",
        "question": "If the equation $y = 3x + 5$ represents a line, what is the y-intercept?",
        "options": [
          "5",
          "3",
          "0",
          "1"
        ],
        "correctAnswer": "5"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Analysis",
        "ytlink": "To be followed",
        "question": "What is the determinant of the matrix $\\begin{pmatrix} 3 & 2 \\ 1 & 4 \\end{pmatrix}$?",
        "options": [
          "10",
          "5",
          "6",
          "8"
        ],
        "correctAnswer": "10"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Analysis",
        "ytlink": "To be followed",
        "question": "What is the inverse of the matrix $\\begin{pmatrix} 1 & 2 \\ 3 & 4 \\end{pmatrix}$?",
        "options": [
          "$\\begin{pmatrix} -2 & 1 \\ 1.5 & -0.5 \\end{pmatrix}$",
          "$\\begin{pmatrix} -1 & 2 \\ 3 & -4 \\end{pmatrix}$",
          "$\\begin{pmatrix} 2 & 1 \\ 3 & 4 \\end{pmatrix}$",
          "$\\begin{pmatrix} 4 & -2 \\ -3 & 1 \\end{pmatrix}$"
        ],
        "correctAnswer": "$\\begin{pmatrix} -2 & 1 \\ 1.5 & -0.5 \\end{pmatrix}$"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Evaluation",
        "ytlink": "To be followed",
        "question": "Evaluate the limit of the function $f(x) = \\frac{x^2 - 9}{x - 3}$ as $x$ approaches 3.",
        "options": [
          "6",
          "3",
          "9",
          "undefined"
        ],
        "correctAnswer": "6"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Synthesis",
        "ytlink": "To be followed",
        "question": "Using the Pythagorean Theorem, what is the length of the hypotenuse of a right triangle with legs of lengths 5 and 12?",
        "options": [
          "13",
          "14",
          "15",
          "16"
        ],
        "correctAnswer": "13"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Creation",
        "ytlink": "To be followed",
        "question": "Create a function that models the situation where the total cost $C$ is the sum of a fixed fee of 50 and a charge of 20 per hour of use, $C = f(h)$.",
        "options": [
          "f(h) = 20h + 50",
          "f(h) = 50h + 20",
          "f(h) = 50 + 20h",
          "f(h) = 20 + 50h"
        ],
        "correctAnswer": "f(h) = 20h + 50"
      }
    ,
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Knowledge",
        "ytlink": "To be followed",
        "question": "Which probability distribution is used to model the number of events occurring in a fixed interval of time or space?",
        "options": [
          "Poisson Distribution",
          "Normal Distribution",
          "Binomial Distribution",
          "Uniform Distribution"
        ],
        "correctAnswer": "Poisson Distribution"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Knowledge",
        "ytlink": "To be followed",
        "question": "In regression analysis, what does the coefficient of determination (R²) represent?",
        "options": [
          "The proportion of variance in the dependent variable explained by the independent variable(s)",
          "The strength of the correlation between the dependent and independent variable",
          "The slope of the regression line",
          "The intercept of the regression line"
        ],
        "correctAnswer": "The proportion of variance in the dependent variable explained by the independent variable(s)"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "What does a p-value of 0.03 in hypothesis testing indicate?",
        "options": [
          "There is strong evidence to reject the null hypothesis",
          "There is weak evidence to reject the null hypothesis",
          "There is insufficient evidence to reject the null hypothesis",
          "There is no evidence to reject the null hypothesis"
        ],
        "correctAnswer": "There is strong evidence to reject the null hypothesis"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "If the correlation coefficient between two variables is -0.85, what does this indicate about their relationship?",
        "options": [
          "A weak positive linear relationship",
          "A strong positive linear relationship",
          "A weak negative linear relationship",
          "A strong negative linear relationship"
        ],
        "correctAnswer": "A strong negative linear relationship"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "Which of the following is true about a normal distribution?",
        "options": [
          "It is always skewed to the right",
          "The mean, median, and mode are always equal",
          "It has a negative kurtosis",
          "It can never be bimodal"
        ],
        "correctAnswer": "The mean, median, and mode are always equal"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "What is the standard error of the mean if the population standard deviation is 10 and the sample size is 25?",
        "options": [
          "0.2",
          "2",
          "0.4",
          "4"
        ],
        "correctAnswer": "2"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Application",
        "ytlink": "To be followed",
        "question": "A factory produces 1000 items, and the probability of an item being defective is 0.05. What is the expected number of defective items?",
        "options": [
          "50",
          "100",
          "5",
          "10"
        ],
        "correctAnswer": "50"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Application",
        "ytlink": "To be followed",
        "question": "What is the probability of rolling a sum of 8 on two dice?",
        "options": [
          "5/36",
          "1/6",
          "1/36",
          "7/36"
        ],
        "correctAnswer": "5/36"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Application",
        "ytlink": "To be followed",
        "question": "A simple random sample of 50 students is taken from a population of 500. What is the sample proportion if 20 students in the sample passed an exam?",
        "options": [
          "0.20",
          "0.50",
          "0.04",
          "0.10"
        ],
        "correctAnswer": "0.40"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Analysis",
        "ytlink": "To be followed",
        "question": "In a box of 20 balls, 12 are red, and 8 are blue. If two balls are selected without replacement, what is the probability that both balls are red?",
        "options": [
          "0.42",
          "0.48",
          "0.36",
          "0.28"
        ],
        "correctAnswer": "0.42"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Analysis",
        "ytlink": "To be followed",
        "question": "What is the consequence of having a high p-value in a hypothesis test?",
        "options": [
          "It suggests that the null hypothesis should be rejected",
          "It suggests that the alternative hypothesis is correct",
          "It suggests there is insufficient evidence to reject the null hypothesis",
          "It suggests that the test is not powerful enough"
        ],
        "correctAnswer": "It suggests there is insufficient evidence to reject the null hypothesis"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Evaluation",
        "ytlink": "To be followed",
        "question": "When is it appropriate to use a paired T-test in hypothesis testing?",
        "options": [
          "When the samples are independent",
          "When the sample size is greater than 30",
          "When the data is ordinal",
          "When the samples are related or matched"
        ],
        "correctAnswer": "When the samples are related or matched"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Synthesis",
        "ytlink": "To be followed",
        "question": "Design a test to compare the effectiveness of two medications. What statistical method would you use?",
        "options": [
          "Paired T-test",
          "Independent T-test",
          "Chi-square Test",
          "ANOVA"
        ],
        "correctAnswer": "Independent T-test"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Creation",
        "ytlink": "To be followed",
        "question": "Create a model to forecast sales for the next quarter based on historical data, including seasonality and trend.",
        "options": [
          "Time Series Analysis",
          "Linear Regression",
          "Multiple Regression",
          "Chi-square Test"
        ],
        "correctAnswer": "Time Series Analysis"
      }
    ,
    {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Knowledge",
        "ytlink": "To be followed",
        "question": "Which of the following is NOT a characteristic of a normal distribution?",
        "options": [
          "Symmetry about the mean",
          "Mean = Median = Mode",
          "Asymptotic tails",
          "Skewed to the right"
        ],
        "correctAnswer": "Skewed to the right"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Knowledge",
        "ytlink": "To be followed",
        "question": "What is the formula for calculating the margin of error in a confidence interval?",
        "options": [
          "Z * (σ / √n)",
          "Z * (σ / N)",
          "Z * (s / √n)",
          "t * (s / √n)"
        ],
        "correctAnswer": "Z * (σ / √n)"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "Why would you use stratified sampling instead of simple random sampling?",
        "options": [
          "To increase the sample size",
          "To ensure every individual has an equal chance of selection",
          "To ensure that all subgroups are proportionately represented in the sample",
          "To minimize bias by selecting only a few individuals"
        ],
        "correctAnswer": "To ensure that all subgroups are proportionately represented in the sample"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "What does a confidence interval of (15, 25) for the population mean mean?",
        "options": [
          "The true population mean is between 15 and 25 with 95% confidence",
          "The sample mean is between 15 and 25",
          "The sample proportion is between 15% and 25%",
          "The margin of error is 10"
        ],
        "correctAnswer": "The true population mean is between 15 and 25 with 95% confidence"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "How do you interpret a p-value of 0.07 in hypothesis testing?",
        "options": [
          "Reject the null hypothesis at the 5% significance level",
          "Fail to reject the null hypothesis at the 5% significance level",
          "Reject the null hypothesis at the 10% significance level",
          "The data is not statistically significant"
        ],
        "correctAnswer": "Fail to reject the null hypothesis at the 5% significance level"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "What does the correlation coefficient of -0.9 indicate about two variables?",
        "options": [
          "Strong positive linear relationship",
          "Strong negative linear relationship",
          "No linear relationship",
          "Weak negative linear relationship"
        ],
        "correctAnswer": "Strong negative linear relationship"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "In a binomial distribution, what condition must be met for the events to be independent?",
        "options": [
          "The number of trials must be infinite",
          "The probability of success must be the same for each trial",
          "The probability of success must change with each trial",
          "The number of successes must equal the number of failures"
        ],
        "correctAnswer": "The probability of success must be the same for each trial"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Application",
        "ytlink": "To be followed",
        "question": "You roll two fair dice. What is the probability that the sum is greater than or equal to 9?",
        "options": [
          "1/9",
          "5/36",
          "7/36",
          "11/36"
        ],
        "correctAnswer": "5/36"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Application",
        "ytlink": "To be followed",
        "question": "A survey of 50 students showed that 30 passed a math exam. What is the sample proportion of students who passed the exam?",
        "options": [
          "0.30",
          "0.60",
          "0.50",
          "0.40"
        ],
        "correctAnswer": "0.60"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Application",
        "ytlink": "To be followed",
        "question": "A population has a mean of 50 and a standard deviation of 5. What is the z-score for a value of 55?",
        "options": [
          "1",
          "0.5",
          "-1",
          "2"
        ],
        "correctAnswer": "1"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Analysis",
        "ytlink": "To be followed",
        "question": "What happens to the standard error if the sample size is doubled?",
        "options": [
          "It is halved",
          "It is doubled",
          "It stays the same",
          "It is quadrupled"
        ],
        "correctAnswer": "It is halved"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Analysis",
        "ytlink": "To be followed",
        "question": "In an ANOVA test, what does a large F-statistic value indicate?",
        "options": [
          "There is no difference between group means",
          "There is a significant difference between group means",
          "There is no variation in the data",
          "The sample size is too small"
        ],
        "correctAnswer": "There is a significant difference between group means"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Evaluation",
        "ytlink": "To be followed",
        "question": "If a hypothesis test produces a p-value of 0.01, how should you interpret the result?",
        "options": [
          "Strong evidence to reject the null hypothesis",
          "Weak evidence to reject the null hypothesis",
          "Fail to reject the null hypothesis",
          "No evidence to support the alternative hypothesis"
        ],
        "correctAnswer": "Strong evidence to reject the null hypothesis"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Synthesis",
        "ytlink": "To be followed",
        "question": "Design a study to determine the effect of a new diet on weight loss. What statistical test would you use to analyze the data?",
        "options": [
          "Paired T-test",
          "Chi-square test",
          "Independent T-test",
          "ANOVA"
        ],
        "correctAnswer": "Paired T-test"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Knowledge",
        "ytlink": "To be followed",
        "question": "What is the definition of a discrete random variable?",
        "options": [
          "A variable that can take any value within a given range",
          "A variable that can take only specific, distinct values",
          "A variable that follows a normal distribution",
          "A variable with a probability distribution"
        ],
        "correctAnswer": "A variable that can take only specific, distinct values"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Knowledge",
        "ytlink": "To be followed",
        "question": "What is the formula for calculating the variance of a population?",
        "options": [
          "Σ(x - x̄)² / n",
          "Σ(x - x̄)² / (n - 1)",
          "Σ(x - μ)² / N",
          "σ² = Σ(x - μ)² / N"
        ],
        "correctAnswer": "σ² = Σ(x - μ)² / N"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Knowledge",
        "ytlink": "To be followed",
        "question": "What is the main purpose of a t-test in hypothesis testing?",
        "options": [
          "To compare the variance of two populations",
          "To compare the means of two populations",
          "To test the difference between two proportions",
          "To estimate the population mean"
        ],
        "correctAnswer": "To compare the means of two populations"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "Why is the Central Limit Theorem important in inferential statistics?",
        "options": [
          "It allows for estimation of population parameters from a sample",
          "It describes the shape of the data distribution",
          "It helps to determine the best regression model",
          "It ensures that data is normally distributed"
        ],
        "correctAnswer": "It allows for estimation of population parameters from a sample"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "In a chi-square goodness of fit test, what are you testing?",
        "options": [
          "The difference between two means",
          "The distribution of categorical data",
          "The relationship between two variables",
          "The variance of a population"
        ],
        "correctAnswer": "The distribution of categorical data"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "How do you calculate the expected value of a binomial distribution?",
        "options": [
          "n * p",
          "n * (1 - p)",
          "p * (1 - p)",
          "n * (1 - p)²"
        ],
        "correctAnswer": "n * p"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "Which of the following conditions must be met for the use of a z-test?",
        "options": [
          "The sample size is large (n > 30) and the population variance is known",
          "The sample size is small (n < 30) and the population variance is unknown",
          "The population is non-normal",
          "The sample size is medium (n = 50)"
        ],
        "correctAnswer": "The sample size is large (n > 30) and the population variance is known"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Application",
        "ytlink": "To be followed",
        "question": "What is the probability of drawing a red card from a deck of 52 playing cards?",
        "options": [
          "26/52",
          "13/52",
          "1/2",
          "1/4"
        ],
        "correctAnswer": "26/52"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Application",
        "ytlink": "To be followed",
        "question": "You roll two fair dice. What is the probability of getting a sum of 7?",
        "options": [
          "1/6",
          "1/36",
          "5/36",
          "1/12"
        ],
        "correctAnswer": "1/6"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Application",
        "ytlink": "To be followed",
        "question": "A survey indicates that 40% of students own a laptop. If you randomly select 10 students, what is the probability that exactly 4 of them own a laptop?",
        "options": [
          "0.2503",
          "0.2637",
          "0.3025",
          "0.3678"
        ],
        "correctAnswer": "0.2503"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Analysis",
        "ytlink": "To be followed",
        "question": "What can you infer if the correlation coefficient between two variables is 0.95?",
        "options": [
          "There is a strong positive linear relationship",
          "There is a weak positive relationship",
          "There is a negative relationship",
          "There is no relationship"
        ],
        "correctAnswer": "There is a strong positive linear relationship"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Analysis",
        "ytlink": "To be followed",
        "question": "If a sample has a skewness of -2, what can you infer about the distribution?",
        "options": [
          "The distribution is negatively skewed",
          "The distribution is positively skewed",
          "The distribution is normally distributed",
          "The distribution is bimodal"
        ],
        "correctAnswer": "The distribution is negatively skewed"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Evaluation",
        "ytlink": "To be followed",
        "question": "Which of the following sampling methods is most likely to lead to bias?",
        "options": [
          "Simple random sampling",
          "Stratified sampling",
          "Convenience sampling",
          "Systematic sampling"
        ],
        "correctAnswer": "Convenience sampling"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Synthesis",
        "ytlink": "To be followed",
        "question": "How would you design an experiment to determine if there is a significant difference in test scores between two teaching methods?",
        "options": [
          "Use a paired t-test",
          "Use a chi-square test",
          "Use a two-way ANOVA",
          "Use a z-test for proportions"
        ],
        "correctAnswer": "Use a paired t-test"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Creation",
        "ytlink": "To be followed",
        "question": "Create a statistical model to predict sales based on advertising spending and seasonality factors.",
        "options": [
          "Multiple regression analysis",
          "Time series analysis",
          "Chi-square analysis",
          "Factor analysis"
        ],
        "correctAnswer": "Multiple regression analysis"
,"explanation":"To follow: wait for new app release/updates"
},
    
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Synthesis",
        "ytlink": "To be followed",
        "question": "Design an experiment to test the effect of a new drug on heart rate. What type of sampling and data collection method would you use?",
        "options": [
          "Stratified sampling and observational study",
          "Simple random sampling and experimental study",
          "Cluster sampling and survey study",
          "Systematic sampling and observational study"
        ],
        "correctAnswer": "Simple random sampling and experimental study"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Creation",
        "ytlink": "To be followed",
        "question": "Create a new statistical method to determine the best fitting line for a set of data points that are heavily influenced by outliers. What would your method entail?",
        "options": [
          "Using weighted least squares to minimize the influence of outliers",
          "Applying a nonlinear regression model",
          "Using a moving average to smooth outliers",
          "Replacing outliers with the mean value"
        ],
        "correctAnswer": "Using weighted least squares to minimize the influence of outliers"
      }
    ,
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Knowledge",
        "ytlink": "To be followed",
        "question": "What is the formula for the variance of a data set?",
        "options": [
          "Σ(x - μ)² / N",
          "Σ(x - μ)² / (N - 1)",
          "Σ(x - x̄)² / N",
          "Σ(x - x̄)² / (N - 1)"
        ],
        "correctAnswer": "Σ(x - μ)² / (N - 1)"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Knowledge",
        "ytlink": "To be followed",
        "question": "What does the symbol μ represent in statistics?",
        "options": [
          "Sample mean",
          "Population mean",
          "Sample variance",
          "Population variance"
        ],
        "correctAnswer": "Population mean"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Knowledge",
        "ytlink": "To be followed",
        "question": "What is the main purpose of using a p-value in hypothesis testing?",
        "options": [
          "To calculate the test statistic",
          "To measure the size of the effect",
          "To determine the probability of observing data given that the null hypothesis is true",
          "To compute the sample mean"
        ],
        "correctAnswer": "To determine the probability of observing data given that the null hypothesis is true"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "Which of the following describes the relationship between the mean and median in a negatively skewed distribution?",
        "options": [
          "Mean = Median",
          "Mean > Median",
          "Mean < Median",
          "Mean is unrelated to the Median"
        ],
        "correctAnswer": "Mean < Median"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "In a binomial distribution, what does the parameter 'p' represent?",
        "options": [
          "The number of trials",
          "The probability of success on a single trial",
          "The number of successes",
          "The total number of events"
        ],
        "correctAnswer": "The probability of success on a single trial"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "What does the coefficient of determination (R²) represent in a linear regression model?",
        "options": [
          "The slope of the regression line",
          "The proportion of variance in the dependent variable explained by the independent variable",
          "The intercept of the regression line",
          "The correlation between the independent and dependent variables"
        ],
        "correctAnswer": "The proportion of variance in the dependent variable explained by the independent variable"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "Which type of sampling technique involves dividing a population into subgroups based on a characteristic and then randomly selecting from each subgroup?",
        "options": [
          "Simple Random Sampling",
          "Stratified Sampling",
          "Cluster Sampling",
          "Systematic Sampling"
        ],
        "correctAnswer": "Stratified Sampling"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "In the context of time series analysis, what is the purpose of exponential smoothing?",
        "options": [
          "To remove the trend from the data",
          "To forecast future values using weighted averages of past observations",
          "To identify seasonal components in the data",
          "To adjust for cyclical patterns"
        ],
        "correctAnswer": "To forecast future values using weighted averages of past observations"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Application",
        "ytlink": "To be followed",
        "question": "A company conducts a survey to determine if the average salary of employees is greater than $50,000. Which statistical test should be used?",
        "options": [
          "Chi-Square Test for Independence",
          "Z-test for Population Mean",
          "Paired T-test",
          "T-test for Two Independent Means"
        ],
        "correctAnswer": "Z-test for Population Mean"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Application",
        "ytlink": "To be followed",
        "question": "What is the expected value of a fair die roll?",
        "options": [
          "1",
          "3.5",
          "6",
          "2.5"
        ],
        "correctAnswer": "3.5"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Application",
        "ytlink": "To be followed",
        "question": "Using the formula for a 95% confidence interval, if the sample mean is 100, the standard deviation is 15, and the sample size is 25, what is the margin of error?",
        "options": [
          "2.95",
          "6.0",
          "5.0",
          "4.5"
        ],
        "correctAnswer": "6.0"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Analysis",
        "ytlink": "To be followed",
        "question": "Which of the following would cause a sample mean to be an unreliable estimate of the population mean?",
        "options": [
          "Large sample size",
          "Small sample size",
          "Random sampling",
          "Normal distribution of the population"
        ],
        "correctAnswer": "Small sample size"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Analysis",
        "ytlink": "To be followed",
        "question": "In a hypothesis test, what happens if the p-value is greater than the significance level (α)?",
        "options": [
          "We reject the null hypothesis",
          "We fail to reject the null hypothesis",
          "We accept the alternative hypothesis",
          "We increase the sample size"
        ],
        "correctAnswer": "We fail to reject the null hypothesis"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Evaluation",
        "ytlink": "To be followed",
        "question": "Which hypothesis test would be most appropriate to compare the means of two independent groups?",
        "options": [
          "One-way ANOVA",
          "Paired T-test",
          "Two-sample T-test",
          "Chi-Square Test"
        ],
        "correctAnswer": "Two-sample T-test"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Synthesis",
        "ytlink": "To be followed",
        "question": "Design an experiment to test the effect of a new drug on heart rate. What type of sampling and data collection method would you use?",
        "options": [
          "Stratified sampling and observational study",
          "Simple random sampling and experimental study",
          "Cluster sampling and survey study",
          "Systematic sampling and observational study"
        ],
        "correctAnswer": "Simple random sampling and experimental study"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Creation",
        "ytlink": "To be followed",
        "question": "Create a model to predict the probability of passing an exam based on hours of study. Which type of regression would you use?",
        "options": [
          "Linear Regression",
          "Logistic Regression",
          "Multiple Regression",
          "Poisson Regression"
        ],
        "correctAnswer": "Logistic Regression"
      }
    ,
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Knowledge",
        "ytlink": "To be followed",
        "question": "What is the formula for the sample standard deviation?",
        "options": [
          "Σ(x - x̄)² / (n - 1)",
          "Σ(x - μ)² / (n - 1)",
          "Σ(x - x̄)² / n",
          "Σ(x - μ)² / n"
        ],
        "correctAnswer": "Σ(x - x̄)² / (n - 1)"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Knowledge",
        "ytlink": "To be followed",
        "question": "Which distribution is characterized by a bell-shaped curve and is symmetrical around the mean?",
        "options": [
          "Binomial Distribution",
          "Poisson Distribution",
          "Normal Distribution",
          "Exponential Distribution"
        ],
        "correctAnswer": "Normal Distribution"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Knowledge",
        "ytlink": "To be followed",
        "question": "What does the notation Z ~ N(0,1) represent?",
        "options": [
          "A standard normal distribution with mean 0 and variance 1",
          "A binomial distribution with mean 0 and variance 1",
          "A normal distribution with mean 1 and variance 0",
          "A uniform distribution with mean 0 and variance 1"
        ],
        "correctAnswer": "A standard normal distribution with mean 0 and variance 1"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "In the context of hypothesis testing, what is the null hypothesis?",
        "options": [
          "The hypothesis that there is a significant effect",
          "The hypothesis that there is no significant effect",
          "The alternative hypothesis",
          "The hypothesis that the data is normal"
        ],
        "correctAnswer": "The hypothesis that there is no significant effect"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "If a random variable X follows a normal distribution with mean 100 and standard deviation 15, what is the z-score for X = 120?",
        "options": [
          "1.33",
          "2.00",
          "1.67",
          "0.67"
        ],
        "correctAnswer": "1.33"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "What is the main difference between discrete and continuous data?",
        "options": [
          "Discrete data has infinite possible values",
          "Discrete data can take any value within a range",
          "Continuous data has infinite possible values",
          "Continuous data has limited possible values"
        ],
        "correctAnswer": "Continuous data has infinite possible values"
,"explanation":"To follow: wait for new app release/updates"
},
      
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "Which type of regression model would you use if you are predicting the probability of an event happening, such as success or failure?",
        "options": [
          "Linear Regression",
          "Logistic Regression",
          "Poisson Regression",
          "Ridge Regression"
        ],
        "correctAnswer": "Logistic Regression"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Application",
        "ytlink": "To be followed",
        "question": "In a survey, 200 out of 500 people are found to be in favor of a proposal. What is the 95% confidence interval for the population proportion?",
        "options": [
          "0.4 ± 0.03",
          "0.4 ± 0.05",
          "0.4 ± 0.06",
          "0.5 ± 0.04"
        ],
        "correctAnswer": "0.4 ± 0.03"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Application",
        "ytlink": "To be followed",
        "question": "What is the probability of drawing two red cards in a row from a standard deck of 52 cards, without replacement?",
        "options": [
          "1/26",
          "1/17",
          "1/221",
          "1/1024"
        ],
        "correctAnswer": "1/221"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Application",
        "ytlink": "To be followed",
        "question": "Given a sample size of 30, a population mean of 100, and a population standard deviation of 15, what is the standard error of the mean?",
        "options": [
          "2.73",
          "2.50",
          "3.75",
          "3.10"
        ],
        "correctAnswer": "2.73"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Analysis",
        "ytlink": "To be followed",
        "question": "If a correlation coefficient of 0.85 is found between two variables, what can you conclude about their relationship?",
        "options": [
          "They have a weak positive linear relationship",
          "They have a moderate positive linear relationship",
          "They have a strong positive linear relationship",
          "They have no relationship"
        ],
        "correctAnswer": "They have a strong positive linear relationship"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Analysis",
        "ytlink": "To be followed",
        "question": "In a regression model, what happens when the residuals are not randomly distributed?",
        "options": [
          "The model is perfectly fitting the data",
          "The model may be missing important predictors",
          "The model is overfitting",
          "The data is normally distributed"
        ],
        "correctAnswer": "The model may be missing important predictors"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Evaluation",
        "ytlink": "To be followed",
        "question": "Which test would you use to compare the variances of two independent populations?",
        "options": [
          "T-test",
          "Chi-Square Test",
          "F-test",
          "Z-test"
        ],
        "correctAnswer": "F-test"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Synthesis",
        "ytlink": "To be followed",
        "question": "Design a hypothesis test to evaluate whether the average time to complete a task is different between two groups: those with training and those without.",
        "options": [
          "Use a paired T-test",
          "Use an independent T-test",
          "Use a one-way ANOVA",
          "Use a Chi-square test"
        ],
        "correctAnswer": "Use an independent T-test"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Creation",
        "ytlink": "To be followed",
        "question": "Create a model to predict the price of a house based on features such as square footage, number of rooms, and location. Which type of regression would you use?",
        "options": [
          "Linear Regression",
          "Logistic Regression",
          "Multiple Regression",
          "Poisson Regression"
        ],
        "correctAnswer": "Multiple Regression"
      }
    ,
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Knowledge",
        "ytlink": "To be followed",
        "question": "What is the formula for the variance of a population?",
        "options": [
          "Σ(x - μ)² / N",
          "Σ(x - x̄)² / N",
          "Σ(x - μ)² / (n - 1)",
          "Σ(x - x̄)² / (n - 1)"
        ],
        "correctAnswer": "Σ(x - μ)² / N"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Knowledge",
        "ytlink": "To be followed",
        "question": "What is the central limit theorem?",
        "options": [
          "The mean of the sampling distribution equals the population mean.",
          "The distribution of sample means approaches a normal distribution as the sample size increases.",
          "The sampling distribution of proportions is always normal.",
          "The variance of the sample means is larger than the population variance."
        ],
        "correctAnswer": "The distribution of sample means approaches a normal distribution as the sample size increases."
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Knowledge",
        "ytlink": "To be followed",
        "question": "What does a p-value of 0.05 indicate in hypothesis testing?",
        "options": [
          "There is a 5% chance that the null hypothesis is true.",
          "There is a 95% chance that the null hypothesis is false.",
          "There is a 5% chance of observing the data assuming the null hypothesis is true.",
          "There is a 95% chance of rejecting the null hypothesis."
        ],
        "correctAnswer": "There is a 5% chance of observing the data assuming the null hypothesis is true."
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "Which of the following describes the relationship between the mean and median in a negatively skewed distribution?",
        "options": [
          "Mean = Median",
          "Mean > Median",
          "Mean < Median",
          "Mean is unrelated to the Median"
        ],
        "correctAnswer": "Mean < Median"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "In a binomial distribution, what does the parameter 'p' represent?",
        "options": [
          "The number of trials",
          "The probability of success on a single trial",
          "The number of successes",
          "The total number of events"
        ],
        "correctAnswer": "The probability of success on a single trial"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "What does the coefficient of determination (R²) represent in a linear regression model?",
        "options": [
          "The slope of the regression line",
          "The proportion of variance in the dependent variable explained by the independent variable",
          "The intercept of the regression line",
          "The correlation between the independent and dependent variables"
        ],
        "correctAnswer": "The proportion of variance in the dependent variable explained by the independent variable"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "Which type of sampling technique involves dividing a population into subgroups based on a characteristic and then randomly selecting from each subgroup?",
        "options": [
          "Simple Random Sampling",
          "Stratified Sampling",
          "Cluster Sampling",
          "Systematic Sampling"
        ],
        "correctAnswer": "Stratified Sampling"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To be followed",
        "question": "In the context of time series analysis, what is the purpose of exponential smoothing?",
        "options": [
          "To remove the trend from the data",
          "To forecast future values using weighted averages of past observations",
          "To identify seasonal components in the data",
          "To adjust for cyclical patterns"
        ],
        "correctAnswer": "To forecast future values using weighted averages of past observations"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Application",
        "ytlink": "To be followed",
        "question": "A company conducts a survey to determine if the average salary of employees is greater than $50,000. Which statistical test should be used?",
        "options": [
          "Chi-Square Test for Independence",
          "Z-test for Population Mean",
          "Paired T-test",
          "T-test for Two Independent Means"
        ],
        "correctAnswer": "Z-test for Population Mean"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Application",
        "ytlink": "To be followed",
        "question": "What is the expected value of a fair die roll?",
        "options": [
          "1",
          "3.5",
          "6",
          "2.5"
        ],
        "correctAnswer": "3.5"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Application",
        "ytlink": "To be followed",
        "question": "Using the formula for a 95% confidence interval, if the sample mean is 100, the standard deviation is 15, and the sample size is 25, what is the margin of error?",
        "options": [
          "2.95",
          "6.0",
          "5.0",
          "4.5"
        ],
        "correctAnswer": "6.0"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Analysis",
        "ytlink": "To be followed",
        "question": "Which of the following would cause a sample mean to be an unreliable estimate of the population mean?",
        "options": [
          "Large sample size",
          "Small sample size",
          "Random sampling",
          "Normal distribution of the population"
        ],
        "correctAnswer": "Small sample size"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Analysis",
        "ytlink": "To be followed",
        "question": "In a hypothesis test, what happens if the p-value is greater than the significance level (α)?",
        "options": [
          "We reject the null hypothesis",
          "We fail to reject the null hypothesis",
          "We accept the alternative hypothesis",
          "We increase the sample size"
        ],
        "correctAnswer": "We fail to reject the null hypothesis"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Evaluation",
        "ytlink": "To be followed",
        "question": "Which hypothesis test would be most appropriate to compare the means of two independent groups?",
        "options": [
          "One-way ANOVA",
          "Paired T-test",
          "Two-sample T-test",
          "Chi-Square Test"
        ],
        "correctAnswer": "Two-sample T-test"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "Random Math Topics",
        "difficulty": "Difficult",
        "bloomstaxonomy": "Knowledge",
        "ytlink": "To be followed",
        "question": "What is the formula for the variance of a data set?",
        "options": [
          "Σ(x - μ)² / N",
          "Σ(x - μ)² / (N - 1)",
          "Σ(x - x̄)² / N",
          "Σ(x - x̄)² / (N - 1)"
        ],
        "correctAnswer": "Σ(x - μ)² / (N - 1)"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "geometry",
        "difficulty": "",
        "bloomstaxonomy": "",
        "ytlink": "To be followed",
        "question": "What is the sum of the interior angles of a triangle?",
        "options": [
          "180°",
          "360°",
          "90°",
          "270°"
        ],
        "correctAnswer": "180°"
,"explanation":"To follow: wait for new app release/updates"
},
      {
         "major": "Math",
        "subject": "geometry",
        "difficulty": "",
        "bloomstaxonomy": "",
        "ytlink": "To be followed",
        "question": "What is the area of a circle with radius 4?",
        "options": [
          "16π",
          "8π",
          "4π",
          "2π"
        ],
        "correctAnswer": "16π"
,"explanation":"To follow: wait for new app release/updates"
},
      {
         "major": "Math",
        "subject": "geometry",
        "difficulty": "",
        "bloomstaxonomy": "",
        "ytlink": "To be followed",
        "question": "What is the Pythagorean theorem?",
        "options": [
          "a² + b² = c²",
          "a + b = c",
          "a² + b² = a + b",
          "a × b = c²"
        ],
        "correctAnswer": "a² + b² = c²"
,"explanation":"To follow: wait for new app release/updates"
},
      {
         "major": "Math",
        "subject": "geometry",
        "difficulty": "",
        "bloomstaxonomy": "",
        "ytlink": "To be followed",
        "question": "What is the volume of a sphere with radius 3?",
        "options": [
          "36π",
          "108π",
          "4π",
          "36π/3"
        ],
        "correctAnswer": "36π"
,"explanation":"To follow: wait for new app release/updates"
},
      {
         "major": "Math",
        "subject": "geometry",
        "difficulty": "",
        "bloomstaxonomy": "",
        "ytlink": "To be followed",
        "question": "What is the area of a rectangle with length 5 and width 3?",
        "options": [
          "15",
          "8",
          "12",
          "18"
        ],
        "correctAnswer": "15"
,"explanation":"To follow: wait for new app release/updates"
},
      {
         "major": "Math",
        "subject": "geometry",
        "difficulty": "",
        "bloomstaxonomy": "",
        "ytlink": "To be followed",
        "question": "What is the formula for the area of a triangle?",
        "options": [
          "1/2 × base × height",
          "base × height",
          "side × side",
          "πr²"
        ],
        "correctAnswer": "1/2 × base × height"
,"explanation":"To follow: wait for new app release/updates"
},
      {
         "major": "Math",
        "subject": "geometry",
        "difficulty": "",
        "bloomstaxonomy": "",
        "ytlink": "To be followed",
        "question": "What is the perimeter of a square with side length 6?",
        "options": [
          "24",
          "36",
          "12",
          "18"
        ],
        "correctAnswer": "24"
,"explanation":"To follow: wait for new app release/updates"
},
      {
         "major": "Math",
        "subject": "geometry",
        "difficulty": "",
        "bloomstaxonomy": "",
        "ytlink": "To be followed",
        "question": "What is the formula for the circumference of a circle?",
        "options": [
          "2πr",
          "πr²",
          "πd",
          "πr"
        ],
        "correctAnswer": "2πr"
,"explanation":"To follow: wait for new app release/updates"
},
      {
         "major": "Math",
        "subject": "geometry",
        "difficulty": "",
        "bloomstaxonomy": "",
        "ytlink": "To be followed",
        "question": "What is the area of a right triangle with base 5 and height 12?",
        "options": [
          "30",
          "60",
          "24",
          "36"
        ],
        "correctAnswer": "30"
,"explanation":"To follow: wait for new app release/updates"
},
      {
         "major": "Math",
        "subject": "geometry",
        "difficulty": "",
        "bloomstaxonomy": "",
        "ytlink": "To be followed",
        "question": "What is the surface area of a cylinder with radius 3 and height 7?",
        "options": [
          "63π",
          "54π",
          "21π",
          "42π"
        ],
        "correctAnswer": "63π"
,"explanation":"To follow: wait for new app release/updates"
},
      {
         "major": "Math",
        "subject": "geometry",
        "difficulty": "",
        "bloomstaxonomy": "",
        "ytlink": "To be followed",
        "question": "What is the volume of a cone with radius 2 and height 6?",
        "options": [
          "8π",
          "12π",
          "6π",
          "4π"
        ],
        "correctAnswer": "12π"
,"explanation":"To follow: wait for new app release/updates"
},
      {
         "major": "Math",
        "subject": "geometry",
        "difficulty": "",
        "bloomstaxonomy": "",
        "ytlink": "To be followed",
        "question": "What is the area of a parallelogram with base 6 and height 4?",
        "options": [
          "24",
          "12",
          "16",
          "18"
        ],
        "correctAnswer": "24"
,"explanation":"To follow: wait for new app release/updates"
},
      {
         "major": "Math",
        "subject": "geometry",
        "difficulty": "",
        "bloomstaxonomy": "",
        "ytlink": "To be followed",
        "question": "What is the volume of a rectangular prism with length 4, width 5, and height 6?",
        "options": [
          "120",
          "80",
          "100",
          "90"
        ],
        "correctAnswer": "120"
,"explanation":"To follow: wait for new app release/updates"
},
      {
         "major": "Math",
        "subject": "geometry",
        "difficulty": "",
        "bloomstaxonomy": "",
        "ytlink": "To be followed",
        "question": "What is the area of a trapezoid with bases 6 and 8, and height 4?",
        "options": [
          "28",
          "24",
          "32",
          "36"
        ],
        "correctAnswer": "28"
,"explanation":"To follow: wait for new app release/updates"
},
      {
         "major": "Math",
        "subject": "geometry",
        "difficulty": "",
        "bloomstaxonomy": "",
        "ytlink": "To be followed",
        "question": "What is the formula for the volume of a cylinder?",
        "options": [
          "πr²h",
          "2πr²h",
          "πd²h",
          "πr²"
        ],
        "correctAnswer": "πr²h"
,"explanation":"To follow: wait for new app release/updates"
},
      {
         "major": "Math",
        "subject": "geometry",
        "difficulty": "",
        "bloomstaxonomy": "",
        "ytlink": "To be followed",
        "question": "What is the volume of a pyramid with base area 16 and height 9?",
        "options": [
          "48",
          "72",
          "36",
          "64"
        ],
        "correctAnswer": "48"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "probability",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the probability of getting a 3 on a fair 6-sided die?",
        "options": [
          "1/6",
          "1/3",
          "1/2",
          "1/4"
        ],
        "correctAnswer": "1/6"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "probability",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "If you flip a fair coin, what is the probability of getting heads?",
        "options": [
          "1/2",
          "1/4",
          "1/3",
          "1"
        ],
        "correctAnswer": "1/2"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "probability",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the probability of rolling an even number on a fair 6-sided die?",
        "options": [
          "1/2",
          "1/3",
          "1/6",
          "2/3"
        ],
        "correctAnswer": "1/2"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "probability",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the probability of drawing a red card from a standard deck of 52 cards?",
        "options": [
          "26/52",
          "1/2",
          "13/52",
          "1/4"
        ],
        "correctAnswer": "26/52"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "probability",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "If you roll two dice, what is the probability of getting a sum of 7?",
        "options": [
          "1/6",
          "1/12",
          "1/36",
          "1/3"
        ],
        "correctAnswer": "1/6"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "probability",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the probability of drawing an ace from a standard deck of cards?",
        "options": [
          "1/13",
          "1/52",
          "1/26",
          "4/52"
        ],
        "correctAnswer": "4/52"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "probability",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the probability of flipping two heads in a row with a fair coin?",
        "options": [
          "1/4",
          "1/2",
          "1/8",
          "1/16"
        ],
        "correctAnswer": "1/4"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "probability",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the probability of drawing a face card from a standard deck of 52 cards?",
        "options": [
          "12/52",
          "1/4",
          "1/13",
          "3/52"
        ],
        "correctAnswer": "12/52"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "probability",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the probability of getting a 4 or a 5 when rolling a fair 6-sided die?",
        "options": [
          "1/6",
          "2/6",
          "1/3",
          "1/2"
        ],
        "correctAnswer": "2/6"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "probability",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the probability of drawing a king or a queen from a deck of 52 cards?",
        "options": [
          "8/52",
          "4/52",
          "2/52",
          "1/13"
        ],
        "correctAnswer": "8/52"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "probability",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the probability of getting at least one head in two flips of a fair coin?",
        "options": [
          "3/4",
          "1/2",
          "1/4",
          "1/3"
        ],
        "correctAnswer": "3/4"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "probability",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the probability of drawing a black card from a deck of 52 cards?",
        "options": [
          "26/52",
          "1/2",
          "13/52",
          "3/52"
        ],
        "correctAnswer": "26/52"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "probability",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "In a deck of 52 cards, what is the probability of drawing a spade?",
        "options": [
          "1/4",
          "13/52",
          "26/52",
          "1/2"
        ],
        "correctAnswer": "13/52"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "probability",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the probability of drawing a red card from a deck of 52 cards?",
        "options": [
          "26/52",
          "1/2",
          "1/4",
          "1/13"
        ],
        "correctAnswer": "26/52"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "probability",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the probability of rolling a 2 on a fair 6-sided die?",
        "options": [
          "1/6",
          "1/2",
          "1/3",
          "1/4"
        ],
        "correctAnswer": "1/6"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "probability",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "If you draw two cards from a deck without replacement, what is the probability of drawing two hearts?",
        "options": [
          "1/221",
          "1/169",
          "1/102",
          "1/52"
        ],
        "correctAnswer": "1/221"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "probability",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the probability of drawing a card that is either a king or a queen from a deck of 52 cards?",
        "options": [
          "8/52",
          "4/52",
          "2/52",
          "1/13"
        ],
        "correctAnswer": "8/52"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "probability",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "If you roll two dice, what is the probability of getting a sum of 2?",
        "options": [
          "1/36",
          "1/12",
          "1/18",
          "1/6"
        ],
        "correctAnswer": "1/36"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "probability",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the probability of drawing an odd number from a set of numbers 1 to 10?",
        "options": [
          "5/10",
          "1/2",
          "3/10",
          "4/10"
        ],
        "correctAnswer": "5/10"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "probability",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the probability of getting a 3 on a fair 6-sided die?",
        "options": [
          "1/6",
          "1/2",
          "1/3",
          "1/4"
        ],
        "correctAnswer": "1/6"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "probability",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "If you flip two fair coins, what is the probability that at least one of them is heads?",
        "options": [
          "3/4",
          "1/4",
          "1/2",
          "1/3"
        ],
        "correctAnswer": "3/4"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "probability",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the probability of getting a prime number when rolling a 6-sided die?",
        "options": [
          "3/6",
          "2/6",
          "4/6",
          "1/6"
        ],
        "correctAnswer": "3/6"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "probability",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the probability of drawing a face card (Jack, Queen, or King) from a deck of 52 cards?",
        "options": [
          "12/52",
          "1/4",
          "1/13",
          "3/52"
        ],
        "correctAnswer": "12/52"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "probability",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the probability of getting a sum of 9 when rolling two fair dice?",
        "options": [
          "1/9",
          "1/12",
          "1/36",
          "1/6"
        ],
        "correctAnswer": "1/9"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "probability",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "If you draw one card from a deck of 52 cards, what is the probability of drawing a number card (2-10)?",
        "options": [
          "36/52",
          "26/52",
          "1/2",
          "1/4"
        ],
        "correctAnswer": "36/52"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "probability",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the probability of drawing a club from a standard deck of cards?",
        "options": [
          "13/52",
          "1/4",
          "26/52",
          "1/2"
        ],
        "correctAnswer": "13/52"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "probability",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the probability of drawing a queen or a king from a deck of 52 cards?",
        "options": [
          "8/52",
          "4/52",
          "1/13",
          "1/52"
        ],
        "correctAnswer": "8/52"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "trigonometry",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the sine of 30°?",
        "options": [
          "0.5",
          "0.6",
          "0.7",
          "0.8"
        ],
        "correctAnswer": "0.5"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "trigonometry",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the cosine of 45°?",
        "options": [
          "0.707",
          "0.5",
          "1",
          "0.866"
        ],
        "correctAnswer": "0.707"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "trigonometry",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the tangent of 60°?",
        "options": [
          "1.732",
          "1.5",
          "1.0",
          "0.577"
        ],
        "correctAnswer": "1.732"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "trigonometry",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the sine of 90°?",
        "options": [
          "1",
          "0.866",
          "0.5",
          "0"
        ],
        "correctAnswer": "1"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "trigonometry",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the cosine of 0°?",
        "options": [
          "1",
          "0.707",
          "0.5",
          "0"
        ],
        "correctAnswer": "1"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "trigonometry",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the tangent of 45°?",
        "options": [
          "1",
          "0.5",
          "0.707",
          "1.732"
        ],
        "correctAnswer": "1"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "trigonometry",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "Which of the following is the Pythagorean identity?",
        "options": [
          "sin²θ + cos²θ = 1",
          "sinθ + cosθ = 1",
          "tan²θ = 1",
          "sinθ = cosθ"
        ],
        "correctAnswer": "sin²θ + cos²θ = 1"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "trigonometry",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the value of cos(60°)?",
        "options": [
          "0.5",
          "0.707",
          "1",
          "0.866"
        ],
        "correctAnswer": "0.5"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "trigonometry",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the value of sin(0°)?",
        "options": [
          "0",
          "0.5",
          "1",
          "0.707"
        ],
        "correctAnswer": "0"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "trigonometry",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the value of tan(90°)?",
        "options": [
          "undefined",
          "1",
          "0",
          "infinity"
        ],
        "correctAnswer": "undefined"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "trigonometry",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the secant of 60°?",
        "options": [
          "2",
          "1.5",
          "1.732",
          "0.866"
        ],
        "correctAnswer": "2"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "trigonometry",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the cosecant of 30°?",
        "options": [
          "2",
          "1.732",
          "1.5",
          "1"
        ],
        "correctAnswer": "2"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "trigonometry",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "Which of the following is the reciprocal of sine?",
        "options": [
          "Cosecant",
          "Secant",
          "Cosine",
          "Tangent"
        ],
        "correctAnswer": "Cosecant"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "trigonometry",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the value of tan(30°)?",
        "options": [
          "0.577",
          "1.732",
          "0.5",
          "1"
        ],
        "correctAnswer": "0.577"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "trigonometry",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the value of sin(45°)?",
        "options": [
          "0.707",
          "0.866",
          "1",
          "0.5"
        ],
        "correctAnswer": "0.707"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "trigonometry",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the value of cos(45°)?",
        "options": [
          "0.707",
          "0.866",
          "1",
          "0.5"
        ],
        "correctAnswer": "0.707"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "trigonometry",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the value of tan(0°)?",
        "options": [
          "0",
          "1",
          "undefined",
          "infinity"
        ],
        "correctAnswer": "0"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "trigonometry",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the cotangent of 45°?",
        "options": [
          "1",
          "0.707",
          "2",
          "infinity"
        ],
        "correctAnswer": "1"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "trigonometry",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the secant of 0°?",
        "options": [
          "1",
          "0",
          "2",
          "undefined"
        ],
        "correctAnswer": "1"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "trigonometry",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the cosecant of 90°?",
        "options": [
          "1",
          "2",
          "0.707",
          "infinity"
        ],
        "correctAnswer": "1"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "trigonometry",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "Which of the following is the reciprocal of cosine?",
        "options": [
          "Secant",
          "Cosecant",
          "Tangent",
          "Cotangent"
        ],
        "correctAnswer": "Secant"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "trigonometry",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the value of sin(180°)?",
        "options": [
          "0",
          "1",
          "-1",
          "0.707"
        ],
        "correctAnswer": "0"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "trigonometry",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the value of cos(180°)?",
        "options": [
          "-1",
          "1",
          "0",
          "0.707"
        ],
        "correctAnswer": "-1"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "trigonometry",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the value of tan(180°)?",
        "options": [
          "0",
          "undefined",
          "-1",
          "1"
        ],
        "correctAnswer": "0"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "trigonometry",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the secant of 90°?",
        "options": [
          "undefined",
          "1",
          "0",
          "2"
        ],
        "correctAnswer": "undefined"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "trigonometry",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the cosecant of 0°?",
        "options": [
          "undefined",
          "1",
          "2",
          "0"
        ],
        "correctAnswer": "undefined"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "trigonometry",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the value of cot(30°)?",
        "options": [
          "1.732",
          "0.577",
          "1",
          "2"
        ],
        "correctAnswer": "1.732"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "trigonometry",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the value of sec(60°)?",
        "options": [
          "2",
          "1.732",
          "1",
          "0.5"
        ],
        "correctAnswer": "2"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "trigonometry",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the value of tan(0°)?",
        "options": [
          "0",
          "undefined",
          "1",
          "infinity"
        ],
        "correctAnswer": "0"
,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "trigonometry",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
        "question": "What is the value of cot(60°)?",
        "options": [
          "0.577",
          "1.732",
          "2",
          "1"
        ],
        "correctAnswer": "0.577"
,"explanation":"To follow: wait for new app release/updates"
},
      
      {
        "major": "Math",
        "subject": "algebra",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the value of x in the equation 2x + 5 = 15?",
          "options": [
            "5",
            "10",
            "7",
            "6"
          ],
          "correctAnswer": "5"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "algebra",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the value of y in the equation 3y - 4 = 20?",
          "options": [
            "8",
            "7",
            "6",
            "5"
          ],
          "correctAnswer": "8"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "algebra",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the solution to the equation 4x - 6 = 10?",
          "options": [
            "x = 4",
            "x = 5",
            "x = 6",
            "x = 3"
          ],
          "correctAnswer": "x = 4"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "algebra",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the value of x in the equation x/5 = 3?",
          "options": [
            "10",
            "15",
            "20",
            "25"
          ],
          "correctAnswer": "15"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "algebra",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the solution to the equation 5x - 3 = 22?",
          "options": [
            "x = 5",
            "x = 6",
            "x = 7",
            "x = 8"
          ],
          "correctAnswer": "x = 5"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "algebra",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the solution to the equation 3x + 7 = 16?",
          "options": [
            "x = 3",
            "x = 4",
            "x = 5",
            "x = 6"
          ],
          "correctAnswer": "x = 3"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "algebra",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the solution to the equation 2x - 4 = 12?",
          "options": [
            "x = 6",
            "x = 7",
            "x = 8",
            "x = 9"
          ],
          "correctAnswer": "x = 8"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "algebra",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the value of x in the equation 6x + 2 = 20?",
          "options": [
            "x = 3",
            "x = 4",
            "x = 5",
            "x = 6"
          ],
          "correctAnswer": "x = 3"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "algebra",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the solution to the equation 7x - 5 = 16?",
          "options": [
            "x = 3",
            "x = 4",
            "x = 5",
            "x = 6"
          ],
          "correctAnswer": "x = 3"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "algebra",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the value of x in the equation x + 9 = 15?",
          "options": [
            "x = 5",
            "x = 6",
            "x = 7",
            "x = 8"
          ],
          "correctAnswer": "x = 6"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "algebra",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the solution to the equation 3x + 4 = 13?",
          "options": [
            "x = 3",
            "x = 2",
            "x = 4",
            "x = 5"
          ],
          "correctAnswer": "x = 3"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "algebra",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the value of y in the equation 2y + 10 = 24?",
          "options": [
            "y = 7",
            "y = 8",
            "y = 9",
            "y = 10"
          ],
          "correctAnswer": "y = 7"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "algebra",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the solution to the equation 6x + 3 = 15?",
          "options": [
            "x = 2",
            "x = 3",
            "x = 4",
            "x = 5"
          ],
          "correctAnswer": "x = 2"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "algebra",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the value of x in the equation 8x - 4 = 28?",
          "options": [
            "x = 3",
            "x = 4",
            "x = 5",
            "x = 6"
          ],
          "correctAnswer": "x = 4"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "algebra",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the solution to the equation 9x + 3 = 27?",
          "options": [
            "x = 2",
            "x = 3",
            "x = 4",
            "x = 5"
          ],
          "correctAnswer": "x = 3"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "algebra",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the value of x in the equation x/2 + 3 = 8?",
          "options": [
            "x = 10",
            "x = 12",
            "x = 14",
            "x = 16"
          ],
          "correctAnswer": "x = 10"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "algebra",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the solution to the equation 2x + 8 = 20?",
          "options": [
            "x = 4",
            "x = 6",
            "x = 8",
            "x = 10"
          ],
          "correctAnswer": "x = 6"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "algebra",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the value of x in the equation 3x - 2 = 16?",
          "options": [
            "x = 5",
            "x = 6",
            "x = 4",
            "x = 7"
          ],
          "correctAnswer": "x = 6"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "algebra",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the solution to the equation 4x + 5 = 21?",
          "options": [
            "x = 4",
            "x = 5",
            "x = 6",
            "x = 3"
          ],
          "correctAnswer": "x = 4"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "algebra",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the value of x in the equation 5x - 7 = 13?",
          "options": [
            "x = 4",
            "x = 5",
            "x = 6",
            "x = 3"
          ],
          "correctAnswer": "x = 4"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "algebra",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the solution to the equation 7x - 9 = 20?",
          "options": [
            "x = 5",
            "x = 6",
            "x = 7",
            "x = 4"
          ],
          "correctAnswer": "x = 5"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "algebra",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the value of y in the equation 3y + 4 = 22?",
          "options": [
            "y = 5",
            "y = 6",
            "y = 7",
            "y = 8"
          ],
          "correctAnswer": "y = 6"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "algebra",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the solution to the equation 2x + 3 = 9?",
          "options": [
            "x = 4",
            "x = 3",
            "x = 2",
            "x = 1"
          ],
          "correctAnswer": "x = 3"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "algebra",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the value of x in the equation x - 5 = 9?",
          "options": [
            "x = 12",
            "x = 14",
            "x = 13",
            "x = 10"
          ],
          "correctAnswer": "x = 14"
  ,"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Math",
        "subject": "",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the value of 5 + 8?",
          "options": [
            "12",
            "13",
            "14",
            "15"
          ],
          "correctAnswer": "13"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is 9 - 4?",
          "options": [
            "3",
            "4",
            "5",
            "6"
          ],
          "correctAnswer": "5"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is 12 × 3?",
          "options": [
            "36",
            "34",
            "40",
            "42"
          ],
          "correctAnswer": "36"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the square root of 49?",
          "options": [
            "6",
            "7",
            "8",
            "9"
          ],
          "correctAnswer": "7"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is 15 ÷ 3?",
          "options": [
            "3",
            "5",
            "6",
            "7"
          ],
          "correctAnswer": "5"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is 6 + 4 × 2?",
          "options": [
            "14",
            "16",
            "12",
            "18"
          ],
          "correctAnswer": "14"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the perimeter of a square with a side length of 5 cm?",
          "options": [
            "15 cm",
            "20 cm",
            "25 cm",
            "10 cm"
          ],
          "correctAnswer": "20 cm"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the area of a rectangle with a length of 6 cm and a width of 3 cm?",
          "options": [
            "18 cm²",
            "20 cm²",
            "15 cm²",
            "9 cm²"
          ],
          "correctAnswer": "18 cm²"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the value of 3³?",
          "options": [
            "9",
            "27",
            "81",
            "12"
          ],
          "correctAnswer": "27"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is 8²?",
          "options": [
            "16",
            "64",
            "32",
            "48"
          ],
          "correctAnswer": "64"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is 45 ÷ 5?",
          "options": [
            "5",
            "6",
            "9",
            "10"
          ],
          "correctAnswer": "9"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the circumference of a circle with a radius of 7 cm? (Use π = 3.14)",
          "options": [
            "43.96 cm",
            "49.74 cm",
            "44.00 cm",
            "44.50 cm"
          ],
          "correctAnswer": "43.96 cm"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is 20% of 150?",
          "options": [
            "25",
            "30",
            "35",
            "40"
          ],
          "correctAnswer": "30"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "If the area of a triangle is 30 cm² and its base is 6 cm, what is its height?",
          "options": [
            "5 cm",
            "6 cm",
            "10 cm",
            "15 cm"
          ],
          "correctAnswer": "10 cm"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the volume of a cube with side length 4 cm?",
          "options": [
            "16 cm³",
            "32 cm³",
            "64 cm³",
            "48 cm³"
          ],
          "correctAnswer": "64 cm³"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the sum of the angles of a triangle?",
          "options": [
            "90°",
            "180°",
            "270°",
            "360°"
          ],
          "correctAnswer": "180°"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the value of 2⁴?",
          "options": [
            "4",
            "8",
            "16",
            "32"
          ],
          "correctAnswer": "16"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the distance between the points (3, 4) and (7, 1)?",
          "options": [
            "4.24",
            "5.24",
            "3.24",
            "6.24"
          ],
          "correctAnswer": "5"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the slope of the line passing through the points (2, 3) and (4, 7)?",
          "options": [
            "2",
            "1",
            "0.5",
            "4"
          ],
          "correctAnswer": "2"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the quadratic equation for x² - 5x + 6 = 0?",
          "options": [
            "x = 1 or x = 6",
            "x = 2 or x = 3",
            "x = -2 or x = -3",
            "x = 0 or x = 6"
          ],
          "correctAnswer": "x = 2 or x = 3"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the area of a circle with a radius of 4 cm? (Use π = 3.14)",
          "options": [
            "50.24 cm²",
            "40.24 cm²",
            "48.24 cm²",
            "44.24 cm²"
          ],
          "correctAnswer": "50.24 cm²"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the greatest common divisor (GCD) of 24 and 36?",
          "options": [
            "6",
            "12",
            "18",
            "24"
          ],
          "correctAnswer": "12"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the least common multiple (LCM) of 5 and 8?",
          "options": [
            "20",
            "25",
            "30",
            "40"
          ],
          "correctAnswer": "40"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the sum of the first 10 positive integers?",
          "options": [
            "55",
            "45",
            "65",
            "50"
          ],
          "correctAnswer": "55"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the hypotenuse of a right triangle with legs 3 cm and 4 cm?",
          "options": [
            "5 cm",
            "6 cm",
            "7 cm",
            "8 cm"
          ],
          "correctAnswer": "5 cm"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the formula for the area of a rectangle?",
          "options": [
            "Length × Width",
            "Length + Width",
            "2 × Length + 2 × Width",
            "Length - Width"
          ],
          "correctAnswer": "Length × Width"
  ,"explanation":"To follow: wait for new app release/updates"
},
        {
        "major": "Math",
        "subject": "",
        "difficulty": "Easy",
        "bloomstaxonomy": "Remembering",
        "ytlink": "To be followed",
          "question": "What is the value of 5 × (6 + 3)?",
          "options": [
            "45",
            "50",
            "55",
            "60"
          ],
          "correctAnswer": "45"
  ,"explanation":"To follow: wait for new app release/updates"
},
  ];

// Route to fetch questions
app.get("/api/questions", (req, res) => {
  res.json(questions); // Send the list of questions as the response
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
