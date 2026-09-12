# JavaScript Fundamentals

A collection of beginner-to-intermediate JavaScript examples covering core language fundamentals — variables, operators, loops, functions, conditionals, and DOM manipulation via inline, internal, and external scripts.

## 📁 Project Structure

```
javascript-fundamentals/
├── README.md
├── basics/
│   ├── arithmetic.js
│   ├── loop.js
│   ├── function.js
│   ├── factorial.js
│   ├── table.js
│   ├── vote.js
│   └── sum.js
├── dom-examples/
│   ├── inline.html
│   ├── internal.html
│   ├── external.html
│   ├── external.js
│   ├── sample.html
│   └── demo2.html
└── assets/
    ├── light_on.jpg
    └── light_off.jpg
```

## 📜 File Descriptions

### Basics (`basics/`)

| File | Description |
|------|-------------|
| `arithmetic.js` | Demonstrates basic arithmetic operators: `+`, `-`, `*`, `/`, `%`, `**` |
| `loop.js` | A `for` loop that logs iteration numbers |
| `function.js` | Basic function declarations and function calls |
| `factorial.js` | Calculates the factorial of a number using a `for` loop |
| `table.js` | Generates a multiplication table for a given number |
| `vote.js` | Uses an `if...else` statement to check voting eligibility by age |
| `sum.js` | Calculates and logs the sum of two numbers |

### DOM Examples (`dom-examples/`)

| File | Description |
|------|-------------|
| `inline.html` | Demonstrates an inline event handler (`onclick`) triggering an alert |
| `internal.html` | Demonstrates an internal `<script>` block inside the HTML `<head>` |
| `external.html` / `external.js` | Demonstrates linking an external JavaScript file using `<script src="">` |
| `sample.html` | Changes HTML content dynamically using `innerHTML` |
| `demo2.html` | Toggles an image (light bulb on/off) by changing its `src` attribute on button click |

### Assets (`assets/`)
Image files used in `demo2.html` to demonstrate dynamic image switching.

## 🚀 How to Run

### JavaScript files (`.js`)
1. Install [Node.js](https://nodejs.org/) if not already installed.
2. Run any file from the terminal:
   ```bash
   node basics/arithmetic.js
   ```

### HTML files (`.html`)
1. Open the file directly in a browser, or use a live server extension (e.g., VS Code's "Live Server").
2. Open the browser's Developer Console (`F12` or `Ctrl+Shift+I`) to view `console.log()` output where applicable.

## 🛠️ Topics Covered

- Variables and data types
- Arithmetic and comparison operators
- Conditional statements (`if...else`)
- Loops (`for`)
- Functions and function calls
- DOM manipulation (`innerHTML`, `src`, event handling)
- Inline, internal, and external JavaScript integration

## 📌 Notes

This repository is intended for learning and reference purposes, documenting a step-by-step progression through core JavaScript concepts.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
