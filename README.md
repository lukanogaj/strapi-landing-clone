# Strapi Landing Page Clone

A simplified recreation of the Strapi landing page built with **Vanilla JavaScript, HTML, and CSS**.

The project focuses on **modular DOM rendering, reusable utilities, and data-driven UI generation without using frameworks**.

---

## Live Demo

https://lukanogaj.github.io/strapi-landing-clone/

---

## Features

- Modular section-based rendering (Header, Hero, Logos, Features, Steps)
- Dynamic DOM creation using a reusable `createElement` utility
- Data-driven UI generation using separate data files
- Infinite scrolling company logos carousel
- Responsive layout for desktop, tablet, and mobile
- Clean component-like architecture using ES modules

---

## Tech Stack

- JavaScript (Vanilla, ES Modules)
- HTML5
- CSS3

---

## Project Structure

```text
strapi-landing-clone
│
├── index.html
├── main.js
│
├── src
│   ├── data
│   │   ├── featuresData.js
│   │   └── logosData.js
│   │
│   ├── sections
│   │   ├── renderHeader.js
│   │   ├── renderHero.js
│   │   ├── renderLogos.js
│   │   ├── renderFeatures.js
│   │   └── renderSteps.js
│   │
│   └── utils
│       └── createElement.js
│
├── styles
│   ├── base.css
│   ├── header.css
│   ├── hero.css
│   ├── logos.css
│   ├── features.css
│   ├── steps.css
│   └── responsive.css
│
└── img-logos
```

---

## Purpose

This project demonstrates **core frontend fundamentals without frameworks**, including:

- DOM manipulation
- reusable utilities
- modular UI architecture
- responsive layout design

It is part of my portfolio while preparing for a **Junior Frontend Developer role**.

---

## Author

**Lukasz Nogaj**
