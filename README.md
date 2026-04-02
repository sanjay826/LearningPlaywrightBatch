# 🎭 Learning Playwright Batch: The JavaScript & Automation Handbook

Welcome! This repository serves as a structured, chapter-by-chapter guide to mastering **JavaScript** and **Microsoft Playwright** for browser automation and end-to-end testing. 

This README is formatted as a **Study Book**. Below you will find comprehensive chapter summaries and core interview questions to prepare you for technical interviews.

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
├── chapter_02_JavaScript_Conecpt/                   # Variables, Hoisting, Scope
├── chapter_03_idetifier_literal_operators_statement/# Identifiers, Literals, Types
├── chapter_04_Operator/                             # Various JS Operators
├── chapter_05_Statements/                           # If/Else & Control Flow
├── chapter_06_switch_Statements/                    # Switch logic processing
├── chapter_07_Loop/                                 # Loops and automation
├── Assignment/                                      # Code Challenges
│
├── .gitignore                                       # Ignored files & folders
└── README.md                                        # Project documentation (this file)
```

> 📁 More chapters and concepts are added as the batch progresses.

---

## Chapters Overview

### Chapter 01 — JavaScript & Node.js Basics
**Topic Summary:** Getting comfortable with JavaScript fundamentals and the Node.js environment before diving into Playwright.
> **Folder:** `chapter_01_Basic/`

| File | Topic |
|------|-------|
| `01_basic.js` | Detecting the OS platform using `process.platform` |
| `02_JS_Step_By_Step.js` | Variables, `for` loops, and functions in JavaScript |
| `03_verify_setup.js` | Verifying Node.js setup — platform, architecture, version |
| `04_hot_code.js` | Live/hot coding practice file |

---

### Chapter 02 — JavaScript Concepts (Variables, Hoisting, Scope)
**Topic Summary:** Deep dive into core JavaScript concepts such as variable declarations (`var`, `let`, `const`), hoisting behavior, and scoping rules.
> **Folder:** `chapter_02_JavaScript_Conecpt/`

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

#### 📝 Interview Questions: Variables & Hoisting
* **Q: What is the main difference between var, let, and const?**
  * **A:** `var` is function-scoped. `let` and `const` are block-scoped. Both `var` and `let` can be reassigned, but `const` strictly cannot be reassigned.
* **Q: Which variable declarations can be redeclared?**
  * **A:** Only `var` allows you to create the exact same variable name twice. Doing this with `let` or `const` throws an error.
* **Q: What is "Hoisting" in JavaScript?**
  * **A:** It is JavaScript's default behavior of allocating memory for variables and functions *before* the code runs. For `var`, it initializes the value as `undefined`.

---

### Chapter 03 — Identifiers, Literals, Operators & Statements
**Topic Summary:** Exploring symbols, numbers, and strings. Understanding the difference between variable names and the data they hold.
> **Folder:** `chapter_03_idetifier_literal_operators_statement/`

| File | Topic |
|------|-------|
| `19_identifier.js` | JavaScript Identifiers |
| `20_literals.js` | Introduction to Literals |
| `21_literal_all.js` | Various types of JavaScript literals |
| `22_null_Typeof.js` | Checking `typeof` for `null` |
| `23_null_undefined.js` | Key differences between `null` and `undefined` |
| `24_equal_triequal.js` | Loose equality (`==`) vs Strict equality (`===`) |
| `25_IQ.js` | Common Interview Questions (IQ) |

#### 📝 Interview Questions: Identifiers & Literals
* **Q: What is the difference between an Identifier and a Literal?**
  * **A:** Think of a shipping box. The Identifier is the *label* written on the outside (e.g., `let weight`). The Literal is the *actual item* placed inside the box (e.g., the number `50`).
* **Q: What are the primary rules for naming Identifiers?**
  * **A:** They must start with a letter, an underscore (`_`), or a dollar sign (`$`). They cannot start with a number, contain spaces, or be a reserved keyword.

---

### Chapter 04 — Operators
**Topic Summary:** Comprehensive coverage of various mathematical and logical operators used in JavaScript.
> **Folder:** `chapter_04_Operator/`

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
| `Operator_Question_Answer.js` | Q&A with Operators |

#### 📝 Interview Questions: Operators
* **Q: What is the difference between `==` and `===`?**
  * **A:** `==` (Loose Equality) checks for equality of VALUE only and will automatically convert types. `===` (Strict Equality) checks for equality of VALUE AND TYPE.
* **Q: What is the Modulus (`%`) operator?**
  * **A:** It returns the remainder of a division. For example, `10 % 3` equals `1`.
* **Q: How do the Logical Operators `&&` and `||` work?**
  * **A:** `&&` (AND) returns true ONLY if both sides are true. `||` (OR) returns true if at least ONE side is true.

---

### Chapter 05 — Conditional Statements (If/Else)
**Topic Summary:** Understanding control flow using `if`, `else if`, and `else` statements to make decisions in your code based on logical conditions.
> **Folder:** `chapter_05_Statements/`

| File | Topic |
|------|-------|
| `34_Statement.js` | JavaScript Statements Basics |
| `35_if_else_If.js` | Syntax and logic of `if` and `else` |
| `36_Real_Life_Example.js` | Practical examples of conditionals |
| `37_APIs_If_else.js` | Using conditions with APIs |
| `38_IQ_if_else.js`...`42_IQ.js` | Interview condition evaluations |

#### 📝 Interview Questions: Conditional Statements
* **Q: What is the purpose of the `if/else` statement?**
  * **A:** It tells your program to execute a specific block of code ONLY if a certain condition is true, otherwise it can run an alternative block.

---

### Chapter 06 — Switch Statements
**Topic Summary:** Exploring the `switch` statement as a cleaner and faster alternative to writing a massive chain of `if/else` blocks when checking for specific static values.
> **Folder:** `chapter_06_switch_Statements/`

| File | Topic |
|------|-------|
| `43_Switch.js` | Intro to Switch Statements |
| `44_Switch_with_Break.js` | Using the `break` keyword |
| `45_Switch_with_Default.js` | Using the `default` fallback option |
| `46_Switch_with_Real_Exam.js` | Real-world Switch Examples |
| `47_Switch_groupCase.js` | Grouping multiple Cases together |
| `48_IQ_Bug.js`...`52_Switch_IQ.js` | Various Interview Switch Bugs / Challenges |

#### 📝 Interview Questions: Switch Statements
* **Q: What happens if you forget the `break` keyword in a switch case?**
  * **A:** It causes "Fall-through". The code will keep executing the rest of the cases automatically, regardless of whether they match, until it hits the very end or finds another `break`.

---

### Chapter 07 — Loops
**Topic Summary:** Automating repetitive tasks. Covers standard looping mechanisms like the `for` loop to iterate through data without writing duplicate lines of code.
> **Folder:** `chapter_07_Loop/`

| File | Topic |
|------|-------|
| `54_Loop.js` | Introduction to looping logic |
| `55_For_Loop.js` | Syntax and structure of the `for` loop |

#### 📝 Interview Questions: Loops
* **Q: What are the three parts of a standard `for` loop?**
  * **A:** 1. Initialization (`let i = 0`), 2. Condition boundary (`i < 5`), 3. Iteration step (`i++`).

---

### Assignments & Code Challenges
**Topic Summary:** Practical code challenges and daily assignments to test your knowledge.
> **Folder:** `Assignment/`

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
