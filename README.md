# Responsive Calculator

This is a simple calculator app with a responsive layout built using HTML, CSS and JavaScript.

## Features

- Basic arithmetic operations (add, subtract, multiply, divide)  
- Clear button to clear the input
- Responsive design that works well on mobile and desktop screens
- Simple, clean UI

## Usage

The calculator allows users to:

- Click on the number buttons to enter numbers
- Click on the operator buttons to enter +, -, x, ÷ operators  
- Click the '=' button to evaluate the mathematical expression and display the result
- Click the 'C' button to clear the input and start new calculation
- Click the '⌫' button to clear the last digit on the display box

The calculator screen adjusts and redistributes elements to suit mobile and desktop layouts.

## Code Overview

The main files and folders:

- `Responsive_cal.html` - Contains the HTML markup
- `Responsive_cal.css` - Contains the CSS styling 
- `Responsive_cal.js` - Contains the JavaScript logic

The `Responsive_cal.html` has a simple layout with a `<div>` for the calc-body and a `<div>` for the calc-display.

The `Responsive_cal.css` uses CSS Grid and media queries to create the responsive layout. Key styles:

- Grid for overall layout
- Flexbox for button layout
- Media queries to rearrange elements for mobile

The `Responsive_cal.js` handles the calculator logic like capturing button clicks, updating display, doing calculations etc.

Key functions:
- `updateDisplay()` to update the calculator display
- `clear()` to reset display and data
- `calculate()` to do the math operation
  
Let me know if you would like me to modify or expand this README!
