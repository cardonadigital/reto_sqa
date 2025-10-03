# 🖥️ JQuery Datepicker Automation – Playwright + Cucumber + TypeScript

Automated test suite for the **JQuery Datepicker** widget using **Playwright** and **Cucumber** with a **Page Object Model (POM)** approach.

---

## 🔹 Features

- Select a specific date in the current month.
- Select a date in a different month (next/previous month navigation).
- Validate that the input field **does not allow manual typing**.
- Fully integrated with **Cucumber** for BDD-style scenarios.
- Uses **Page Object Model** to abstract page actions.
- Works inside **iframes** and supports robust selectors.

---

## 🛠️ Tech Stack

- [Node.js](https://nodejs.org/) (>=18 recommended)
- [Playwright](https://playwright.dev/)
- [Cucumber](https://cucumber.io/)
- TypeScript
- Page Object Model (POM) design pattern

---

## ⚡ Project Structure

```
src/
├─ pages/
│ └─ homePage.ts # POM for datepicker
├─ steps/
│ └─ home.steps.ts # Step definitions
├─ features/
│ └─ datepicker.feature # Feature file
├─ config/
│ └─ world.ts # Custom World for Playwright
└─ utils/
└─ hooks.ts # Before/After hooks
```
## 📝 Running Tests

```
npm install
```



