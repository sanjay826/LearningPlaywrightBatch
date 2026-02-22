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

```
LearningPlaywrightBatch/
│
├── chapter_01_Basic/          # JavaScript & Node.js Basics
│   ├── 01_basic.js            # Platform detection
│   ├── 02_JS_Step_By_Step.js  # JS fundamentals (variables, loops, functions)
│   ├── 03_verify_setup.js     # Node.js environment verification
│   └── 04_hot_code.js         # Hot reload / live coding exercises
│
├── .gitignore                 # Ignored files & folders
└── README.md                  # Project documentation (this file)
```

> 📁 More chapters will be added as the batch progresses.

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
