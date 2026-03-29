# 🎭 Learning Playwright Batch

A structured, chapter-by-chapter guide to learning **Microsoft Playwright** for browser automation and end-to-end testing using **Node.js / JavaScript**.

---

## 📚 Table of Contents

- [About](#about)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Chapters Overview](#chapters-overview)
- [Running Scripts](#running-scripts)
- [Author](#author)

---

## About

This repository contains hands-on exercises and examples from a Playwright learning batch. Each chapter focuses on a specific concept — starting from the very basics of JavaScript and Node.js, gradually progressing toward full Playwright browser automation, test writing, and advanced features.

---

## Prerequisites

Make sure you have the following installed before getting started:

| Tool | Version | Download |
|------|---------|----------|
| **Node.js** | v18+ (LTS recommended) | [nodejs.org](https://nodejs.org/) |
| **npm** | Comes with Node.js | — |
| **Git** | Any recent version | [git-scm.com](https://git-scm.com/) |

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/sanjay826/LearningPlaywrightBatch.git
cd LearningPlaywrightBatch
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Playwright Browsers

```bash
npx playwright install
```

---

## Project Structure

```text
LearningPlaywrightBatch/
│
├── chapter_01_Basic/                                # JavaScript & Node.js Basics
│   ├── 01_basic.js            # Platform detection
│   ├── 02_JS_Step_By_Step.js  # JS fundamentals (variables, loops, functions)
│   ├── 03_verify_setup.js     # Node.js environment verification
│   └── 04_hot_code.js         # Hot reload / live coding exercises
│
├── chapter_02_JavaScript_Conecpt/                   # Variables, Hoisting, Scope
├── chapter_03_idetifier_literal_operators_statement/# Identifiers, Literals, Types
├── chapter_04_Operator/                             # Various JS Operators
├── chapter_05_Statements/                           # Statements & Control Flow
├── Assignment/                                      # Code Challenges
│
├── .gitignore                                       # Ignored files & folders
└── README.md                                        # Project documentation (this file)
```

> 📁 More chapters and concepts are added as the batch progresses.

---

## Chapters Overview

### Chapter 01 — JavaScript & Node.js Basics

> **Folder:** `chapter_01_Basic/`

Getting comfortable with JavaScript fundamentals and the Node.js environment before diving into Playwright.

| File | Topic |
|------|-------|
| `01_basic.js` | Detecting the OS platform using `process.platform` |
| `02_JS_Step_By_Step.js` | Variables, `for` loops, and functions in JavaScript |
| `03_verify_setup.js` | Verifying Node.js setup — platform, architecture, version |
| `04_hot_code.js` | Live/hot coding practice file |

### Chapter 02 — JavaScript Concepts (Variables, Hoisting, Scope)

> **Folder:** `chapter_02_JavaScript_Conecpt/`

Deep dive into core JavaScript concepts such as variable declarations, hoisting behavior, and scoping rules.

| File | Topic |
|------|-------|
| `05_Core_comments_JS.js` | Core comments in JavaScript |
| `06_Core_Identifier_JS.js` | Rules and practices for Identifiers |
| `07_var_let_const_JS.js` | Differences between `var`, `let`, and `const` |
| `08_Lab.js` | Lab exercises for hands-on practice |
| `09_Hoisting.js` | Understanding variable hoisting |
| `10_Hoisting_var.js` | Hoisting behavior specifically with `var` |
| `11_Hoisting_function.js` | Hoisting behavior with functions |
| `12_Hoisting_If_block.js` | Hoisting within `if` blocks |
| `13_Hoisting.js` | More hoisting examples |
| `14_let_Hoisting.js` | Temporal Dead Zone (TDZ) and `let` hoisting |
| `15_if_block.js` | Scope within `if` blocks |
| `16_var_if_loops.js` | Scope of `var` in `if` statements and loops |
| `17_rohitQuestion.js` | Doubt/Question resolution example |
| `18_const.js` | Working with `const` declarations |
| `Example.js` | General concepts demonstration |

### Chapter 03 — Identifiers, Literals, Operators & Statements

> **Folder:** `chapter_03_idetifier_literal_operators_statement/`

Exploring literals, equality comparisons, and common interview questions around JavaScript types.

| File | Topic |
|------|-------|
| `19_identifier.js` | JavaScript Identifiers |
| `20_literals.js` | Introduction to Literals |
| `21_literal_all.js` | Various types of JavaScript literals |
| `22_null_Typeof.js` | Checking `typeof` for `null` |
| `23_null_undefined.js` | Key differences between `null` and `undefined` |
| `24_equal_triequal.js` | Loose equality (`==`) vs Strict equality (`===`) |
| `25_IQ.js` | Common Interview Questions (IQ) |

### Chapter 04 — Operators

> **Folder:** `chapter_04_Operator/`

Comprehensive coverage of various operators used in JavaScript.

| File | Topic |
|------|-------|
| `26_Assigned_Operator.js` | Assigned Operators |
| `27_Assignment_Operator.js` | Assignment Operators (`=`, `+=`, `-=`, etc.) |
| `28_Comparison_Operator.js` | Comparison Operators (`<`, `>`, `<=`, `>=`, etc.) |
| `29_Logical_Operator.js` | Logical Operators (`&&`, `||`, `!`) |
| `30_String_Operator.js` | String concatenation and operations |
| `31_Ternary_Operator.js` | Using the Ternary Operator (`? :`) |
| `32_Type_Operator.js` | Type Operators (`typeof`, `instanceof`) |
| `33_Null_Optional_Value.js` | Nullish Coalescing (`??`) and Optional Chaining (`?.`) |

### Chapter 05 — Statements

> **Folder:** `chapter_05_Statements/`

Understanding control flow and statements.

| File | Topic |
|------|-------|
| `33_Statement.js` | JavaScript Statements basics |

### Assignments & Code Challenges

> **Folder:** `Assignment/`

Practical code challenges and daily assignments to test your knowledge.

| File | Topic |
|------|-------|
| `10March.js` | Assignment for March 10 |
| `CodeChallange1.js` | Code Challenge 1 |
| `CodeChallange2.js` | Code Challenge 2 |
| `CodeChallange3.js` | Code Challenge 3 |

---

## Running Scripts

To run any individual script:

```bash
node chapter_01_Basic/01_basic.js
node chapter_01_Basic/02_JS_Step_By_Step.js
node chapter_01_Basic/03_verify_setup.js
```

---

## Author

**Promod Dutta**  
Learning Playwright with purpose 🚀

---

## 📝 License

This project is for **educational purposes** only. Feel free to fork and learn!
