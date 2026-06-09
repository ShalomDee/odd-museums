# Odd Museums

A listicle web app cataloguing seven spooky/creepy museums. Built with Node.js, Express, and vanilla HTML/CSS/JS.

## Demo Walkthrough

![App Demo](demo.gif)

## Features

- Uses only HTML, CSS, and JavaScript without a frontend framework
- Front page is functional and appropriately styled
- The web app displays a title
- Displays at least five unique list items
- Each list item includes at least three displayed attributes (name, location, curiosity level)
- Each list item has a corresponding detail page (e.g. `/museums/mutter-museum`)
- Clicking an item shows a detailed view including all fields
- Serves an appropriate 404 page for undefined routes
- Styled with Pico CSS

## The Museums

| Name | Location | Curiosity Level |
|---|---|---|
| The Mutter Museum | Philadelphia, USA | Nightmare Fuel |
| The Paris Catacombs | Paris, France | Historically Chilling |
| Meguro Parasitological Museum | Tokyo, Japan | Unsettling |
| Museum of Broken Relationships | Zagreb, Croatia | Emotionally Devastating |
| Vent Haven Museum | Kentucky, USA | Uncanny |
| Capuchin Crypt | Rome, Italy | Historically Chilling |
| Sedlec Ossuary | Kutna Hora, Czech Republic | Mind-Bending |

## Setup

```bash
npm install
node index.js
```

Then open `http://localhost:3000`.

## Project Structure

```
odd-museums/
├── index.js        # Express server and routes
├── data.js         # Museum data
├── views/          # HTML pages
│   ├── index.html
│   ├── detail.html
│   └── 404.html
└── public/         # Static assets
    └── styles.css
```

## Tech Stack

- Node.js
- Express
- Pico CSS
- Vanilla HTML/CSS/JS